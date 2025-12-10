import { FaqFooter } from '@/components/Footer/FaqFooter'
import { FaqHeader } from '@/components/Header/FaqHeader'
import React from 'react'
import { Outlet } from 'react-router'

export const FAQLayout = () => {
  return (
      <>

          <FaqHeader></FaqHeader>
          <main className=" min-h-[calc(100vh-200px)]">
              <Outlet />
          </main>

          <FaqFooter />
      </>
  )
}
