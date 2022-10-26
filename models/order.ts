import mongoose, { model, Model, Schema, Types } from 'mongoose'
import { IOrder } from 'types'

const OrderSchema: Schema = new Schema<IOrder>(
  {
    user: {
      type: Types.ObjectId,
      ref: 'user',
    },
    address: String,
    phone: String,
    cart: Array,
    total: Number,
    delivered: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Order: Model<IOrder> =
  mongoose.models.Order || model('Order', OrderSchema)
export default Order
