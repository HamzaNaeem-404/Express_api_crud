import express from "express"; 
import todoRouter from "./router/todo.js";
import todoModal from "./model/todo.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use(todoRouter);

app.listen(3301,()=>{
    console.log("Listening on 3301");
});


    


