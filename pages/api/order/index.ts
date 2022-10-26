import { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@lib/connectDB'
import auth from '@middleware/auth'
import Orders from '@models/order'
import Products from '@models/product'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await createOrder(req, res)
      break
  }
}

const createOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await auth(req, res)
    const { address, phone, cart, total } = req.body

    const newOrder = new Orders({
      user: result?.id,
      address,
      phone,
      cart,
      total,
    })

    await newOrder.save()

    res.json({
      msg: 'Payment success! We will contact you to confirm the order',
      newOrder,
    })
  } catch (err: any) {
    return res.status(500).json({ err: err.message })
  }
}

const sold = async (
  id: number,
  quantity: number,
  oldInStock: number,
  oldSold: number
) => {
  await Products.findOneAndUpdate(
    { _id, id },
    {
      inStock: oldInStock - quantity,
      sold: quantity + oldSold,
    }
  )
}
