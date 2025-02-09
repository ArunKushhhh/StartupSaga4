import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from './pages/Home'
// import TestAnimaton from "./pages/TestAnimaton";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<Home />}/>
      {/* <Route index={true} path="/test" element={<TestAnimaton/>}/> */}
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>
);
