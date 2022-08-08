import { useEffect, useState } from "react";

const Form = ({ handleAdd, editItem, isEdit }) => {
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData) {
      alert("Fill the field");
      return;
    }
    handleAdd(formData);
    setFormData("");
  };

  useEffect(() => {
    if (isEdit) {
      setFormData(editItem.name);
    }
  }, [isEdit, editItem]);

  return (
    <div className="todo-form shadow">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFormData(e.target.value)}
          value={formData}
          type="text"
          className="todo-input"
          placeholder="Add Client..."
        />
        <button type="submit" className="todo-submit-btn">
          {isEdit ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default Form;
