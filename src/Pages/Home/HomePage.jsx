import React, { Suspense } from 'react'
import { Banner } from './Banner/Banner'
import { Featured } from './Featured/Featured'
import { Choosing } from './Choosing/Choosing'
import { Joining } from './Joining/Joining'
import { Connect } from './Connect/Connect'
import { FAQ } from './FAQ/FAQ'
import { Testimonials } from './Testimonial/Testimonials'
import { Appointment } from './Appointment/Appointment'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import { Helmet } from 'react-helmet-async'


export const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Amrutam - Premium Ayurvedic Products | Natural Wellness</title>
                <meta
                    name="description"
                    content="Discover authentic Ayurvedic lifestyle products at Amrutam. Shop Nari Sondarya Malt and natural wellness solutions rooted in ancient wisdom."
                />
                <meta
                    name="keywords"
                    content="ayurvedic products, natural wellness, Nari Sondarya Malt, herbal supplements, ayurvedic lifestyle"
                />
                <link rel="canonical" href="https://amrutam-frontend-doctor-portal.vercel.app/" />

                {/* Open Graph for Social Media */}
                <meta property="og:title" content="Amrutam - Premium Ayurvedic Products" />
                <meta property="og:description" content="Authentic Ayurvedic wellness solutions" />
                <meta property="og:image" content="https://amrutam-frontend-doctor-portal.vercel.app/assets/logo-Ckj9A08R.png" />
                <meta property="og:url" content="https://amrutam-frontend-doctor-portal.vercel.app/" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Amrutam - Premium Ayurvedic Products" />
                <meta name="twitter:description" content="Authentic Ayurvedic wellness solutions" />
                <meta name="twitter:image" content="https://amrutam.co.in/twitter-image.jpg" />
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <Banner />
                <Featured />
                <Choosing />
                <Joining />
                <Testimonials />
                <FAQ />
                <Appointment />
                <Connect />
                <ScrollToTopButton /></Suspense>
        </>
    )
}
