import React, { useEffect } from 'react'
import './popular.css'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs'
import image_1 from '../../Assets/image_1.jpg'
import image_2 from '../../Assets/image_2.jpg'
import image_3 from '../../Assets/image_3.jpg'
import image_4 from '../../Assets/image_4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
   {
      id: 1,
      imgSrc: image_1,
      destTitle: 'Machu Pichu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
   },

   {
      id: 2,
      imgSrc: image_2,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAL RELAX',
   },

   {
      id: 3,
      imgSrc: image_3,
      destTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'CULTURAL RELAX',
   },

   {
      id: 4,
      imgSrc: image_4,
      destTitle: 'Taj Mahal',
      location: 'India',
      grade: 'CULTURAL RELAX',
   },
]

const Popular = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])

   return (
      <section className="popular section container">
         <div className="secContainer">
            <div className="secHeader flex">
               <div data-aos="fade-right" data-aos-duration="2000" className="textDiv">
                  <h2 className="secTitle">
                     Popular Destination
                  </h2>
                  <p>
                     From histotical cities to natural specteculars, come see the best of the world!
                  </p>
               </div>

               <div data-aos="fade-left" data-aos-duration="2000" className="iconsDiv flex">
                  <BsArrowLeftShort className="icon leftIcon" />
                  <BsArrowRightShort className="icon" />
               </div>
            </div>

            <div className="mainContent grid">
               {
                  Data.map(({ id, imgSrc, destTitle, location, grade }) => {
                     return (
                        <div data-aos="fade-up" className="singleDestination">
                           <div className="destImage">
                              <img src={imgSrc} alt="Image title" />

                              <div className="overlayInfo">
                                 <h3>{destTitle}</h3>
                                 <p>{location}</p>
                                 <BsArrowRightShort className="icon" />
                              </div>
                           </div>

                           <div className="destFooter">
                              <div className="number">
                                 0{id}
                              </div>
                              <div className="destText flex">
                                 <h6>{location}</h6>
                                 <span className='flex'>
                                    <span className="dot">
                                       <BsDot className="icon" />
                                    </span>
                                    Dot
                                 </span>
                              </div>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </section >
   )
}

export default Popular