import React from 'react'

export const SectionDesc = ({title, desc}) => {
  return (
      <div className='lg:w-[545px] text-center lg:text-left'>
          <p className="font-['DM_Sans'] font-medium text-[28px] leading-none text-[#3A643C]  [&_span]:font-bold mb-4">{title}</p>
          <p className="font-['DM_Sans'] font-medium text-lg leading-[131%] text-[#666666]  [&_span]:font-bold">{desc}  </p>
    </div>
  )
}
