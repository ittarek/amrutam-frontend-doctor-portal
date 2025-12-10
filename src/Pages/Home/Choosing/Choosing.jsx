import { Container } from '@/components/Shared/Container'
import { SectionDesc } from '@/components/Shared/SectionDesc'
import { SectionHeading } from '@/components/Shared/SectionHeading'
import React from 'react'
// calling images 
import callBg from "@/assets/choosing/bg1.png"
import callIcon from "@/assets/choosing/calling/call.png"
import left from "@/assets/choosing/calling/left.png"
import right from "@/assets/choosing/calling/right.png"
// connection images
import bg2 from "@/assets/choosing/bg2.png"
import connectionIcon from "@/assets/choosing/connection/icon.png"
import connectionLeft from "@/assets/choosing/connection/left.png"
import connectionRight from "@/assets/choosing/connection/right.png"
// chatting images
import chatBg from "@/assets/choosing/bg3.png"
import chatIcon from "@/assets/choosing/chatting/icon.png"
import chatLeft from "@/assets/choosing/chatting/left.png"
import chatRight from "@/assets/choosing/chatting/right.png"
//wallet images
import walletBg from "@/assets/choosing/bg2.png"
import walletIcon from "@/assets/choosing/wallet/icon.png"
import walletLeft from "@/assets/choosing/wallet/left.png"
import walletRight from "@/assets/choosing/wallet/right.png"
// timing images
import timingIcon from "@/assets/choosing/timing/icon.png"
import timingLeft from "@/assets/choosing/timing/left.png"
import timingRight from "@/assets/choosing/timing/right.png"
export const Choosing = () => {
    return (
        <div className='relative'>
            <Container>
                <SectionHeading mainHeading='Why  Doctors Choose Us? ' subHeading="Unlock the Benefits of Smarter Healthcare Management and Patient Care" />

                
                {/* calling section */}
                <section className='flex flex-wrap justify-between items-center mb-44 '>
                    {/* images */}
                    <div className='relative mx-auto lg:mx-0 w-[180px] lg:w-auto mb-34 lg:mb-0'>
                        <img className='relative' src={callBg} alt="secBg" />
                        <img className='absolute top-[1%]' src={callIcon} alt="secBg" />

                        <img className='right absolute top-[8%] right-0 left-[50%]  bottom-0' src={right} alt="secBg" />
                        <img className='left absolute top-[70%] bottom-0  -left-16 right-[%]' src={left} alt="secBg" />

                    </div>
                    <SectionDesc
                        title={
                            <>
                                Instant <span>FREE</span> 5-Mins Call
                            </>
                        }
                        desc={
                            <>
                                We understand the importance of building trust with your patients. That's why Amrutam offers a free <span className="font-bold">5-minute call</span>, helping you connect instantly and foster lasting patient relationships with ease.
                            </>
                        }
                    />

                </section>
                {/* connection section */}
                <section className='flex flex-wrap  flex-row-reverse justify-between items-center mb-64 '>
                    {/* images */}
                    <div className='relative mx-auto lg:mx-0  w-[180px] lg:w-auto mb-52 lg:mb-0'>
                        <img className='relative' src={bg2} alt="secBg" />
                        <img className='absolute top-[1%]' src={connectionIcon} alt="secBg" />

                        <img className='right absolute top-[8%] right-0 left-[50%]  bottom-0' src={connectionRight} alt="secBg" />
                        <img className='left absolute top-[70%] bottom-0  -left-16 right-[%]' src={connectionLeft} alt="secBg" />

                    </div>
                    <div className=' -mb-44'>
                        <SectionDesc
                            title={
                                <>
                                    Forum for   <span>Meaningful</span> Connections
                                </>
                            }
                            desc={
                                <>
                                    We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.
                                </>
                            }
                        />
               </div>

                </section>
                {/*chatting section  */}
                <section className='flex flex-wrap   justify-between items-center mb-44 '>
                    {/* images */}
                    <div className='relative mx-auto lg:mx-0  w-[180px] lg:w-auto mb-34 lg:mb-0'>
                        <img className='relative' src={chatBg} alt="secBg" />
                        <img className='absolute top-[14%] right-0 bg-[#DBDCC4] rounded-full p-3' src={chatIcon} alt="secBg" />

                        <img className='right absolute top-[60%] right-0 left-[35%]  bottom-0' src={chatRight} alt="secBg" />
                        <img className='left absolute top-[15%]  -left-25 right-[%]' src={chatLeft} alt="secBg" />

                    </div>
                    <SectionDesc
                        title={
                            <>
                                Choose Your Session Mode
                            </>
                        }
                        desc={
                            <>
                                Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.
                            </>
                        }
                    />

                </section>
                {/*wallet section  */}
                <section className='flex flex-wrap flex-row-reverse  justify-between items-center mb-44 '>
                    {/* images */}
                    <div className='relative lg:mx-0 mx-auto  w-[180px] lg:w-auto mb-34 lg:mb-0'>
                        <img className='relative' src={walletBg} alt="secBg" />
                        <img className='absolute top-[1%] rounded-full bg-[#DBDCC4] p-4' src={walletIcon} alt="secBg" />

                        <img className='right absolute top-[8%] right-0 left-[50%]  bottom-0' src={walletRight} alt="secBg" />
                        <img className='left absolute top-[70%] bottom-0  -left-16 right-[%]' src={walletLeft} alt="secBg" />

                    </div>
                    <SectionDesc
                        title={
                            <>
                                Smart Wallet
                            </>
                        }
                        desc={
                            <>
                                We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.
                            </>
                        }
                    />

                </section>
                {/*timing section  */}
                <section className='flex flex-wrap  justify-between items-center mb-44 '>
                    {/* images */}
                    <div className='relative mx-auto lg:mx-0  w-[180px] lg:w-auto mb-34 lg:mb-0'>
                        <img className='relative' src={chatBg} alt="secBg" />
                        <img className='absolute top-[14%] right-0 bg-[#DBDCC4] rounded-full p-3' src={timingIcon} alt="secBg" />

                        <img className='right absolute top-[70%] right-0 left-[35%]  bottom-0 bg-white p-4 rounded-3xl' src={timingRight} alt="secBg" />
                        <img className='left absolute top-[15%]  -left-25 right-[%]' src={timingLeft} alt="secBg" />

                    </div>
       
                    <SectionDesc
                        title={
                            <>
                                Flexible Work Timing
                            </>
                        }
                        desc={
                            <>
                                We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.
                            </>
                        }
                    />

                </section>
            </Container>
        </div>
    )
}
