import connectDB from '@lib/connectDB'
import { NextApiRequest, NextApiResponse } from 'next'
import Users from '@models/user'
import auth from '@middleware/auth'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PATCH':
      await uploadInfo(req, res)
      break
  }
}

const uploadInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await auth(req, res)
    const { name, avatar } = req.body

    const newUser = await Users.findOneAndUpdate(
      { _id: result?.id },
      { name, avatar }
    )

    res.json({
      msg: 'Update success',
      user: {
        name,
        avatar,
        email: newUser?.email,
        role: newUser?.role,
      },
    })
  } catch (err: any) {
    return res.status(500).json({ err: err.message })
  }
}
