import React from "react";
import bgImage from "@/assets/faq/banner.png";
// import { Input } from "@/components/ui/input"
export const FaqBanner = () => {
    return (
        <div
            className=" bg-cover bg-center bg-no-repeat h-[300px] w-full mt-3"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="flex flex-col gap-6 pt-11 items-center">
                <h1>FAQ</h1>
                <input className="w-[400px]  py-3  px-3 rounded-lg bg-white" type="text" placeholder="Search for any queries that you have" />
            </div>
        </div>
    );
};
