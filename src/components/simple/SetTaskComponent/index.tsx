import React, { useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import { completeTask, editTask, deleteTask } from "../../../core/store/taskSlice";
import { useDispatch } from "react-redux";
import { TodoStyleButton, TodoTitle, TodoTitleEdit } from "../../ui/todoStyled";
import { Task } from '../../../core/types/task';
import { NavLink } from "react-router-dom";



interface Props {
  id: string;
  task: Task;
}

export const TaskComponent: React.FC<Props> = ({ id, task }) => {
  const dispatch = useDispatch();
  const [editingInput, setEditingInput] = useState<string | null>(null);
  const [editingInputTitle, setEditingInputTitle] = useState<string>('');

  const handleEditTask = () => {
    if (editingInput !== id) {
      setEditingInput(id);
      setEditingInputTitle(task.text);
    } else {
      dispatch(
        editTask({
          id: id,
          task: {
            text: editingInputTitle,
            completed: false,
            id: id,
          },
        })
      );
      setEditingInput(null);
    }
  };

  return (
    <>

        <Checkbox
          checked={task.completed}
          size="medium"
          onChange={() => dispatch(completeTask(id))}
        />
        {editingInput === id ? (
          <TodoTitleEdit>
            <TextField
              value={editingInputTitle}
              onChange={(event) => {
                setEditingInputTitle(event.target.value);
              }}
              autoFocus
              fullWidth
              multiline
              maxRows={4}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  if (editingInputTitle !== '') {
                    handleEditTask();
                  }
                }
              }}
            />
          </TodoTitleEdit>
        ) : (
          <TodoTitle checked={task.completed}>{task.text}</TodoTitle>
        )}

      <TodoStyleButton>
      <NavLink to={`/TodoPage/${task.id}`} > <Button key={task.id} variant="contained"  size="large">Подробнее</Button></NavLink>
        <Button variant="contained" size="large"  onClick={() =>
          editingInput !== id ?
            (setEditingInput(id), setEditingInputTitle(task.text)) :
            (dispatch(editTask(
              {
                id, task: {
                  text: editingInputTitle,
                  completed: false,
                  id: id,
                }
              }
            )), setEditingInput(null))
        }>
          {editingInput === id ? "Сохранить изменения" : "Редактировать задачу"}
        </Button>
        <Button variant="contained" size="large"  onClick={() => dispatch(deleteTask(id))}>
          Удалить задачу
        </Button>
      </TodoStyleButton>
    </>
  );
};