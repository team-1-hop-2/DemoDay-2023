import {Homepage} from './Homepage/Homepage'
import {IMGUpload} from './IMGUpload-Test/IMGUpload'
import React, {createBrowserRouter, RouterProvider} from 'react-router-dom'
import  Storepage  from './Storepage/Storepage'
import AccountPageMysites from './Accountpage/AccountPageMysites'

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
    path:'/accountmysites',
    element: <AccountPageMysites/>,
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
