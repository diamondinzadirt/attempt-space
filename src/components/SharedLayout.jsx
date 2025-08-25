import React, {useState, useEffect} from 'react'
import { useLocation, Outlet } from 'react-router-dom'

import Navbar from './Navbar'

const SharedLayout = () => {


 const { pathname} = useLocation()

 const bgColor = `
        ${pathname === '/' ? 'bg-home-mobile' 
        : pathname === '/destination' ? 'bg-destination-mobile' 
        : pathname === '/crew' ? 'bg-crew-mobile' 
        : 'bg-technology-mobile'} 
        ${pathname === '/' ? 'sm:bg-home-tablet' 
        : pathname === '/destination' ? 'sm:bg-destination-tablet' 
        : pathname === '/crew' ? 'sm:bg-crew-tablet' 
        : 'sm:bg-technology-tablet'} 
        ${pathname === '/' ? 'xl:bg-home-desktop' 
        : pathname === '/destination' ? 'xl:bg-destination-desktop' 
        : pathname === '/crew' ? 'xl:bg-crew-desktop' 
        : 'xl:bg-technology-desktop'} 
        bg-no-repeat bg-cover min-h-screen flex flex-col relative

 `

  return (
    <div className={`${bgColor}`}> 
      <Navbar />
       {
        
          <main className='mt-12 ' >
            <Outlet />
          </main>
       
       }
    </div>
  )
}

export default SharedLayout