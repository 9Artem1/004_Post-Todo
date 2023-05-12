
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { selectTask } from "../../core/store/taskSlice";
import { TaskDetailsComponent } from "../../components/simple/TaskDetailsComponent";
import { NavLink } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { PostStyle } from "../../components/ui/todoStyled";

  const TaskDetails: React.FC = () => {
        const tasks = useSelector(selectTask);
    const task = tasks.find((task) => task.id);
  
    return (
      <Wrapper>
        {task ? (
          <>
            <PostStyle>
              <TaskDetailsComponent task={task} id={task.id} />
            </PostStyle>
            <NavLink to="/TodoPage">
              <Button variant="contained">К списку задач</Button>
            </NavLink>
          </>
        ) : (
          <Typography variant="h6" color="secondary">
            Задача не найдена
          </Typography>
        )}
      </Wrapper>
    );
  };
  
  export default TaskDetails;