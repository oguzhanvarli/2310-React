import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path: "/product",
        element: <Product/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path : "/register",
        element: <Register/>
    },
    {
        path: "*",
        element: <Error/>
    }
])