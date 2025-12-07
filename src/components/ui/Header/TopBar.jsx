import React from 'react'
import { Button } from '../button'
import doctorIcon from "@/assets/icons/icon_join-removebg-preview.png";
export const TopBar = () => {
  return (
      <div className='flex justify-between lg:justify-center lg:px-0 px-2
      bg-[#373636] w-fulll items-center sticky
       lg:gap-[10vw] py-1  h-[67px]'>
          <h2 className='font-dm-sens font-medium  lg:ms-[550px] text-[#D9D9D9] text-xs md:text-lg lg:text-[20px] leading-[1.4] tracking-normal'>Register Yourself As An Amrutam Doctor</h2>

          <Button className="md:w-[355px] h-[51px]" variant="main"> <img className='w-6 h-6 bg-transparent' src={doctorIcon} alt="" /> Join Now</Button>



    </div>
  )
}
