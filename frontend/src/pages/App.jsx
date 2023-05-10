import {Homepage} from './Homepage/Homepage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Portfolio } from './Portfoliopage/Portfolio';

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
    path:'/portfolio',
    element: <Portfolio/>,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;