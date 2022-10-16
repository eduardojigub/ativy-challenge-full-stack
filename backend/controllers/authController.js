/* eslint-disable import/extensions */
import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js';

export const register = async (req, res) => {
  if (!req.body.name
    || !req.body.email // verificando se todos os campos estão preenchidos
    || !req.body.password
    || !req.body.address) {
    return res.json('All fields are required');
  }
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword, // salvando o password com hash na tabela
      address: req.body.address,
    });

    await newUser.save(); // salvando os dados do novo usuário caso a requisição seja um sucesso.
    return res.status(201).json('New user Created');
  } catch (err) {
    console.log(err);
    return res.json('Internal server error');
  }
};
export const login = () => {
};
