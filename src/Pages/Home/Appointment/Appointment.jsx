import React from 'react'
import appImage from "@/assets/app/appointment 1.png"
import { SectionHeading } from '@/components/Shared/SectionHeading'

// icon image
import tree from "@/assets/app/icons/icon1.png"
import currency from "@/assets/app/icons/icon2.png"
import phone from "@/assets/app/icons/icon3.png"
import wallet from "@/assets/app/icons/icon4.png"
import { Container } from '@/components/Shared/Container'

// person images
import person1 from "@/assets/app/person1.png"
import person2 from "@/assets/app/person2.png"
import person3 from "@/assets/app/person3.png"
import person4 from "@/assets/app/person4.png"

const appointments = [
    {
        id: 1,
        icon: tree,
        text: "Build Trust and Community with Forum"
    },
    {
        id: 2,
        icon: currency,
        text: "Earn More with Pay Per Conversation"
    },
    {
        id: 3,
        icon: phone,
        text: "Attract Patients with 5-Minute Free Call"
    },
    {
        id: 4,
        icon: wallet,
        text: "Instant Access to Your Earnings with Wallet"
    },
]

export const Appointment = () => {
    return (
        <div className='bg-[#FFEDBF] py-12 md:py-16 lg:py-20'>
            <Container>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:px-0 px-2 lg:gap-12'>
                    {/* section content */}
                    <div className='w-full lg:w-1/2'>
                        <SectionHeading sectionName="appointment"
                            mainHeading="Get Started Today – Download the App Now!"
                            subHeading="Simplify consultations, manage patients, and grow your practice—all in one place."
                        />

                        {/* all appointment - 2x2 grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
                            {appointments.map(({ id, icon, text }) => (
                                <div
                                    key={id}
                                    className=' border cursor-pointer border-[#9E9E9E] flex items-center gap-3 p-4 rounded-xl hover:shadow-lg transition-shadow'
                                >
                                    <img
                                        className='w-10 h-10 md:w-12 md:h-12 flex-shrink-0'
                                        src={icon}
                                        alt={text}
                                    />
                                    <p className="font-['DM_Sans'] font-medium text-sm md:text-base text-[#3A643B]">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* image */}
                    <div className='w-full flex lg:w-1/2  justify-center lg:justify-end relative'>
                        <img
                            className='max-w-full h-auto  lg:max-w-none relative'
                            src={appImage}
                            alt="appointment app preview"
                        />

                        {/* person images */}
                        <img
                            className='hidden md:absolute top-20 left-20 w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-white'
                            src={person1}
                            alt="person1"
                        />
                        <img
                            className='hidden md:absolute top-1/3 right-0 left-160 w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-white'
                            src={person2}   
                            alt="person2"
                        />
                        <img    
                            className='hidden md:absolute bottom-70 left-40 w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 rounded-full border-4 border-white'
                            src={person3}
                            alt="person3"
                        />
                        <img
                            className='hidden md:absolute bottom-50 right-0 left-165 w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 rounded-full border-4 border-white'
                            src={person4}
                            alt="person4"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}