import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.controller";
import { authValidation } from "../middlewares/authValidation.middlewares";

const AuthRouter = Router();

AuthRouter.post("/signup", authValidation, signUp);
AuthRouter.post("/signin", authValidation, signIn);

export default AuthRouter;


//POST login
/*
{
	email: "...",
	password: "..."
}
*/
