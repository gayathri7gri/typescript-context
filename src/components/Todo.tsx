import * as React from 'react';

type Props = {
    name: string;
    phone: string;
};

const Todo: React.FC<Props> = ({ name, phone }) => {
    const checkTodo: string = name ? `line-through` : '';
    return (
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTodo}>{name}</h1>
                <span className={checkTodo}>{phone}</span>
            </div>
            <button className={name ? `hide-button` : 'Card--button'} >
                Complete
            </button>
        </div>
    );
};
export default Todo;