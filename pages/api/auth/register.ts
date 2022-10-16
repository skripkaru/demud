import connectDB from '../../../lib/connectDB'
import Users from '@models/userModel'
import valid from '@utils/valid'
import bcrypt from 'bcrypt'

connectDB()

export default async (req: any, res: any) => {
  switch (req.method) {
    case 'POST':
      await register(req, res)
      break
  }
}

const register = async (req: any, res: any) => {
  try {
    const { name, email, password, cf_password } = req.body

    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return res.status(400).json({ err: errMsg })

    const user = await Users.findOne({ email })
    if (user) {
      return res
        .status(400)
        .json({ err: 'Этот адрес электронной почты уже существует' })
    }

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = new Users({
      name,
      email,
      password: passwordHash,
      cf_password,
    })

    await newUser.save()
    res.json({ msg: 'Регистрация прошла успешно!' })
  } catch (err: any) {
    return res.status(500).json({ err: err.message })
  }
}
