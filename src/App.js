import "bootstrap/dist/css/bootstrap.min.css";
import './styles/style.css';
import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

// get data from localstorage 
const getLocaStorage = () => {
  const data = JSON.parse(localStorage.getItem('clients'));
  if (data) {
    return data;
  } else {
    return [];
  }
}


function App() {
  const [clients, setClients] = useState(getLocaStorage());
  const [editItem, setEditItem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleAdd = (newClient) => {
    setClients([{ id: Date.now(), name: newClient }, ...clients]);
    // Update Client 
    if (isEdit && editItem) {
      const updatedItem = clients.map(item => {
        if (item.id === editItem.id) {
          return { ...item, name: newClient }
        }
        return item;
      })
      setClients(updatedItem);
      setIsEdit(false);
      localStorage.setItem('clients', JSON.stringify(clients));
    }
  }

  const handleRemove = (id) => {
    if (window.confirm('Do you want to Delete this')) {
      setClients(clients.filter(item => item.id !== id));
    }
  }

  const handleUpdate = (id) => {
    setIsEdit(true);
    const tempItem = clients.find(item => item.id === id);
    setEditItem(tempItem);
  }

  // set data in localstorage 
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  return (
    <section className="todo">
      <div className="container">
        <h1 className="todo-title">Add Client</h1>
        <Form handleAdd={handleAdd} editItem={editItem} isEdit={isEdit} />
        <TodoList
          clients={clients}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
        />
      </div>
    </section>
  )
}

export default App;
