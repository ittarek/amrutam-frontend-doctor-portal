import React from 'react'
import bannerImage from "@/assets/images/bannerImage.png"
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Shared/Container'



export const Banner = () => {
    return (
        <div className='banner bg-linear-to-r from-[#FFECB9] to-[#FFF6DD] mt-2'>
            <Container>
                <div className=' lg:flex  justify-between  items-center w-full py-11 lg:py-28'>
                    {/* banner text  side*/}
                    <div className="banner_content w-full  lg:w-[715x] ">
                        {/* with button and main content */}
                        <div className=' lg:text-start text-center'>
                            <p className="font-['DM_Sans'] font-medium text-base leading-none align-middle text-[#666666]">Namaste, Welcome to Amrutam</p>
                            <h1 className='my-3 lg:w-[697px]'>Join Amrutam - <span>Grow Your Practice</span> </h1>
                            <p className="font-['DM_Sans'] font-medium text-[20px] leading-6 align-middle text-[#666666] mb-11">Connect with more patients, set your own schedule, <br/> and grow your Ayurvedic practice effortlessly.</p>


                            <Button className="w-[262px]" variant="main"> Join Now</Button>
                        </div>


                        {/* without button for staticscit */}
                        <div className='flex justify-center lg:justify-start mt-8 text-center  items-center gap-11  [&_p]:text-[#666666] '>
                            <div className='w-[99px] h-[71px]'><h1>500+</h1>
                                <p>Average Active Users</p>
                            </div>
                            <div className='bg-gray-400 w-[2px] h-11'></div>
                            <div className='w-[99px] h-[71px]'><h1>40+</h1>
                                <p>Average daily free calls</p>
                            </div>
                        </div>
                    </div>

                    {/* banner image side */}
                    <div className='lg:w-[569px] h-[440p] my-6'>
                        <img src={bannerImage} className="mx-auto" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
