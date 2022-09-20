import * as React from 'react';
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../@types/todo';

const AddTodo: React.FC = () => {
    const { name, phone } = React.useContext(TodoContext) as TodoContextType;
    const [formData, setFormData] = React.useState<ITodo | {}>();
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
        e.preventDefault();
        console.log("formData", formData);
        // saveTodo(formData);
    };

    return (
        <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleForm} type="text" value={name} id="name" />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input onChange={handleForm} type="text" value={phone} id="phone" />
                </div>
            </div>
            <button disabled={formData === undefined ? true : false}>Add Todo</button>
        </form>
    );
};
export default AddTodo;