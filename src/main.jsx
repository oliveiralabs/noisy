import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/home'
import SoundDetails from './views/sound-details'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAwtNdOMw-psg7e6Fv2Szr-Rk0bUlPJTc",
  authDomain: "noisy-eb78c.firebaseapp.com",
  projectId: "noisy-eb78c",
  storageBucket: "noisy-eb78c.appspot.com",
  messagingSenderId: "279966313384",
  appId: "1:279966313384:web:e1d33644eeab2ea6a4cb9d",
  measurementId: "G-2VZ0CZXB9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: ":soundSlug",
    element: <SoundDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
