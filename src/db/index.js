import mongoose from 'mongoose'
import {DB_Name} from '../constants.js';

const connectDB = async ()=>{
    try{
        const mongoconnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`monogdb connect setup on the: ${mongoconnection.connection.host}`);
    }
    catch (error){
        console.log("MongoDb is giving error: ",error);
    }
}

export default connectDB;