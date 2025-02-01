// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Logo from "../../../src/images/logo1.png";

// import {
//   MdKeyboardArrowRight,
//   MdKeyboardArrowDown,
//   MdKeyboardArrowUp,
// } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import { json, Link, NavLink, useParams, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [dropabout, setDropabout] = useState(false);
//   const { id } = useParams();
//   useEffect(() => {
//     id && setIsMenuOpen(false);
//   }, [id]);

//   return (
//     <div className="sticky top-0  z-50">
//       <section
//         className=" bg-white sm:px-2 sm:pr-10 "
//         style={{ fontFamily: "Figtree" }}
//       >
//         <section>
//           <nav class="relative py-6 bg-transparent z-50">
//             <div class="container px-4 mx-auto">
//               <div class="flex items-center">
//                 <a class="inline-block text-lg font-bold" href="/">
//                   <img class="h-20" src={Logo} alt="" width="auto" />
//                 </a>
//                 <div class="lg:hidden ml-auto">
//                   <button
//                     class="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
//                     aria-label="Open Menu"
//                     title="Open Menu"
//                     onClick={() => setIsMenuOpen(true)}
//                   >
//                     <svg
//                       width="24"
//                       height="24"
//                       viewbox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M3 12H21"
//                         stroke="black"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                       <path
//                         d="M3 6H21"
//                         stroke="black"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                       <path
//                         d="M3 18H21"
//                         stroke="black"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       ></path>
//                     </svg>
//                   </button>
//                 </div>
//                 <ul class="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
//                   <li class="group relative">
//                     <a
//                       class="inline-block text-lg text-gray-900 hover:text-green-900 font-semibold"
//                       href="/"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     {" "}
//                     <Link exact to="/aboutus">
//                       {" "}
//                       <a
//                         class="inline-block text-lg text-gray-900 hover:text-green-900 font-semibold"
//                         href="/aboutus"
//                       >
//                         About
//                       </a>
//                     </Link>{" "}
//                   </li>
//                   <li>
//                     {" "}
//                     <Link exact to="/services">
//                       <a
//                         class="inline-block text-lg text-gray-900 hover:text-green-900 font-semibold"
//                         href="/services"
//                       >
//                         Our Services
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     {" "}
//                     <Link exact to="/portfolio">
//                       <a
//                         class="inline-block text-lg text-gray-900 hover:text-green-900 font-semibold"
//                         href="/portfolio"
//                       >
//                         Why Choose Us
//                       </a>
//                     </Link>
//                   </li>
//                   {/* <li> <Link exact to="/projects"><a class="inline-block text-lg text-gray-900 hover:text-green-900 font-semibold" href="/projects">Projects</a></Link></li> */}
//                   <li>
//                     {" "}
//                     <Link exact to="/contact">
//                       <a
//                         class="inline-block text-lg text-gray-900 hover:text-green-900 font-semibold"
//                         href="/contact"
//                       >
//                         Contact
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//                 <div></div>

//                 {/* ............................................. */}

//                 <div class="hidden lg:block ml-auto">
//                   <div class="flex items-center">
//                     <a
//                       class="bg-blue-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
//                       href="#"
//                     >
//                       <div class="relative flex items-center justify-center">
//                         <svg
//                           fill="#ffffff"
//                           width="25px"
//                           height="25px"
//                           viewBox="0 0 32 32"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
//                         </svg>

//                         <Link exact to="https://wa.me/9845751751">
//                           {" "}
//                           <span class="ml-4 text-md">+91 9845751751</span>
//                         </Link>
//                         <span></span>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//                 <div class="hidden lg:block ml-auto">
//                   <div class="flex items-center">
//                     <a
//                       class="bg-blue-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
//                       href="#"
//                     >
//                       <div class="relative flex items-center justify-center">
//                         <svg
//                           fill="#ffffff"
//                           width="25px"
//                           height="25px"
//                           viewBox="0 0 32 32"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
//                         </svg>

//                         <Link exact to="https://wa.me/9606060220">
//                           {" "}
//                           <span class="ml-4 text-md">+91 9606060220</span>
//                         </Link>
//                         <span></span>
//                       </div>
//                     </a>
//                   </div>
//                 </div>



//                 {/* .................................................. */}
//               </div>
//             </div>
//           </nav>
//           <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
//             <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
//             <nav class="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
//               <div class="flex items-center mb-16">
//                 <a
//                   class="mr-auto text-2xl font-medium leading-none"
//                   href="#"
//                 ></a>
//                 <button class="navbar-close">
//                   <svg
//                     class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewbox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//               <div>
//                 <div class="py-8 px-6 mb-6 border-t border-b border-gray-200">
//                   <a
//                     class="flex items-center text-sm font-semibold text-orange-900 hover:text-orange-600"
//                     href="#"
//                   >
//                     <svg
//                       width="18"
//                       height="16"
//                       viewbox="0 0 18 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M17.3337 6.05833C17.2811 5.9059 17.1854 5.77202 17.0582 5.67292C16.931 5.57381 16.7777 5.51374 16.617 5.5L11.8754 4.80833L9.75038 0.499999C9.68215 0.359106 9.5756 0.240284 9.44296 0.157143C9.31031 0.074003 9.15693 0.0299072 9.00039 0.0299072C8.84384 0.0299072 8.69046 0.074003 8.55781 0.157143C8.42517 0.240284 8.31862 0.359106 8.25039 0.499999L6.12539 4.8L1.38372 5.5C1.22949 5.52192 1.08449 5.58663 0.96518 5.6868C0.845868 5.78696 0.757021 5.91856 0.708721 6.06666C0.664509 6.21139 0.660541 6.36543 0.697245 6.51224C0.733948 6.65905 0.809936 6.7931 0.917055 6.9L4.35872 10.2333L3.52539 14.9667C3.49564 15.1229 3.51121 15.2844 3.57028 15.432C3.62935 15.5797 3.72943 15.7074 3.85872 15.8C3.98474 15.8901 4.13337 15.9433 4.28793 15.9536C4.44249 15.9639 4.59686 15.9309 4.73372 15.8583L9.00039 13.6333L13.2504 15.8667C13.3673 15.9326 13.4994 15.9671 13.6337 15.9667C13.8102 15.9673 13.9824 15.9118 14.1254 15.8083C14.2547 15.7157 14.3548 15.588 14.4138 15.4404C14.4729 15.2927 14.4885 15.1312 14.4587 14.975L13.6254 10.2417L17.067 6.90833C17.1874 6.8064 17.2763 6.67242 17.3235 6.52195C17.3707 6.37149 17.3742 6.21073 17.3337 6.05833ZM12.2087 9.39166C12.111 9.48619 12.0379 9.6032 11.9957 9.73247C11.9536 9.86175 11.9438 9.99937 11.9671 10.1333L12.5671 13.625L9.43372 11.9583C9.31315 11.8941 9.17865 11.8605 9.04205 11.8605C8.90546 11.8605 8.77095 11.8941 8.65039 11.9583L5.51705 13.625L6.11705 10.1333C6.14033 9.99937 6.13048 9.86175 6.08836 9.73247C6.04623 9.6032 5.97312 9.48619 5.87539 9.39166L3.37539 6.89166L6.88372 6.38333C7.01872 6.36455 7.14705 6.31295 7.25747 6.23304C7.36789 6.15313 7.45702 6.04736 7.51705 5.925L9.00039 2.75L10.5671 5.93333C10.6271 6.0557 10.7162 6.16147 10.8266 6.24137C10.9371 6.32128 11.0654 6.37289 11.2004 6.39166L14.7087 6.9L12.2087 9.39166Z"
//                         fill="currentColor"
//                       ></path>
//                     </svg>
//                     <span class="ml-3">Upgrade to Premium</span>
//                   </a>
//                 </div>
//                 <div class="flex px-6 mb-16 items-center">
//                   <a
//                     class="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900"
//                     href="#"
//                   >
//                     Sign In
//                   </a>
//                   <a
//                     class="inline-block py-3 px-4 text-sm font-semibold text-orange-900 hover:text-white border border-gray-300 hover:border-orange-600 hover:bg-orange-900 rounded-md transition duration-200"
//                     href="#"
//                   >
//                     Create an account
//                   </a>
//                 </div>
//                 <div>
//                   <div class="flex w-20 h-20 mb-6 items-center justify-center bg-orange-50 rounded-full">
//                     <svg
//                       width="29"
//                       height="28"
//                       viewbox="0 0 29 28"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z"
//                         fill="black"
//                       ></path>
//                     </svg>
//                   </div>
//                   <span class="block mb-3 text-sm text-gray-500">
//                     Drop us a line
//                   </span>
//                   <a class="font-semibold text-black" href="#">
//                     hello@shuffle.dev
//                   </a>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </section>

//         {/* ..................................mobile............................................ */}

//         <div className="flex items-center justify-between z-20 md:hidden px-2">
//           <div class="lg:hidden fixed top-0 left-0">
//             {isMenuOpen && (
//               <SidebarWrap
//                 key="first"
//                 initial={{ x: -250, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -280, opacity: 1 }}
//                 transition={{
//                   duration: 0.36,
//                   type: "tween",
//                   ease: "easeInOut",
//                 }}
//               >
//                 <div class="absolute  w-full  ">
//                   <div
//                     className="container  lg:w-4/5 block"
//                     style={{ fontFamily: "Figtree" }}
//                   >
//                     <div>
//                       <div className="flex gap-0 ">
//                         <li class="dropdown inline ml-4  text-start  cursor-pointer">
//                           <div class="dropdown-menu absolute hidden h-auto mt-3  z-50">
//                             <ul class="block w-full bg-[#FFFF] shadow px-6 py-4 text-indigo-800 rounded"></ul>
//                           </div>
//                         </li>

//                         <Link
//                           to="/profile"
//                           className="flex py-6 text-indigo-800  text-[20px] font-semibold rounded-lg shrink-0 "
//                         >
//                           {/* <Link to="/">
//                           <img src={Logo} alt="logo" className=" w-28 md:hidden" />
//                         </Link> */}
//                         </Link>
//                       </div>
//                     </div>
//                   </div>

//                   <hr />

//                   <MenuWrap>
//                     <nav>
//                       <ul
//                         class="space-y-2   text-left   text-[18px] text-orange-800 mt-14"
//                         style={{ fontFamily: "Figtree" }}
//                       >
//                         <li className="nav-item pl-2 font-bold ">
//                           <NavLink
//                             activeClassName="selected"
//                             exact
//                             to="/"
//                             onClick={() => setIsMenuOpen(false)}
//                           >
//                             Home{" "}
//                           </NavLink>
//                         </li>

//                         <li className="nav-item pl-2 font-bold">
//                           <NavLink
//                             to="/aboutus"
//                             onClick={() => setIsMenuOpen(false)}
//                             activeClassName="selected"
//                           >
//                             About Us
//                           </NavLink>
//                         </li>

//                         <li className="nav-item pl-2 font-bold">
//                           <NavLink
//                             to="/services"
//                             onClick={() => setIsMenuOpen(false)}
//                             activeClassName="selected"
//                           >
//                             Our Services
//                           </NavLink>
//                         </li>

//                         <li className="nav-item pl-2 font-bold">
//                           <NavLink
//                             to="/portfolio"
//                             onClick={() => setIsMenuOpen(false)}
//                             activeClassName="selected"
//                           >
//                             Why Choose us
//                           </NavLink>
//                         </li>

//                         {/* <li className="nav-item pl-2 font-bold" >
//                         <NavLink to="/projects" onClick={() => setIsMenuOpen(false)} activeClassName="selected">Projects</NavLink>
//                       </li> */}

//                         <li className="nav-item pl-2 font-bold">
//                           <NavLink
//                             to="/contact"
//                             onClick={() => setIsMenuOpen(false)}
//                             activeClassName="selected"
//                           >
//                             Contact Us
//                           </NavLink>
//                         </li>
//                       </ul>
//                     </nav>
//                   </MenuWrap>
//                 </div>
//               </SidebarWrap>
//             )}

//             <div>
//               {/* <AnimatePresence exitBeforeEnter  >
//                 {(isMenuOpen) && <BackdropWrap
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.36, type: 'tween', ease: "easeInOut" }}
//                   onClick={() => setIsMenuOpen(false)} />}
//               </AnimatePresence> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const Wrapper = styled.section`
//   li > ul {
//     transform: translatex(100%) scale(0);
//   }
//   li:hover > ul {
//     transform: translatex(101%) scale(1);
//   }
//   li > button svg {
//     transform: rotate(-90deg);
//   }
//   li:hover > button svg {
//     transform: rotate(-270deg);
//   }

//   .group:hover .group-hover\:scale-100 {
//     transform: scale(1);
//   }
//   .group:hover .group-hover\:-rotate-180 {
//     transform: rotate(180deg);
//   }
//   .scale-0 {
//     transform: scale(0);
//   }
//   .min-w-32 {
//     min-width: 8rem;
//   }
// `;

// const BackdropWrap = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 200vh;
//   background-color: #0a0a0a05;
// `;

// const SidebarWrap = styled(motion.aside)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 75%;
//   height: 100vh;
//   background-color: #ffffff;
//   z-index: 50;
// `;

// const MenuWrap = styled.div`
//   .dropdown_menu {
//     text-align: left;
//     /* height: 167px ; */
//     max-height: 167px;
//     overflow-y: auto;
//     overflow-x: hidden;
//     background-color: #f5f5f5;

//     svg {
//       font-size: 1rem;
//       margin-right: 0.2rem;
//     }
//   }

//   #subdroptoggle {
//     background-color: white;
//     font-size: 0.9rem;
//     font-weight: 600;
//     &:hover {
//       background-color: #88448a;
//       color: white;
//     }
//   }

//   ul {
//     padding-bottom: 0.7px;
//     background-color: #f5f5f5;
//     li {
//       a {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         width: 100%;
//         padding: 0.5rem 0.5rem 0.5rem 0.5rem;
//         margin-bottom: 0.1rem;
//         transition: 0.3s;

//         &:hover {
//           background-color: #408080;
//           color: white;
//         }
//       }

//       list-style: none;
//       background-color: white;
//       /* color:; */
//       cursor: pointer;

//       svg {
//         font-size: 1.3rem;
//       }

//       .selected {
//         background-color: #88448a;
//         color: white;
//         width: 100%;
//         display: block;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         width: 100%;
//         padding: 0.5rem 0.75rem 0.5rem 0.9rem;
//         margin-bottom: 0.3rem;
//       }
//     }
//   }
// `;
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Logo from "../../../src/images/logo1.png";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="sticky top-0 z-50 bg-white shadow-md">
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

//         <Link to="/" className="flex items-center">
//           <img src={Logo} alt="Logo" className="h-16" />
//         </Link>

     
//         <div className="hidden lg:flex items-center space-x-8">
//           <NavLink
//             to="/"
//             className="text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] px-4 py-2 rounded-lg"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/aboutus"
//             className="text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] px-4 py-2 rounded-lg"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className="text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] px-4 py-2 rounded-lg"
//           >
//             Our Services
//           </NavLink>
//           <NavLink
//             to="/portfolio"
//             className="text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] px-4 py-2 rounded-lg"
//           >
//             Why Choose Us
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] px-4 py-2 rounded-lg"
//           >
//             Contact
//           </NavLink>
//         </div>

  
//         <div className="hidden lg:flex flex-col space-y-4">
//           <a
//             href="https://wa.me/9845751751"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-600 rounded-lg transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] flex items-center"
//           >
//             <svg
//               fill="#ffffff"
//               width="20px"
//               height="20px"
//               viewBox="0 0 32 32"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
//             </svg>
//             <span className="ml-2">+91 9845751751</span>
//           </a>
//           <a
//             href="https://wa.me/9606060220"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-600 rounded-lg transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] flex items-center"
//           >
//             <svg
//               fill="#ffffff"
//               width="20px"
//               height="20px"
//               viewBox="0 0 32 32"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
//             </svg>
//             <span className="ml-2">+91 9606060220</span>
//           </a>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="lg:hidden p-2 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-white shadow-lg">
//           <NavLink
//             to="/"
//             className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/aboutus"
//             className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/services"
//             className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Our Services
//           </NavLink>
//           <NavLink
//             to="/portfolio"
//             className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Why Choose Us
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-green-600 transition duration-300"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Contact
//           </NavLink>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../src/images/logo1.png";
import "../../../src/navbar.css"; // Custom CSS for navbar

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tree sprinkles effect on hover
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const createTree = () => {
      const tree = document.createElement("span");
      tree.innerHTML = "🌿";
      tree.classList.add("tree-sprinkle");
      tree.style.left = `${Math.random() * 100}%`;
      tree.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random fall speed
      navbar.appendChild(tree);

      // Remove tree after animation ends
      setTimeout(() => {
        tree.remove();
      }, 5000);
    };

    let sprinkleInterval;
    const startSprinkle = () => {
      sprinkleInterval = setInterval(createTree, 300); // Create a new tree every 300ms
    };

    const stopSprinkle = () => {
      clearInterval(sprinkleInterval);
    };

    navbar.addEventListener("mouseenter", startSprinkle);
    navbar.addEventListener("mouseleave", stopSprinkle);

    return () => {
      navbar.removeEventListener("mouseenter", startSprinkle);
      navbar.removeEventListener("mouseleave", stopSprinkle);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-green-50 to-green-100 shadow-md md:mb-36">
      <nav className="navbar container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-16" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className="navbar-link text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="navbar-link text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="navbar-link text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            Our Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className="navbar-link text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            Why Choose Us
          </NavLink>
          <NavLink
            to="/contact"
            className="navbar-link text-lg font-semibold text-gray-800 hover:text-green-600 transition duration-300 px-4 py-2 rounded-lg"
          >
            Contact
          </NavLink>
        </div>

        {/* WhatsApp Buttons */}
        <div className="hidden lg:flex flex-col space-y-4">
          <a
            href="https://wa.me/9845751751"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-600 rounded-lg transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] flex items-center"
          >
            <svg
              fill="#ffffff"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
            </svg>
            <span className="ml-2">+91 9845751751</span>
          </a>
          <a
            href="https://wa.me/9606060220"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-600 rounded-lg transition duration-300 hover:shadow-[0_0_10px_2px_rgba(72,187,120,0.5)] flex items-center"
          >
            <svg
              fill="#ffffff"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
            </svg>
            <span className="ml-2">+91 9606060220</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-green-50 to-green-100 shadow-lg mb-40">
          <NavLink
            to="/"
            className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-200 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-200 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-200 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-200 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Why Choose Us
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-green-200 hover:text-green-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}