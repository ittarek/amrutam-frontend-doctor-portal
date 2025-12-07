import React from 'react'
import { Link } from 'react-router';
import { TopBar } from './TopBar'
import logo from "@/assets/logo.png"

// src/data/navItems.js

export const navItems = [
  {
    id: 1,
    name: "About Us",
    link: "/about"
  },
  {
    id: 2,
    name: "Onboarding",
    link: "/onboarding"
  },
  {
    id: 3,
    name: "FAQ",
    link: "/faq"
  },
  {
    id: 4,
    name: "Testimonials",
    link: "/testimonials"
  }
];



export const Header = () => {
  return (
      <div>
          <TopBar/>
          <section className="main_header_section flex flex-col justify-center items-center gap-y-4 bg-[#FFF7E2]">
       <img src={logo} alt="" />

              {/* nav items */}
              <nav>
      <ul className="flex gap-6">
        {navItems.map((item) => (
            <li className="text-[#474747] font-[' Poppins'] font-normal text-[20px] leading-[140%] capitalize " key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>

</section>

    </div>
  )
}
