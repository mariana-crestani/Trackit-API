import { Router } from "express";

const TodayRouter = Router()

TodayRouter.get("/today")

export default TodayRouter

// GET autenticado /today
/*
[
    {
        "id": 3,
        "name": "Acordar",
        "done": true,
        "currentSequence": 1,
        "highestSequence": 1
    }
]
*/

