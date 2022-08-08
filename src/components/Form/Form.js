import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData("");
    console.log("Form Submitted ", formData);
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFormData(e.target.value)}
          value={formData}
          type="text"
          className="form-control"
          placeholder="Add Client..."
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
