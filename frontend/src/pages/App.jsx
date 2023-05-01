import { Homepage } from "./Homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Sign-in/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:id",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
