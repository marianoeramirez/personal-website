import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import PostRoute, {loader as postLoader} from "./routes/post";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "post/:postId",
    element: <PostRoute />,
    loader: postLoader,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
