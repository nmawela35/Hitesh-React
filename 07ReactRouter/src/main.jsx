import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

const router = 
createBrowserRouter
  (createRoutesFromElements(
    <Route path="/" element ={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path='user/' element={<User/>} >
        <Route path=':userid' element={<User/>} />
      </Route>
      <Route path='github' element={<Github/>} loader={githubInfoLoader} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
                  )

);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
);
