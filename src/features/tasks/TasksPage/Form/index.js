import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { FormField, Button } from "./styled";
import Input from "../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
        hiddenByQuery: false,
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <FormField onSubmit={onFormSubmit}>
      <Input
        autoFocus
        value={newTaskContent}
        placeholder="Co masz do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
        maxLength={225}
      />
      <Button>Dodaj zadanie</Button>
    </FormField>
  );
};

export default Form;
