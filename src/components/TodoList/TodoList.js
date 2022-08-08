import React from 'react'
import SingleTodo from '../SingleTodo/SingleTodo'

const TodoList = ({ clients, handleRemove, handleUpdate }) => {
    return (
        <div className="todo-items">
            {
                clients.map(item => (
                    <SingleTodo
                        key={item.id}
                        client={item}
                        handleRemove={handleRemove}
                        handleUpdate={handleUpdate}
                    />
                ))
            }
        </div>
    )
}

export default TodoList