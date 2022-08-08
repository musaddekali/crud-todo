import React from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';

export default function SingleTodo({ client, handleRemove, handleUpdate }) {
    const { id, name } = client;

    return (
        <>
            <div className="todo-item">
                <div className="todo-item-inner">
                    <div className="left">
                        <p className="name">{name}</p>
                    </div>
                    <div className="right">
                        <button onClick={() => handleUpdate(id)} className="edit">Edit</button>
                        <button onClick={() => handleRemove(id)} className="remove">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}