import { createBrowserRouter } from "react-router-dom";
import PostsPage from "../../pages/PostPage";
import PostDetailsPage from "../../pages/PostDetailsPage";
import CreatePost from "../../pages/AddPostPage";
import { Navbar } from "../../components/Navbar";
import AddComment from "../../pages/AddCommentPage";
import TodoPage from "../../pages/TodoPage";
import TaskDetails from "../../pages/TaskDetailsPage";

export const router = createBrowserRouter([
  { 
    Component: Navbar,
    children: [ 
    {
      path: '',
      Component: PostsPage
    },
    {
      path: "PostDetailsPage",
      Component: PostDetailsPage
    },
    {
      path: "CreatePost",
      Component: CreatePost
    },
    {
      path: "AddComment",
      Component: AddComment
    },
    {
      path: "TodoPage",
      Component: TodoPage
    },
    {
      path: "TaskDetails",
      Component: TaskDetails
    },
  
  ]
  }

]);

