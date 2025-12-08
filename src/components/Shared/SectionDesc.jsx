import React from 'react'

export const SectionDesc = ({title, desc, className, sectionName}) => {
  return (
      <div className={`text-center lg:text-left ${className || ''} ${sectionName === 'joining_step' ? 'hover hover:bg-[#fdeec5] cursor-pointer transition-all duration-300 hover:border-amber-400' : 'lg:w-[545px]  '}`}>
          <p className="font-['DM_Sans'] font-medium text-[28px] leading-none text-[#3A643C]  [&_span]:font-bold mb-4">{title}</p>
          <p className={`font-['DM_Sans'] font-medium text-lg leading-[131%]  [&_span]:font-bold ${sectionName === 'joining_step' ? 'text-[#3A643C]' : 'text-[#666666] '}`}>{desc}  </p>
      </div>
    //   3A643C
  )
}
