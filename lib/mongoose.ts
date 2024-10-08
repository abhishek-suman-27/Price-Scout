import mongoose from 'mongoose';

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI){
        return console.log('MONDODB_URI is not defined');
    }

    if(isConnected){
        console.log('=> using existing database connection');
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('MongoDB connected');
    }
    catch(error){
        console.log('MongoDB connection error:', error);
    }
}