import React from 'react'
import { Banner } from './Banner/Banner'
import { Featured } from './Featured/Featured'
import { Choosing } from './Choosing/Choosing'
import { Joining } from './Joining/Joining'
import { Connect } from './Connect/Connect'
import { FAQ } from './FAQ/FAQ'
import { Testimonials } from './Testimonial/Testimonials'
import { Appointment } from './Appointment/Appointment'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'


export const HomePage = () => {
    return (
        <><Banner />
            <Featured />
            <Choosing />
            <Joining />
            <Testimonials />
            <FAQ />
<Appointment/>
            <Connect />
            <ScrollToTopButton />
        </>
    )
}
