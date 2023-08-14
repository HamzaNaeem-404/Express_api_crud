import todoController from "../controller/todo.js";

const todoList=[
    {
        id:"1",
        title: "Assignment",
        description: "Need to complete MERN assignment by Tuesday",
        status: "false"
    },
    {
        id:"2",
        title: "Update Linkedin",
        description: "Need to update my Linkedin Profile",
        status: "false"
    },
    {
        id:"3",
        title: "Ambassadors Meetup",
        description: "Need to visit K-21 for independence-day event",
        status: "false"
    },
    {
        id:"4",
        title: "Backup",
        description: "Take the important Files Backup from phone to Drive",
        status: "false"
    },
];


const todoModal={
    getAll: ()=>{
        return todoList;
    },

    getSpecific: (specific)=>{
        
           const findTodo = todoList.find((elem)=>elem.id==specific);
            return findTodo;
           },
    
    addTodo: (a)=>{
        let x = todoModal.getAll(); 
        let y = x.slice();   //To avoid duplication of values in element.id 
        let z = y.reverse();
        let newId = z.shift().id; //Finding element.id value of last index
                        
        a.id = parseInt(newId)+1 ;  //Auto-add the value of id + 1 for new array index.
        a.status = "false";
        
        x.push(a); //Pusing the data in Modal Array
        return a;
       
    },      

   updateSpecific: (specific, newTitle, newDescription, newStatus)=>{
            
               const findTodo = todoList.find((elem)=>elem.id==specific);
           
               if(findTodo===undefined){
                    return findTodo; 
               }
                  else{

                   findTodo.title = newTitle;
                   findTodo.description = newDescription;
                   findTodo.status = newStatus;
                }

                    return findTodo; 
               },

    updatedArray:(specific)=>{
        let index = todoList.findIndex((elem) => elem.id == specific);
        
        if(index > -1){

           todoList.splice(index, 1);

        }
       
        return todoList;
       
    },
   };


export default todoModal;