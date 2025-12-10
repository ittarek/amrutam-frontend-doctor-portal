import { createBrowserRouter } from "react-router"; // ✅ react-router-dom
import { HomeLayout } from "../Layouts/HomeLayout/HomeLayout";

import { HomePage } from "../Pages/Home/HomePage";
import { FAQPage } from "@/Pages/Home/FAQPage/FAQPage";
import { FAQLayout } from "@/Layouts/FAQLayout/FAQLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>Not found 404</div>,
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ],
    },
    {
        path: "/faq",
        element: <FAQLayout />, 
        children: [
            {
                index: true,
                element: <FAQPage />
            }
        ]
    }
]);