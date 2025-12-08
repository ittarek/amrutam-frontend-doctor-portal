import React from 'react'
import { Banner } from './Banner/Banner'
import { Featured } from './Featured/Featured'
import { Choosing } from './Choosing/Choosing'
import { Joining } from './Joining/Joining'


export const HomePage = () => {
    return (
        <><Banner />
            <Featured />
            <Choosing />
            <Joining />
        </>
    )
}
