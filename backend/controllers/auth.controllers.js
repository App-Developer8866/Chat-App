import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateJwtAndSetCookie from '../utils/generateJWT.js';

export const signup = async (req, res) => {
  try {
    const { username, password, fullName, gender, confirmedPassword } =
      req.body;

    if (password !== confirmedPassword) {
      return res.status(400).json({ error: 'Password does not match' });
    }

    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePic =
      gender === 'male'
        ? `https://avatar.iran.liara.run/public/boy?username=${username}`
        : `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      generateJwtAndSetCookie(newUser._id, res);
      await newUser.save();

      return res.status(201).json({ result: { ...newUser._doc } });
    } else {
      return res.status(400).json({ error: 'User data is invalid' });
    }
  } catch (error) {
    console.log('Error in signup controller ', error.message);
    return res.status(500).json({ error: 'Server internal error ' });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isValidPassword = await bcrypt.compare(
      password,
      user?.password || ''
    );

    if (!user || !isValidPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    generateJwtAndSetCookie(user._id, res);
    res.status(200).json({ result: { ...user._doc } });
  } catch (error) {
    console.log('Error in login controller ', error.message);
    return res.status(500).json({ error: 'Server internal error ' });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie('jwt_token', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logout successfully!' });
  } catch (error) {
    console.log('Error in logout controller ', error.message);
    return res.status(500).json({ error: 'Server internal error ' });
  }
};
