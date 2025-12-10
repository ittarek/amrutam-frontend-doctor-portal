import React from "react";
import bgImage from "@/assets/faq/banner.png";
import { Search } from "lucide-react";
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
                <div className="relative flex items-center">
                    <span className="absolute left-3 text-gray-500">
                        <Search className="w-5 h-5" />
                    </span>

                    <input
                        type="text"
                        placeholder="Search for any queries that you have"
                        className="w-full md:w-[500px] py-3 pl-10 pr-3 rounded-lg bg-white"
                    />
                </div>

            </div>
        </div>
    );
};
