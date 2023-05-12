import { FC, useState } from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import { completeTask, editTask } from "../../../core/store/taskSlice";
import { useDispatch } from "react-redux";
import { TodoStyle, TodoStyleButton, TodoTitle, TodoTitleEdit } from "../../ui/todoStyled";
import { Task } from '../../../core/types/task';





export const TaskDetailsComponent: FC<{ id: string, task: Task }> = ({ id, task }) => {
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
            <TodoStyle>
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
        </TodoStyle>
        <TodoStyleButton>
          <Button variant="contained" fullWidth onClick={() =>
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
        </TodoStyleButton>
      </>
    );
  };