import { createBrowserRouter } from "react-router-dom";
import PostsPage from "../../pages/PostPage";
import PostDetailsPage from "../../pages/PostDetailsPage";
import CreatePost from "../../pages/AddPostPage";
import { Navbar } from "../../components/Navbar";
import TodoPage from "../../pages/TodoPage";
import TaskDetails from "../../pages/TaskDetailsPage";
import CounterPage from "../../pages/ CounterPage";
import AlbumsPage from "../../pages/AlbumsPage";
import PhotosPage from "../../pages/PhotosPage";

export const router = createBrowserRouter([
  { 
    Component: Navbar,
    children: [ 
    {
      path: '/',
      Component: PostsPage
    },
    {
      path: "PostDetailsPage/:id",
      Component: PostDetailsPage
    },
    {
      path: "CreatePost",
      Component: CreatePost
    },
    {
      path: "CounterPage",
      Component: CounterPage
    },
    {
      path: "TodoPage",
      Component: TodoPage
    },
    {
      path: "TodoPage/:id",
      Component: TaskDetails
    },
    {
      path: "AlbumsPage",
      Component: AlbumsPage
    },
    {
      path: "PhotosPage/:id",
      Component: PhotosPage
    }
  ]
  }
]);


