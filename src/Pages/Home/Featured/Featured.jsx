import React from 'react'
import image1 from '@/assets/sponsors/sponsorse1.png'
import image2 from '@/assets/sponsors/sponsorse2.png'
import image3 from '@/assets/sponsors/sponsorse3.png'
import image4 from '@/assets/sponsors/sponsorse4.png'
import image5 from '@/assets/sponsors/sponsorse5.png'
import image6 from '@/assets/sponsors/sponsorse6.png'
import image7 from '@/assets/sponsors/sponsorse7.png'
import image8 from '@/assets/sponsors/sponsorse8.png'
import image9 from '@/assets/sponsors/sponsorse9.png'
import { SectionHeading } from '@/components/Shared/SectionHeading'

const images = [
    {
        id: 1,
        src: `${image1}`,
        alt: "Sponsor 1"
    },
    {
        id: 2,
        src: `${image2}`,
        alt: "Sponsor 2"
    },
    {
        id: 3,
        src: `${image3}`,
        alt: "Sponsor 3"
    },
    {
        id: 4,
        src: `${image4}`,
        alt: "Sponsor 4"
    },
    {
        id: 5,
        src: `${image5}`,
        alt: "Sponsor 5"
    },
    {
        id: 6,
        src: `${image6}`,
        alt: "Sponsor 6"
    },
    {
        id: 7,
        src: `${image7}`,
        alt: "Sponsor 7"
    },
    {
        id: 8,
        src: `${image8}`,
        alt: "Sponsor 8"
    },
    {
        id: 9,
        src: `${image9}`,
        alt: "Sponsor 9"
    }
]


export const Featured = () => {
    return (
        <div>
            <SectionHeading
                mainHeading="Featured"
                subHeading="Recognized and celebrated by leading publications – Amrutam in the spotlight!"
            />
            {/* sponsors */}
            <div className='flex justify-center items-center gap-11 flex-wrap'>

                {images.map(({ id, src, alt }) => <img key={id} src={src} alt={alt} />)}
            </div>
        </div>
    )
}
