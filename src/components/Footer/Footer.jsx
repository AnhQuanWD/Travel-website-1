import React, { useEffect } from 'react'
import './footer.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])

   return (
      <div className="footer">
         <div className="secContainer container grid">
            <div className="logoDiv">
               <div data-aos="fade-right" data-aos-duration="2000" className="footerLogo">
                  <a href="#" className="logo flex">
                     <h1 className="flex">
                        <SiYourtraveldottv className='icon' />
                        Dot
                     </h1>
                  </a>
               </div>

               <div data-aos="fade-right" data-aos-duration="2500" className="socials flex">
                  <ImFacebook className="icon" />
                  <BsTwitter className="icon" />
                  <AiFillInstagram className="icon" />
               </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
               <span className="linkTitle">
                  Information
               </span>
               <li>
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">Explore</a>
               </li>
               <li>
                  <a href="#">Travel</a>
               </li>
               <li>
                  <a href="#">Blog</a>
               </li>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" className="footerLinks">
               <span className="linkTitle">
                  Contact Us
               </span>
               <span className='phone'>09 6996 6699</span>
               <span className='email'>quannguyen2101999@gmail.com</span>
            </div>
         </div>
      </div>
   )
}

export default Footer