import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

try {
    mongoose.connect(
        process.env.MONGO // 'mongodb+srv://use_your_username:use_your_password@cluster0.uwvx8w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ).then(() => {
        console.log('MongoDB Connected!')
    }).catch((err) => {
        console.error(`Unable to connect with MongoDB Cloud`);
    });
} catch(error) {
    console.error('Unable to Connect with MongoDB!')
    exit(1)
}

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});