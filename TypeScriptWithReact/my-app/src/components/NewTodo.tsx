import React,{useRef} from "react";

type NewTodoProps={
    onAddTodo:(todoText:string)=>void;
}

const NewTodo:React.FC<NewTodoProps>=props=>{

    const textInputRef=useRef<HTMLInputElement>(null);

    const todoSubmitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText=textInputRef.current!.value;
    props.onAddTodo(enteredText);
    };
return(
    
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">To do text</label>
           <input  type='text' id='todo-text' ref={textInputRef}/>
           <button type="submit">ADD TODO</button>
        </div>
        
   </form>
)
};
export default NewTodo;