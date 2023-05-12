import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { addTask, selectTask } from "../../../core/store/taskSlice";
import { useSelector } from "react-redux";


interface FormNewTaskProps {
  textNewTask: string;
  onTextNewTaskChange: (text: string) => void;
  onAddTask: () => void;
}

export const FormNewTask: React.FC<FormNewTaskProps> = ({
}) => {
  const dispatch = useDispatch();
  const [textNewTask, setTextNewTask] = useState<string>('');
  const textInput = useRef(null)
  const tasks = useSelector(selectTask);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <><TextField
      id="outlined-multiline-flexible"
      label="Впишите новую задачу"
      aria-multiline
      maxRows={4}
      fullWidth
      value={textNewTask}
      inputRef={textInput}
      onChange={(event) => {
        event.preventDefault();
        setTextNewTask(event.currentTarget.value);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          if (textNewTask !== '') {
            dispatch(
              addTask({
                text: textNewTask,
                completed: false,
                id: ""
              })
            );
            setTextNewTask('');
          }
        }
      }} /><Button fullWidth variant="contained" onClick={() => {
        dispatch(addTask({
          text: textNewTask,
          completed: false,
          id: ""
        }));
        setTextNewTask('');
      }}
        disabled={!textNewTask}
      >Добавить новую задачу</Button></>
  );
};