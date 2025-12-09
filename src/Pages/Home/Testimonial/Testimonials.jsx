import { SectionHeading } from '@/components/Shared/SectionHeading'
import React from 'react'
import { Star } from 'lucide-react';
import authorImage from "@/assets/testimonial/image1.png"
import { Container } from '@/components/Shared/Container';

const testimonials = [
    {
        id: 1,
        name: "Dr. Pooja Deshmukh, ",
        author_title: "BAMS",
        image: `${authorImage}`,
        rating: 4,
        review: "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
    },
    {
        id: 2,
        name: "Dr. Pooja Deshmukh, ",
        author_title: "BAMS",
        image: authorImage,
        rating: 4,
        review: "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
    },
    {
        id: 3,
        name: "Dr. Pooja Deshmukh, ",
        author_title: "BAMS",
        image: authorImage,
        rating: 4,
        review: "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
    },
    // You can add more testimonials here
];
export const Testimonials = () => {
    return (
        <Container><SectionHeading mainHeading="What other Ayurvedic Doctors are Saying" subHeading="Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!" />

            {/* section content */}
            <div className="my-16 doctor_say flex flex-col lg:flex-row gap-11 lg:gap-20 justify-center items-center  px-2 lg:px-0">
                {/* card */}
                {testimonials.map(({ id, name, author_title, image, rating, review }) => <div key={id} className={`doctor_card bg-[#FFEEC3] lg:w-[347px]  p-5 rounded-lg ${id === 2 ? "lg:scale-125" : ""}`} >
                    {/* author */}
                    <div className='flex mb-5 justify-center items-center gap-4 '>
                        <img className='w-11 h-11 rounded-full' src={image} alt="author_image" />

                        <div>
                            <h2 className=" font-semibold text-[18px] font-['DM_sans'] text-lg line-clamp-[150%]"> {name}   <span className="text-[#666666] font-normal text-lg leading-[150%]">{author_title}</span></h2>
                            <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`w-4 h-4 ${index < rating ? 'fill-[#FDB022] text-[#FDB022]' : 'fill-[#BBBBBB] text-[#BBBBBB]'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* description */}
                    <p className="text-[#7E7E7E] font-['DM_Sans'] font-normal text-xs leading-[150%]">
                        {review}
                    </p>
                </div>)}



            </div>





        </Container>
    )
}
