import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { NavBar } from '../componentes/NavBar'
import { Footer } from  '../componentes/compartidos/Footer'
import { Banner } from '../componentes/home/Banner'
import { Newsletter } from '../componentes/home/Newsletter'
//esto permitira cargarse en toda las paginas
export const RootLayout = () => {

 const{ pathname}= useLocation(); //solo se mostrara en el home
  
   

  return (
    <div className='h-screen flex flex-col font-montserrat'>
      <NavBar />

      {
        pathname === '/' &&  <Banner />
      }

      <main className="container my-8 flex-1">
        <Outlet />
      </main>

       {
        pathname === '/' &&  <Newsletter />
      }

       <Footer />

    </div>

  )
}
