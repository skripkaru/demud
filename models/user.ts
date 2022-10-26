import mongoose, { model, Model, Schema } from 'mongoose'
import { IUser } from '../types'

const UserSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    root: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        'https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg',
    },
  },
  {
    timestamps: true,
  }
)

const User: Model<IUser> = mongoose.models.User || model('User', UserSchema)
export default User
