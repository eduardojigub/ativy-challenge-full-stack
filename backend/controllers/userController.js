/* eslint-disable import/extensions */
import User from '../models/userModel.js';

export const getUserInfo = async (req, res, next) => {
  try {
    const data = await User.findById(req.user.id)
      .select('name email address tasks');
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('name email');
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
