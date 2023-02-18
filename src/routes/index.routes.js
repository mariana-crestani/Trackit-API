import { Router } from "express";
import AuthRouter from "./auth.routes.js";
import HabitsRouter from "./habits.routes.js";
import HistoricRouter from "./historic.routes.js";
import TodayRouter from "./today.routes.js";

const route = Router();

route.use(AuthRouter, HabitsRouter, TodayRouter, HistoricRouter);

export default route;
