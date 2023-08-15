import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  //checking connection
  if (isConnected) {
    console.log('MongoDB is connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'muse-mark',

      //it tells Mongoose to use the new URL parser when connecting to the MongoDB server. This is necessary to avoid deprecation warnings and ensure compatibility with newer versions of MongoDB
      useNewUrlParser: true,

      //Setting useUnifiedTopology to true instructs Mongoose to use the new unified topology engine when establishing a connection to the MongoDB server.
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('Great!! MongoDB is Connected Now');
  } catch (error) {
    console.log(error);
  }
};
