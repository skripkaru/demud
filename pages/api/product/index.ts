import {NextApiRequest, NextApiResponse} from "next";
import connectDB from '../../../lib/connectDB'
import Products from '@models/productModel'

connectDB()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res)
      break
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await Products.find()

    res.json({
      status: 'success',
      result: products.length,
      products,
    })
  } catch (err: any) {
    return res.status(500).json({ err: err.message })
  }
}