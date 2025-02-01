import React from "react";
import Slider from "react-slick";
import ImageOne from'../../images/VasukiventureHomes (1).webp'
import ImageTwo from'../../images/VasukiventureHomes (2).webp'
import ImageThree from'../../images/VasukiventureHomes (3).webp'
import ImageFour from'../../images/VasukiventureHomes (4).webp'
import ImageFive from'../../images/VasukiventureHomes (5).webp'
import ImageSix from'../../images/VasukiventureHomes (6).webp'
import ImageSeven from'../../images/VasukiventureHomes (7).webp'
import ImageEight from'../../images/VasukiventureHomes (8).webp'
import ImageNine from'../../images/VasukiventureHomes (9).webp'
import ImageTen from'../../images/VasukiventureHomes (10).webp'



export default function section5() {
   
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 1000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          
        };

return (
   
                <section class="relative py-10 md:py-24 overflow-hidden bg-white" style={{fontFamily:'Figtree'}}>
         <div class="relative container px-4 mx-auto">
    <div class="text-center mb-18">
      <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">Work Speaks</span>
      <h1 class="font-heading text-4xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-10">

        <span>Our Recent Works</span>
      </h1>

    </div>
   
  
          </div>
         
          <div>

        <Slider {...settings}>
          <div>
          <div class="w-full px-4">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3 ">
               
                <img class="block w-full h-full rounded-md" src={ImageTwo} alt="Home Construction"/>
              </div>
            </a>
          </div>
          </div>
          <div>
          <div class="w-full  px-4 ">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
               
                <img class="block w-full h-full  rounded-md" src={ImageThree} alt="New Home Architect"/>
              </div>
            </a>
          </div>
          </div>
          <div>
          <div class=" w-full  px-4 rounded-sm">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
                
                <img class="block w-full h-full  rounded-md" src={ImageFour} alt="Construction engineer"/>
              </div>
            </a>
          </div>
          </div>
          <div>
          <div class=" w-full  px-4 rounded-sm">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
              
                <img class="block w-full h-full  rounded-md" src={ImageSix} alt="Best Civil engineer in bangalore"/>
              </div>
            </a>
          </div>
          </div>
          <div>
          <div class="w-full  px-4 rounded-sm">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
               
                <img class="block w-full h-full  rounded-md" src={ImageSeven} alt="Best home designs in bangalore"/>
              </div>
            </a>
          </div>
          </div>
          <div>
          <div class=" w-full  px-4">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
               
                <img class="block w-full h-full  rounded-md" src={ImageEight} alt="Home builder near me"/>
              </div>

            </a>
          </div>
          </div>
          <div>
          <div class=" w-full  px-4">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
               
                <img class="block w-full h-full  rounded-md" src={ImageOne} alt="Home builder near me"/>
              </div>

            </a>
          </div>
          </div>
          <div>
          <div class=" w-full  px-4">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
               
                <img class="block w-full h-full  rounded-md" src={ImageFive} alt="Home builder near me"/>
              </div>

            </a>
          </div>
          </div>
          <div>

          <div class=" w-full  px-4">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
               
                <img class="block w-full h-full  rounded-md" src={ImageNine} alt="Home builder near me"/>
              </div>

            </a>
          </div>
          </div>

          <div>
          <div class=" w-full  px-4">
            <a class="group block max-w-sm mx-auto md:max-w-none h-full" href="#">
              <div class="relative w-full h-72 mb-3">
               
                <img class="block w-full h-full  rounded-md" src={ImageTen} alt="Home builder near me"/>
              </div>

            </a>
          </div>
          </div>

          
        
        
          
          
          
        </Slider>
        </div>
      
  

        
</section>

    );

    }


