import connectDB from '@lib/connectDB'
import { NextApiRequest, NextApiResponse } from 'next'
import Users from '@models/user'
import auth from '@middleware/auth'
import bcrypt from 'bcrypt'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PATCH':
      await resetPassword(req, res)
      break
  }
}

const resetPassword = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await auth(req, res)
    const { password } = req.body
    const passwordHash = await bcrypt.hash(password, 12)

    await Users.findOneAndUpdate(
      { _id: result?.id },
      { password: passwordHash }
    )

    res.json({ msg: 'Update success' })
  } catch (err: any) {
    return res.status(500).json({ err: err.message })
  }
}
