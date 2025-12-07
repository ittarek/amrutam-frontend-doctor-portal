import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../Layouts/HomeLayout/HomeLayout";
import { HomePage } from "../Pages/Home/Banner/HomePage";



export const router = createBrowserRouter([

    {
        path: "/",
        errorElement: <div>Not found 404</div>,
        element: <HomeLayout />,
        children: [
            
            {
                index: true,
                path: "/",
                element: <HomePage/>
            }
        ]
}

])