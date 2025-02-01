import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Appwrap({children}) {
  return (
    <div className=" relative">
        <Navbar/>
       {children }
        <Footer/>
    </div>
  )
}
