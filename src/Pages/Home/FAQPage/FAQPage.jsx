import React from "react";
import { AllFqs } from "./AllFaqs";
import { DownloadsApp } from "./DownloadsApp";
import { FaqBanner } from "./FaqBanner";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

export const FAQPage = () => {
    return (
        <>
            <Helmet>
                <title>FAQ – Ayurvedic Wellness | Amrutam</title>
                <meta
                    name="description"
                    content="Frequently asked questions about Amrutam Ayurvedic wellness products, remedies, benefits, usage instructions, and natural formulations."
                />
                <link rel="canonical" href="https://amrutam-frontend-doctor-portal.vercel.app/faq" />

                {/* FAQ Page Schema */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://amrutam-frontend-doctor-portal.vercel.app/",
              "@type": "FAQPage",
              "mainEntity": []
            }
          `}
                </script>
            </Helmet>

            <FaqBanner />
            <AllFqs />
            <DownloadsApp />
            <ScrollToTopButton />
        </>
    );
};
