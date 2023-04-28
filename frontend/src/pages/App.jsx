import {Homepage} from './Homepage/Homepage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Storepage } from './Storepage/Storepage';

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
    path: '/Store',
    element: <Storepage/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;