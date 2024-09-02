import User from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
  try {
    const loginUserId = req.loginUser._id;

    const filteredUsers = await User.find({ _id: { $ne: loginUserId } }).select(
      '-password'
    );

    res.status(200).json({ result: filteredUsers });
  } catch (error) {
    console.log('Error in getAllUser controller ', error.message);
    res.status(500).json({ error: 'Serve internal error' });
  }
};
