import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/signup");
AuthRouter.post("/signin");

export default AuthRouter;

// POST /signup
/*
{
	email: "...",
	name: "...",
	image: "...",
	password: "..."
}
*/

//POST login
/*
{
	email: "...",
	password: "..."
}
*/
