/* eslint-disable import/extensions */
import User from '../models/userModel.js';

export const getUserInfo = async (req, res, next) => {
  try {
    const data = await User.findById(req.user.id)
      .select('name email address');
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

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
      },
      {
        new: true,
      },
    ).select('name email address');
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
