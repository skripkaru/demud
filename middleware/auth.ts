import jwt from 'jsonwebtoken'
import Users from '@models/user'
import { NextApiRequest, NextApiResponse } from 'next'

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization

  if (!token) return res.status(400).json({ err: 'Invalid Authentication' })

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string)

  if (!decoded) return res.status(400).json({ err: 'Invalid Authentication' })

  const user = await Users.findOne({ _id: decoded.id })

  return { id: user?._id }
}

export default auth
