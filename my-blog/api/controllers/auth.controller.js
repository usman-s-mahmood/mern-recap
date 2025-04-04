import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '')
        next(errorHandler(400, 'All Fields Are Required'));
        // return res.status(400).json({message: "All fields are required!"});
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    try {
        await newUser.save();
        return res.json({message: "Sign Up successful"})
    } catch (error) {
        next(error);
    }
    // console.log(req.body);
};