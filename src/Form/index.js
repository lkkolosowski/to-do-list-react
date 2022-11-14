import { useState, useRef } from "react";
import { FormField, Input, Button } from "./styled";

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
    <FormField onSubmit={onFormSubmit}>
      <Input
        autoFocus
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button onClick={focusInput} className="form__button">Dodaj zadanie</Button>
    </FormField>
  );
};

export default Form;
