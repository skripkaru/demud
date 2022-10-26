import connectDB from '@lib/connectDB'
import Products from '@models/product'
import { NextApiRequest, NextApiResponse } from 'next'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await getProduct(req, res)
      break
  }
}

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const product = await Products.findById(id)
    if (!product) {
      return res.status(400).json({ err: 'Товар не найден' })
    }

    res.json({ product })
  } catch (err: any) {
    return res.status(500).json({ err: err.message })
  }
}
