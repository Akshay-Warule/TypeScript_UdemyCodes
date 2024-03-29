import { RequestHandler } from "express";

import {Todo} from '../models/todo'
const TODOS:Todo[]=[];

export const createToDo:RequestHandler=(req,res,next)=>{
const text=(req.body as{text:string}).text;

const newTodo=new Todo(Math.random().toString(),text);
TODOS.push(newTodo);

res.status(201).json({message:"New todo is created check it",createToDo:newTodo});
};


