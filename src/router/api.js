import{Router} from "express";
import todoController from "../controller/api.js";

const HamzaRouter = new Router();

HamzaRouter.get("/",(req,res)=>{
    return res.status(200).json({message:"Welcome to API by Hamza Naeem"});
 });
 
HamzaRouter.get('/todos', todoController.getAll);

HamzaRouter.get('/todos/:id', todoController.getSpecificId);

HamzaRouter.post('/api/todos', todoController.addTodo);

HamzaRouter.post('/api/todos/:id', todoController.updateSpecificId);

HamzaRouter.get('/delete-todo/:id', todoController.deleteID);

HamzaRouter.get("*", (req,res)=>{
    res.status(404);
    res.end(JSON.stringify({message:"Route not found"}));
 });

export default HamzaRouter;