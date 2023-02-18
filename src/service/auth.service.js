import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { conflictError } from "../errors/errors.js";
import authRepository from "../repositories/auth.repository.js";
import authService from "../service/auth.service.js";

async function signUp(name, email, image, password) {
  const hashPassword = bcrypt.hashSync(password, 10);
  const token = uuidV4();

  const user = await authRepository.getUser(email);
  if (user) {
    throw conflictError("Email alredy exits");
  }

  const createdUser = await authRepository.createUser(
    name,
    email,
    image,
    hashPassword
  );

  return createdUser;
}

async function signIn(email, password) {
  const token = uuidV4();

  const user = await authRepository.getUser(email);

  await authRepository.validatePassword(password, user.password);

  return token;
}

const authService = {
  signUp,
  signIn,
};

export default authService;
