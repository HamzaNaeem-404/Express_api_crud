import todoModal from "../model/api.js";

const todoController={
    getAll: (req,res)=>{
        const items = todoModal.getAll();
        return res.status(200).json(items);
    },
    getSpecificId: (req,res)=>{
      const specific = req.params.id;
      
      const item = todoModal.getSpecific(specific);
      if(item===undefined){
          return res.status(400).json("Invalid ID");
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
       
        let findTitle,newTitle;

         if(todoModal.getSpecific(specific)!==undefined)
         {
            findTitle = todoModal.getSpecific(specific);
            newTitle = findTitle.title;
         }
       
        if(req.body.title){
          newTitle= req.body.title;
        }

        let findDesc,newDescription;
        if(todoModal.getSpecific(specific)!==undefined)
        {
          findDesc = todoModal.getSpecific(specific);
          newDescription = findDesc.description;
       }

        if(req.body.description){
          newDescription= req.body.description;;
        }

        let newStatus = "false";
        if(req.body.status){
          newStatus = req.body.status;
        }
        
        
        const item = todoModal.updateSpecific(specific, newTitle, newDescription, newStatus);
        
        if(item===undefined){
            return res.status(400).json("Invalid ID to be Updated");
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