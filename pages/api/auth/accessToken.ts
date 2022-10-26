import { NextApiResponse, NextApiRequest } from 'next'
import jwt from 'jsonwebtoken'
import connectDB from '@lib/connectDB'
import Users from '@models/user'
import { createAccessToken } from '@lib/generateToken'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rf_token = req.cookies.refreshtoken
    if (!rf_token) {
      return res.status(400).json({ err: 'Пожалуйста, авторизуйтесь' })
    }

    // @ts-ignore
    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
    if (!result) {
      return res
        .status(400)
        .json({ err: 'Ваш токен некорректный или срок его действия истек' })
    }

    // @ts-ignore
    const user = await Users.findById(result.id)
    if (!user) {
      return res.status(400).json({ err: 'Пользователь не существует' })
    }

    const access_token = createAccessToken({ id: user._id })
    res.json({
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
