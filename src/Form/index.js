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
    inputRef.current.focus();
  }

  const inputRef = useRef(null);

  return (
    <FormField onSubmit={onFormSubmit}>
      <Input
        autoFocus
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </FormField>
  );
};

export default Form;
