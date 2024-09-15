import React from 'react'
import Header from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AppLayout() {
    

    return (
        <>

                <Header></Header>
                <Outlet></Outlet>
            

        </>
    )
}