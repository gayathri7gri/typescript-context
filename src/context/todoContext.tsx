import { createContext, useState } from "react";
import { ITodo } from "../@types/todo";
import * as React from 'react';

interface TodoContextProp {
    name: string;
    phone: string
}

type Props = {
    children: React.ReactNode
}

export const TodoContext = createContext<TodoContextProp | null>({ name: "Gayu", phone: "1234" });

const TodoProvider: React.FC<Props> = (props): JSX.Element => {
    const { children } = props;
    console.log("CONTEXT PROP", props)
    const name = "GAYU";
    const phone = "00000000000";
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id: 1,
            title: 'post 1',
            description: 'this is a description',
            status: false,
        },
        {
            id: 2,
            title: 'post 2',
            description: 'this is a description',
            status: true,
        },
    ]);

    const saveTodo = (todo: ITodo) => {
        const newTodo: ITodo = {
            id: Math.random(), // not really unique - but fine for this example
            title: todo.title,
            description: todo.description,
            status: false,
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (id: number) => {
        todos.filter((todo: ITodo) => {
            if (todo.id === id) {
                todo.status = true
                setTodos([...todos])
            }
        })
    }

    return (
        <TodoContext.Provider value={{ name, phone }}>
            {children}
        </TodoContext.Provider>
    );
}


export default TodoProvider;