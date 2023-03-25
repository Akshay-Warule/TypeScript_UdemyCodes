"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createToDo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "New todo is created check it", createToDo: newTodo });
};
exports.createToDo = createToDo;
