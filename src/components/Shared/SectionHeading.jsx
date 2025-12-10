import React from 'react'

export const SectionHeading = ({ mainHeading, subHeading, sectionName }) => {
    return (
        <div className={`flex flex-col justify-center items-center my-9  px-1 lg:px-0 ${sectionName === 'appointment' ? "lg:text-left " : "text-center"}`}>
            <h1 className={`mb-2 text-[#33643F] ${sectionName === "appointment" ? "mb-6" : ""}`}>{mainHeading}</h1>
            <p className={`text-[#4C4C4C]`}>{subHeading}</p>
        </div>
    )
}
