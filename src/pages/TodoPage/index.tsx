import React, { useState, useEffect } from "react";
import { Wrapper } from "../../components/ui/wrapper";
import { addTask, selectTask } from "../../core/store/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { TaskComponent } from "../../components/simple/SetTaskComponent";
import { TodoStyle, PostStyle } from "../../components/ui/todoStyled";
import { FormNewTask } from "../../components/simple/NewTaskComponent";
import { Task } from '../../core/types/task';
import { v4 as uuidv4 } from 'uuid';


const TodoPage: React.FC = () => {
    
    const dispatch = useDispatch();
    const [textNewTask, setTextNewTask] = useState<string>('');
    const tasks = useSelector(selectTask);

    const handleAddTask = () => {
        if (textNewTask !== "") {
            dispatch(addTask({ text: textNewTask, completed: false }));
          setTextNewTask("");
        } else alert ("Введите текст задачи")
      };

    const TextNewTaskChange = (text: string) => {
        setTextNewTask(text);
      };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    return (
        <Wrapper>
            {tasks.map((task) => (
                <PostStyle key={task.id}>
                    <TaskComponent id={task.id} task={task} />
                </PostStyle>
            ))}
            <TodoStyle >
                <FormNewTask textNewTask={textNewTask}
                    onTextNewTaskChange={TextNewTaskChange}
                    onAddTask={handleAddTask}
                />
            </TodoStyle>
        </Wrapper>
    );
    
};
export default TodoPage;