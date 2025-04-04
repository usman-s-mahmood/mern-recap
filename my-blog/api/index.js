import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

dotenv.config()

try {
    mongoose.connect(
        process.env.MONGO // 'mongodb+srv://use_your_username:use_your_password@cluster0.uwvx8w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' -> define this in api/.env
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
app.use(express.json()); // this will enable json receiving in the app

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes)