import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import './vanila file/Vanila.css'
import Chart1 from './chart file/Chart1.jsx';
import Chart2 from './chart file/Chart2.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>    ,
      },
      {
        path: "/chart1",
        element: <Chart1></Chart1>  ,
      },
      {
        path: "/chart2",
        element: <Chart2></Chart2>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
