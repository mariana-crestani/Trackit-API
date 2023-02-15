import { Router } from "express";

const HabitsRouter = Router();

HabitsRouter.post("/habits");
HabitsRouter.get("/habits");
HabitsRouter.delete("/habits");
HabitsRouter.post("/habits/:habitId/check");
HabitsRouter.post("/habits/:habitId/uncheck");

export default HabitsRouter ;

//POST /habits
/*
{
	name: "Nome do hábito",
	days: [1, 3, 5] // segunda, quarta e sexta
}
*/
//e um cabeçalho Authorization com formato Bearer TOKEN
// resposta :
/*
{
	id: 1,
	name: "Nome do hábito",
	days: [1, 3, 5]
}
*/


// GET /habits
//resposta:
/*
[
	{
		id: 1,
		name: "Nome do hábito",
		days: [1, 3, 5]
	},
	{
		id: 2,
		name: "Nome do hábito 2",
		days: [1, 3, 4, 6]
	}
]
*/


// DELETE com um cabeçalho `Authorization` com formato `Bearer TOKEN`, subtituindo `ID_DO_HABITO` na URL pelo id do hábito a ser deletado.


// POST autenticado /habits/ID_DO_HABITO/check
/*
Se:

- O hábito já estiver marcado
- O hábito não for do dia atual
- O hábito não for do usuário logado

o servidor vai responder com `Bad Request (400)`.
*/

//POST autenticado /habits/ID_DO_HABITO/uncheck

/*
Se:

- O hábito não estiver marcado
- O hábito não for do dia atual
- O hábito não for do usuário logado

o servidor vai responder com `Bad Request (400)`.
*/
