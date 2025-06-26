const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection failed:', error);
//     process.exit(1);
//   }
// };
// module.exports = connectDB;

/////////////////////////////////////

// mongoose.connect('mongodb://localhost:27017/blackjack', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// module.exports = mongoose;


//////////////////////////////////


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

