import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import AppliedJob from './Pages/AppliedJob.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Pages/Blog.jsx';
import Statistics from './Pages/Statistics.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"",
        element: <Home></Home>
      },
      {
        path:"stats",
        element: <Statistics></Statistics>
      },
      {
        path:"appliedjob",
        element:<AppliedJob></AppliedJob>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
