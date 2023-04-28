import {Homepage} from './Homepage/Homepage'
import { SignIn } from './Sign-in/SignIn';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage/>,
  },
  {
    path:'/:id',
    element: <Homepage/>,
  },
  {
    path:'/SignIn/',
    element: <SignIn/>,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;