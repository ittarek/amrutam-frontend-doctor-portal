import React from 'react'
import { Banner } from './Banner/Banner'
import { Featured } from './Featured/Featured'
import { Choosing } from './Choosing/Choosing'
import { Joining } from './Joining/Joining'
import { Connect } from './Connect/Connect'
import { FAQ } from './FAQ/FAQ'


export const HomePage = () => {
    return (
        <><Banner />
            <Featured />
            <Choosing />
            <Joining />
<FAQ/>

            <Connect/>
        </>
    )
}
