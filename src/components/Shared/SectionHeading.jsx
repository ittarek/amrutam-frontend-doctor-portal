import React from 'react'

export const SectionHeading = ({ mainHeading, subHeading,sectionName }) => {
    return (
        <div className='flex flex-col justify-center items-center my-9 text-center px-1 lg:px-0'>
            <h1 className=' mb-2 text-[#33643F]'>{mainHeading}</h1>
            <p className={`text-[#4C4C4C]`}>{subHeading}</p>
        </div>
    )
}
