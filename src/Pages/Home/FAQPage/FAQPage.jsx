import React from 'react'
import { AllFqs } from './AllFaqs'
import { DownloadsApp } from './DownloadsApp'
import { FaqBanner } from './FaqBanner'

export const FAQPage = () => {
  return (
      <>
          <FaqBanner/>
          <AllFqs />
          <DownloadsApp/>
      </>
  )
}
