import React from 'react'
import { BrowserRouter, Route, Routes,NavLink,Link } from 'react-router-dom'
import Logo from './images/whitebg.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ScrollToTop from "react-scroll-to-top"
import Appwrap from './components/global/appwrap'
import Homepage from './components/homepage/index'
import Projects from './components/projects/index'
import Aboutpage from './components/aboutus/index'
import Services from './components/services/index'
import Portfolio from './components/portfolio/index'
import Contact from './components/contact/index'


export default function App() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+91-9845751751"
        accountName="Urban Nest Properties"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar={Logo}
      />
         <div>
   

   <ScrollToTop  smooth className="mb-16 pl-2" color ="red" />
 </div>
      <BrowserRouter>
      <Appwrap>
<Routes >
  <Route exact path="/" element={<Homepage/>}/>
  <Route exact path="/projects" element={<Projects/>}/>
  <Route exact path="/aboutus" element={<Aboutpage/>}/>
  <Route exact path="/services" element={<Services/>}/>
  <Route exact path="/portfolio" element={<Portfolio/>}/>
  <Route exact path="/contact" element={<Contact/>}/>
</Routes>
</Appwrap>
</BrowserRouter>
    </div>
  )
}

