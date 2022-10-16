export interface Auth {
  token?: string
  user?: User | any
}

export interface User {
  _id: string
  name: string
  email: string
  password: string
  avatar: string
  role: string
  root: boolean
}

export interface Notify {
  loading?: boolean
  success?: string
  error?: string
}

export interface Product {
  _id: string
  images: [{ url: string }],
  title: string
  description: string
  material: string
  size: string
  color: string
  price: number
  inStock: number
  checked: boolean
  sold: number
  category: string
  quantity?: number | any
}