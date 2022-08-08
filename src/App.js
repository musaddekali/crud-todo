import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  const [clients, setClients] = useState([]);
  
  return (
    <section className="todo">
      <div className="container">
        <h1 className="todo-title">Add Client</h1>
        <div className="todo-in">
          <Form />
        </div>
      </div>
    </section>
  )
}

export default App;
