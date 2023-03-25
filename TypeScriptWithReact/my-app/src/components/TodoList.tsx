import React  from "react";

interface TodoListsProps{
    items:{id:string,text:string}[];
    onDeleteTodo:(id:string)=>void;
}

const TodoList:React.FC<TodoListsProps>=props=>{


    return(<ul>
        {props.items.map(todo=>(
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null,todo.id)}>Delete</button>
            </li>
        ))}

    </ul>
    );
}

export default TodoList;