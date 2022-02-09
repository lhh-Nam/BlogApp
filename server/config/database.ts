import mongoose from 'mongoose';

const URI = process.env.MONGODB_URL;

mongoose.connect(`${URI}`, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err) throw err;
  console.log('Mongodb connection')
})

const connectDB = async () => {
    // try {
    //     await mongoose.connect(`${URI}`, {
    //       useCreateIndex: true,
    //       useFindAndModify: false,
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    
}


module.exports = connectDB