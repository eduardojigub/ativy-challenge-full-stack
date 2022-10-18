/* eslint-disable import/extensions */
import User from '../models/UserModel.js';

export const getUserById = async (req, res, next) => {
  try {
    const data = await User.findById(req.user.id)
      .select('name email address');
    res.status(200).json(data);
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
