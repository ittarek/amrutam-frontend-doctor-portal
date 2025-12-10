import { SectionHeading } from '@/components/Shared/SectionHeading'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Container } from '@/components/Shared/Container'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const AllFqs = () => {



    return (
        <Container>
            <SectionHeading mainHeading="Frequently Asked Questions" subHeading="Find quick answers to common questions to help you navigate the app and its features easily." />

            {/* main content */}
            <div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What types of consultations are available?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We provide three types of consultations - video, instant call and chat consultation.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Can I get refund for the wallet money?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                All orders are carefully packaged and fully insured. Track your
                                shipment in real-time through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What is the Amrutam Forum?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">

                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Can I pause the audio consultation?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">

                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Is there a minimum duration for an audio consultation?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">

                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Can I get refund for the wallet money?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">

                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>What is the Amrutam Forum?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">

                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Can I pause the audio consultation?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">

                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Is there a minimum duration for an audio consultation?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">

                            <p>
                                Our hassle-free return process includes free return shipping and
                                full refunds processed within 48 hours of receiving the returned
                                item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className='flex justify-center items-center my-11 '>
                    <Button variant="outline" className="bg-transparent !text-[#849B79] text-bold"> Load More  <ArrowRight /> </Button>
                </div>
            </div>
        </Container>
    )
}
