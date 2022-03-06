import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your name'],
      trim: true,
      maxLength: [20, 'Your name is up to 20 chars long.'],
    },
    account: {
      type: String,
      required: [true, 'Please add your email or phone'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add your password'],
    },
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/jayseak/image/upload/v1619633050/sample.jpg',
    },
    role: {
      type: String,
      default: 'user',
    },
    type: {
      type: String,
      default: 'normal',
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('User', userSchema)
