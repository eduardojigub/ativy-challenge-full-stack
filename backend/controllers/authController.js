/* eslint-disable import/extensions */
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
export const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.json('Required fields, email and password');
  }
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      'name email password',
    );
    if (!user) {
      return res.status(404).json('No user found');
    }
    const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
      // compara o password de entrada com o password armazenado no BD usando bcrypt
      return res.json('Wrong Password');
    }
    const payload = {
      id: user._id,
      name: user.name, // payload são os dados que são enviados pelo cookie pra acesso.
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d', // gera o jwt e seta o limite de expiração dele em 1 dia
    });
    return res.cookie('access_token', token, {
      httpOnly: true,
      // means you cannot acces this cookie on the front-end. You only can use in the back-end
    }).status(200).json({ message: 'Login sucess' });
  } catch (err) {
    console.log(err);
    return res.json('server error');
  }
};
