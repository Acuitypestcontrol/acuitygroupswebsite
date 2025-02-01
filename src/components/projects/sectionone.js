
import React from 'react'

import Imageone from '../../images/VasukiventureHomes (4).webp'
import ImageTwo from '../../images/VasukiventureHomes (7).webp'
import ImageThree from '../../images/VasukiventureHomes (2).webp'
import ImageFour from '../../images/VasukiventureHomes (8).webp'
import ImageSix from '../../images/VasukiventureHomes (10).webp'
import ImageSeven from '../../images/VasukiventureHomes (1).webp'
import ImageFive from '../../images/VasukiventureHomes (5).webp'


export default function sectionone() {
  return (
    <div>

<section class="py-12 sm:px-20 bg-white">
  <div class="container"  style={{fontFamily:'Figtree'}}>
    <div class="flex flex-col md:flex-row items-end mb-20 sm:px-8">
      <div class="md:w-7/12 mb-10 md:mb-0">
        <div class="inline-block">
          <h1 class="text-3xl md:text-6xl pr-14 sm:pr-0 font-semibold text-gray-900">Recent projects</h1>
        </div>
      </div>
      <div class="md:w-5/12">
        <ul class="list-none flex flex-wrap items-center justify-end">
          <li><a class="bg-gradient-to-r from-orange-500  to-red-600 py-2 px-5 text-md mx-4 rounded-full text-white font-semibold" href="/">All</a></li>
          <li><a class=" bg-orange-50 font-semibold text-gray-900 py-2 px-5 text-md mx-4 rounded-full " href="#">Exterior</a></li>
          <li><a class="bg-orange-50 font-semibold text-gray-900  py-2 px-5 text-md mx-4 rounded-full " href="#">Interior</a></li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col md:flex-row mb-12">
      <div class="md:w-7/12 mb-20 md:mb-0 rounded-md">
        <a class="block" href="#">
          <img class="w-full px-4 mb-8" style={{maxHeight: '800px',BorderRadius:'25px'}} src={ImageTwo} alt="building constructor near me"/>
       
        </a>
      </div>
      <div class="md:w-5/12">
        <a class="block" href="#">
          <img class="w-full mb-8 px-4" style={{objectFit: 'cover', maxHeight: '520px'}}  src={ImageThree} alt="contractor near me"/>
          <div class="md:w-full">
            <span class=" bg-orange-700 rounded-full ml-24 sm:ml-0 px-4  sm:px-4 py-1 mb-6 border text-white">Turnkey Project</span>
            <h3 class="text-xl text-gray-700 md:text-2xl font-semibold mb-2 mt-4 ml-28 sm:ml-0">20*30 Plot </h3>
            <span class="block text-gray-700 font-medium text-2xl text-secondary-light ml-4">Mallesh, Nagarbhavi Bangalore</span>
          </div>
        </a>
      </div>
    </div>
    <div class="mb-8">
      <div class="flex flex-col md:flex-row px-6 gap-4">
        <div class="md:w-1/3 mb-20 md:mb-0">
          
            <img class="w-full mb-8 rounded-lg" style={{maxHeight: '444px'}}  src={ImageFour} alt="new home designs"/>
        
       
        </div>
        <div class="md:w-1/3 mb-20 md:mb-0">
         
            <img class="w-full mb-8  rounded-lg" style={{maxHeight: '570px'}}  src={Imageone} alt="20*30 home construction"/>
         
      
        </div>
        <div class="md:w-1/3">
         
            <img class="w-full mb-8 rounded-lg" style={{maxHeight: '444px'}} src={ImageTwo} alt="bangalore civil engineers"/>
            
     
        </div>
      </div>
    </div>
    <div class="mb-20">
      <div class="flex flex-col md:flex-row px-6 gap-4">
        <div class="md:w-1/3 mb-20 md:mb-0">
        
            <img class="w-full mb-8 rounded-lg" style={{maxHeight: '444px'}}  src={ImageSix} alt="best construction company"/>
          
      
        </div>
        <div class="md:w-1/3 mb-20 md:mb-0">
   
            <img class="w-full mb-8  rounded-lg" style={{maxHeight: '570px'}}  src={ImageFive} alt="interior ideas"/>
            
     
        </div>
        <div class="md:w-1/3">
    
            <img class="w-full mb-8 rounded-lg" style={{maxHeight: '444px'}} src={ImageSeven} alt="Kitchen Ideas for new home"/>
         
  
        </div>
      </div>
    </div>
    <div class="text-center">
      <a class="inline-block pb-4 pt-4 font-semibold text-white bg-gradient-to-r from-orange-500  to-red-600 rounded-lg" href="#">
        <span class="mt-2 px-4  rounded-lg">See all projects</span>
       
      </a>
    </div>
  </div>
</section>

    </div>
  )
}
