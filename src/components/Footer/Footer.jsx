import React from 'react'
import logo from "@/assets/logo.png"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Container } from '../Shared/Container';

// src/data/footerNavItems.js
export const footerNavItems = [
    {
        id: 1,
        title: "Information",
        links: [
            {
                id: 1,
                name: "About",
                link: "/about"
            },
            {
                id: 2,
                name: "Terms and Conditions",
                link: "/terms-conditions"
            },
            {
                id: 3,
                name: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                id: 4,
                name: "Privacy Policy for Mobile App",
                link: "/privacy-policy-mobile"
            },
            {
                id: 5,
                name: "Shipping and Return Policy",
                link: "/shipping-return-policy"
            },
            {
                id: 6,
                name: "International Delivery",
                link: "/international-delivery"
            },
            {
                id: 7,
                name: "For Business, Hotels and Resorts",
                link: "/business"
            }
        ]
    }
];
export const Footer = () => {
    return (
        <Container>
            
            <div className='flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 py-12'>
                {/* about of company */}
                <div className="company-about w-full lg:w-1/3 space-y-4">
                    <img src={logo} alt="Company Logo" className="h-12 md:h-16 mb-4" />
                    <h2 className="font-['DM_Sans'] font-bold text-lg md:text-xl text-[#3A643B]">Get in touch</h2>
                    <p className="font-['Poppins'] text-sm md:text-base text-gray-700">
                        <a href="mailto:ittark551@gmail.com" className="hover:text-[#3A643B] transition-colors">
                            ittark551@gmail.com
                        </a>
                    </p>
                    <p className="font-['Poppins'] text-sm md:text-base text-gray-700 leading-relaxed">
                        Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001
                    </p>
                    <p className="font-['Poppins'] text-sm md:text-base text-gray-700">
                        <a href="tel:+919713171999" className="hover:text-[#3A643B] transition-colors">
                            +91 9713171999
                        </a>
                    </p>
                </div>

                {/* navigation */}
                <div className="footer-navigation w-full lg:w-1/3">
                    {footerNavItems.map((section) => (
                        <div key={section.id} className="space-y-4">
                            <h3 className="font-['DM_Sans'] font-bold text-lg md:text-xl text-[#3A643B] mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={link.link}
                                            className="font-['Poppins'] text-sm md:text-base text-gray-700 hover:text-[#3A643B] hover:underline transition-all"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* social media */}
                <div className="social-media w-full lg:w-1/3 space-y-6">
                    <h2 className="font-['DM_Sans'] font-bold text-lg md:text-xl text-[#3A643B]">Follow Us</h2>
                    <div className='flex flex-wrap items-center gap-4 md:gap-6 [&_span]:bg-[#3A643B] [&_span]:rounded-full [&_span]:w-10 [&_span]:h-10 md:[&_span]:w-11 md:[&_span]:h-11 [&_span]:flex [&_span]:items-center [&_span]:justify-center [&_span]:text-white [&_span]:cursor-pointer [&_span]:transition-all [&_span]:hover:bg-[#2d4f2e] [&_span]:hover:scale-110'>
                        <span><Facebook className="w-4 h-4 md:w-5 md:h-5" /></span>
                        <span><Instagram className="w-4 h-4 md:w-5 md:h-5" /></span>
                        <span><Youtube className="w-4 h-4 md:w-5 md:h-5" /></span>
                        <span><Twitter className="w-4 h-4 md:w-5 md:h-5" /></span>
                        <span><Linkedin className="w-4 h-4 md:w-5 md:h-5" /></span>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-['DM_Sans'] font-semibold text-base md:text-lg text-[#3A643B] mb-3">
                            Subscribe to our Newsletter
                        </h3>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3A643B] text-sm md:text-base"
                            />
                            <button className="bg-[#3A643B] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#2d4f2e] transition-all text-sm md:text-base font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    )
}
