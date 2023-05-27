import {Homepage} from './Homepage/Homepage'
import {IMGUpload} from './IMGUpload-Test/IMGUpload'
import React, {createBrowserRouter, RouterProvider} from 'react-router-dom'
import  Storepage  from './Storepage/Storepage'
import AccountPage from './Accountpage/AccountPage'

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
    element: <AccountPage/>,
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
