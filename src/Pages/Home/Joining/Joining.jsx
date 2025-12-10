import { Container } from '@/components/Shared/Container'
import { SectionHeading } from '@/components/Shared/SectionHeading'
import React from 'react'
import bg from "@/assets/joining/bg.png"
import finalImage from "@/assets/joining/image1.png"
import { SectionDesc } from '@/components/Shared/SectionDesc'
import { Button } from '@/components/ui/button'
// process images
import process1 from "@/assets/joining/process/iphone 15.png"
import process2 from "@/assets/joining/process/iphone 15-2.png"
import process3 from "@/assets/joining/process/iphone 15-1.png"

// steps data
const steps = [
    {
        id: 1,
        title: "Step 1: Get your referral code",
        desc: "Contact us to receive your unique code."
    },
    {
        id: 2,
        title: "Step 2: Register on Amrutam",
        desc: "Sign up on the Amrutam Doctors app or website to join our specialist network."
    },
    {
        id: 3,
        title: "Step 3: Complete KYC",
        desc: "Fill in your details and upload the required documents for verification."
    },
    {
        id: 4,
        title: "Step 4: Start consulting",
        desc: "Once verified, begin offering consultations and helping patients."
    }
]
export const Joining = () => {
    return (
        <div>
            {/* section heading */}
            <SectionHeading mainHeading="Join Our Circle of Care" subHeading="Becoming a part of Amrutam is simple" />

            {/* section content */}
            {/* how to joining */}
            <Container>
                <div className='flex flex-col lg:flex-row justify-between items-stretch gap-8 lg:gap-12 xl:gap-16 px-4 md:px-6 lg:px-0'>
                    {/* steps */}
                    <div className='w-full lg:w-[55%] space-y-4 md:space-y-5 lg:space-y-6'>
                        {steps.map(({ id, title, desc }) => (
                            <SectionDesc
                                key={id}
                                sectionName="joining_step"
                                className="min-h-[110px] sm:min-h-[120px] md:min-h-[130px] border border-[#33643F80] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 w-full hover:shadow-lg hover:border-[#3A643B] transition-all duration-300"
                                title={title}
                                desc={desc}
                            />
                        ))}
                    </div>


                    {/* image
                     */}
                    <div className='relative'><img className='relative' src={bg} alt="bg vector" />
                        <img className='absolute top-20 right-0' src={finalImage} alt="main image" />
                    </div>
                </div>
            </Container>

            {/* integrate section */}
            <Container>
                {/* 3 buttons */}
                <div className='flex flex-wrap justify-center items-center gap-6 lg:mt-0 mt-32 lg:mb-24 mb-11 px-2 lg:px-0'>
                    <Button variant="main">Consultation</Button>
                    <Button className="bg-transparent text-[#3A643C] border-[#CDD2B8]" variant="outline">Payment withdrawal </Button>
                    <Button variant="outline" className="bg-transparent text-[#3A643C] border-[#CDD2B8]" >Schedule</Button>
                </div>

                {/* showing some process */}
                <div className='flex flex-wrap justify-between gap-16 b items-center'>
                    {/* process 1 */}
                    <div className='mx-auto lg:mx-0'>
                        <h2 className="text-[#3A643C] font-[' DM_Sans'] font-bold text-2xl leading-none align-middle mb-4">Value Your Practice</h2>
                        <img src={process1} alt="image 1 for process1" />
                    </div>
                    {/* process 2 */}
                    <div className='scale-110 mx-auto lg:mx-0 flex flex-col items-center'>

                        <img src={process2} alt="image 2 from process2" />          <h2 className="text-center text-[#3A643C] font-[' DM_Sans'] font-bold text-2xl leading-none align-middle mt-4">Today's Healing Journey</h2>
                    </div>
                    {/* process 3 */}
                    <div className='mx-auto lg:mx-0'>
                        <h2 className="text-[#3A643C] font-[' DM_Sans'] font-bold text-2xl leading-none align-middle mb-4">Consultation Details</h2>
                        <img src={process3} alt="image 3 from process3" />
                    </div>


                    <div className='w-full flex justify-center mt-8 md:mt-12 lg:mt-16'>
                        <Button className="bg-[#3A643C] text-white" variant="main">
                            Join now
                        </Button>
                    </div>
                </div>

            </Container>
        </div>
    )
}
