import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router'

export const HomeLayout = () => {
    return (
        <>

            <Header></Header>
            <main className=" min-h-[calc(100vh-200px)]">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}
