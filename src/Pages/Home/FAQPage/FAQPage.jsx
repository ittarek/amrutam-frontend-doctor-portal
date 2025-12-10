import React from 'react'
import { AllFqs } from './AllFaqs'
import { DownloadsApp } from './DownloadsApp'
import { FaqBanner } from './FaqBanner'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'

export const FAQPage = () => {
  return (
      <>
          <FaqBanner/>
          <AllFqs />
          <DownloadsApp />
          <ScrollToTopButton />
      </>
  )
}
