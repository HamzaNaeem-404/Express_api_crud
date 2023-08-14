import{Router} from "express";
import todoController from "../controller/todo.js";

const todoRouter = new Router();

todoRouter.get("/",(req,res)=>{
    return res.status(200).json({message:"Welcome to API by Hamza Naeem"});
 });
 
 todoRouter.get('/todos', todoController.getAll);

 todoRouter.get('/todos/:id', todoController.getSpecificId);

 todoRouter.post('/api/todos', todoController.addTodo);

 todoRouter.post('/api/todos/:id', todoController.updateSpecificId);

 todoRouter.get('/delete-todo/:id', todoController.deleteID);

 todoRouter.get("*", (req,res)=>{
    res.status(404);
    res.end(JSON.stringify({message:"Route not found"}));
 });

export default todoRouter;