import React from 'react'
import { Link } from 'react-router';
import logo from "@/assets/logo.png"
import phone from "./phoneIcon.png"

// src/data/navItems.js

const navItems = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Find Doctors",
        link: "/find-doctors"
    },
    {
        id: 3,
        name: "Lab Tests",
        link: "/lab-tests"
    },
    {
        id: 4,
        name: "Shop",
        link: "/shop"
    },
    {
        id: 5,
        name: "Forum",
        link: "/forum"
    },
    {
        id: 6,
        name: "About Us",
        link: "/about"
    }
];



export const FaqHeader = () => {
    return (
        <div>

            <section className="main_header_section flex flex-col justify-center items-center gap-y-4 px-4 bg-[#FFF7E2]">
                <div className='flex flex-col items-center justify-between lg:flex-row w-full px-4 md:px-4 lg:px-0 py-2 '>
                    <Link to="+91 9826352321" className="text-[#3A643C] flex items-center gap-2 font-[' DM_Sans'] font-normal text-xl leading-[140%] capitalize">
                        <img src={phone} alt="icon" />
                        +91 9826352321</Link>
                    <Link to="/">       <img src={logo} alt="" /></Link>
                    <div></div>
                </div>
                {/* nav items */}
                <nav>
                    <ul className="flex flex-wrap justify-center gap-6 items-center px-2">
                        {navItems.map((item) => (
                            <li className="text-[#3A643C] font-['DM_Sans'] font-semibold text-xl leading-[140%] capitalize" key={item.id}>
                                <Link to={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </section>

        </div>
    )
}
