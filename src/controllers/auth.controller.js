import { usersCollection, sessionsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";
import authService from "../service/auth.service.js";
import httpStatus from "http-status";

export async function signUp(req, res) {
  const {email, name, image, password} = req.body

  try{
    const result = await authService.signUp({email, name, image, password})
    return res.status(httpStatus.OK).send(result);
  }catch(error){
    return res.sendStatus(httpStatus.UNAUTHORIZED)
  }
}

// POST /signup
/*
{
	email: "...",
	name: "...",
	image: "...",
	password: "..."
}
*/


export async function signIn(req, res) {
  const user = res.locals.user;
  const email = user.email
  const token = uuidV4();

  try {
    await sessionsCollection.insertOne({ token, userId: user._id });
    res.send({ token, email }).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
