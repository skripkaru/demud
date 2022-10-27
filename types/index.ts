export interface IAuth {
  token: string
  user: IUser
}

export interface IUser {
  _id: string
  name: string
  email: string
  password: string
  cf_password: string
  avatar: string | any
  role: string
  root: boolean
}

export interface INotify {
  loading?: boolean
  success?: string
  error?: string
}

export interface IProduct {
  _id: string
  images: any[]
  title: string
  description: string
  material: string
  dimensions: string
  size: string
  color: string
  price: number
  inStock: number
  checked: boolean
  sold: number
  category: string
  quantity: number
}

export interface IOrder {
  user: IUser
  address: string
  phone: string
  cart: IProduct[]
  total: number
  delivered?: boolean
}
