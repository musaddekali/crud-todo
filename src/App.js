import "bootstrap/dist/css/bootstrap.min.css";
import './styles/style.css';
import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [clients, setClients] = useState([]);
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
    console.log('Updated ', tempItem);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('clients'));
    if (data) {
      setClients(data);
    }
  }, []);

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
