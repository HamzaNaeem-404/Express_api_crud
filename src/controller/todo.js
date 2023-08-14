import todoModal from "../model/todo.js";

const todoController={
    getAll: (req,res)=>{
        const items = todoModal.getAll();
        return res.status(200).json(items);
    },
    getSpecificId: (req,res)=>{
      const specific = req.params.id;
      
      const item = todoModal.getSpecific(specific);
      if(item===undefined){
          return res.status(404).json("Invalid ID");
      }

      else {return res.status(200).json(item);}
    },

    addTodo: (req,res)=>{
      const a = req.body;   //taking all the data of body inside a variable
      const item = todoModal.addTodo(a);
      return res.status(200).json(item);
    },

    updateSpecificId: (req,res)=>{
        const specific = req.params.id;
       
        let todo, newTitle, newDescription;

         if(todoModal.getSpecific(specific)!==undefined)
         //Values of {title and Description} from Model 
         {
            todo = todoModal.getSpecific(specific);
            newTitle = todo.title;
            newDescription = todo.description;
         }
         
          let newStatus = "false";  
          //By Default status for toDO task is false unless explicitely defined
           if(req.body.status){
          newStatus = req.body.status;
        }
       
        //If Changes sent in req.body for {title and Description}

        if(req.body.title){
          newTitle= req.body.title;
        }

        if(req.body.description){
          newDescription= req.body.description;;
        }
        
        
        const item = todoModal.updateSpecific(specific, newTitle, newDescription, newStatus);
        
        if(item===undefined){
            return res.status(404).json("Invalid ID to be Updated");
        }
       
        else{return res.status(200).json(item);}
      },

    deleteID: (req,res)=>{
        const specific = req.params.id;

        const item = todoModal.updatedArray(specific);
       return res.status(200).json(item);
    }
};

export default todoController;