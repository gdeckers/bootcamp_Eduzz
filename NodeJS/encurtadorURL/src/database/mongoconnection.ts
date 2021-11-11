import mongoose from "mongoose";
import { config } from "../config/constants";

export class MongoConenction{
    public async connect(): Promise<void>{
        try {
            await mongoose.connect(config.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
            console.log('Database connected')
        } catch (error) {
            console.log(error)
            process.exit(1);
        }
    }
}