import React from 'react'
import { SectionHeading } from '@/components/Shared/SectionHeading'

// 
import appImage from "@/assets/faq/mobileImage.png"
import time from "@/assets/faq/timing.png"
import downloads from "@/assets/faq/downloads.png"
import arrow1 from "@/assets/faq/arrow1.png"
import arrow2 from "@/assets/faq/arrow2.png"
// icon image
import massage from "@/assets/faq/icon/message.png"
import play from "@/assets/faq/icon/play.png"
import appsTore from "@/assets/faq/icon/appstore.png"
import { Container } from '@/components/Shared/Container'




const appointments = [
    {
        id: 1,
        icon: massage,
        text: "Access to Prescriptions"
    },
    {
        id: 2,
        icon: massage,
        text: "Track health efficiently"
    },
    {
        id: 3,
        icon: massage,
        text: "Direct Chat with Doctors"
    },
    {
        id: 4,
        icon: massage,
        text: "In-app reminders for consultations"
    },
]

export const DownloadsApp = () => {
    return (

        <Container>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:px-0 px-2 lg:gap-12 py-32 lg:py-28 border-t'>
                {/* section content */}
                <div className='w-full lg:w-1/2'>
                    <SectionHeading sectionName="appointment"
                        mainHeading="Download Amrutam Ayurveda App Now"
                        subHeading="The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits"
                    />


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

                    {/* app icon */}
                    <div className='flex flex-wrap items-center gap-6 mx-auto my-6'>
                        <div className='md:mx-0 mx-auto'>  <img src={play} alt="google" />
                        </div>
                        <div className='lg:mx-0 mx-auto'>  <img src={appsTore} alt="google" />
                        </div>

                    </div>
                </div>

                {/* image */}
                <div className='w-full flex lg:w-1/2 justify-center lg:justify-end relative'>

                    <img
                        className='max-w-full h-auto lg:max-w-none relative'
                        src={appImage}
                        alt="appointment app preview"
                    />


                    <img
                        className='hidden md:block absolute bottom-[200px] top-40 left-[100px] md:w-[190px]   '
                        src={time}
                        alt="time"
                    />
                    <img
                        className='hidden md:block absolute top-[60px]  right-[260px] '
                        src={arrow1}
                        alt="arrow1"
                    />
                    <img
                        className='hidden md:block absolute top-95 bottom-0 right-[190px] w-[140px] '
                        src={downloads}
                        alt="downloads"
                    />
                    <img
                        className='hidden md:block absolute top-[350px] left-[450px] right-0 '
                        src={arrow2}
                        alt="arrow2"
                    />
                </div>
            </div>
        </Container>

    )
}