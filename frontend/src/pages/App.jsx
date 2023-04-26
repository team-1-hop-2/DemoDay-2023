import {Homepage} from './Homepage/Homepage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage/>,
  },
  {
    path:'/:id',
    element: <Homepage/>,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;