import { useState, useRef } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(newTaskContent === "") {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        autoFocus
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <button onClick={focusInput} className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
