import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/todo';
import { TodoContext } from '../context/todoContext';
import Todo from '../components/Todo';

const Todos = () => {
    const { name, phone } = React.useContext(TodoContext) as TodoContextType;
    return (
        <>
            {/* {todos.map((todo: ITodo) => ( */}
            <Todo name={name} phone={phone} />
            {/* ))} */}
        </>
    );
};

export default Todos;