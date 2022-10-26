import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@lib/connectDB'
import Users from '@models/user'
import bcrypt from 'bcrypt'
import { createAccessToken, createRefreshToken } from '@lib/generateToken'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await login(req, res)
      break
  }
}

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body

    const user = await Users.findOne({ email })
    if (!user) {
      return res.status(400).json({ err: 'Такого пользователя не существует' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ err: 'Некорректный пароль' })
    }

    const access_token = createAccessToken({ id: user._id })
    const refresh_token = createRefreshToken({ id: user._id })

    res.json({
      msg: 'Вы успешно вошли',
      refresh_token,
      access_token,
      user: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        root: user.root,
      },
    })
  } catch (err: any) {
    return res.status(500).json({ err: err.message })
  }
}
