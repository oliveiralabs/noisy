import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/home'
import SoundDetails from './views/sound-details'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":soundSlug",
    element: <SoundDetails />,
  },
  {
    path: "/test",
    element: <h1>Test route!!</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
