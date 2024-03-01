import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import 'swiper/css'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import './assets/sass/Mystyle.scss'
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Creator from '././features/creator/Creator';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/creator",
        element: <Creator />,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
