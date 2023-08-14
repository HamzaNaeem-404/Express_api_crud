import express from "express"; 
import HamzaRouter from "./router/api.js";
import todoModal from "./model/api.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use(HamzaRouter);

app.listen(3301,()=>{
    console.log("Listening on 3301");
});


    


