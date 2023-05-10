import {Homepage} from './Homepage/Homepage'
import {IMGUpload} from './IMGUpload-Test/IMGUpload'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import  Accountpage from './Accountpage/AccountPage'
import  Storepage  from './Storepage/Storepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:'/Upload',
    element: <IMGUpload/>,
  },
  {
    path:'/:id',
    element: <Homepage/>,
  },
  {
    path:'/account',
    element: <Accountpage/>,
  },
  {
    path:'/store',
    element: <Storepage/>,
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
   </>
  );
}

export default App;
