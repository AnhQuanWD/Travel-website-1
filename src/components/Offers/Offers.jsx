import React, { useEffect } from 'react'
import './offers.css'
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import house_1 from '../../Assets/house_1.jpg'
import house_2 from '../../Assets/house_2.jpg'
import house_3 from '../../Assets/house_3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Details = [
   {
      id: 1,
      imgSrc: house_1,
      destTile: 'Machu Pichu',
      location: 'Peru',
      price: '$7,777',
   },

   {
      id: 2,
      imgSrc: house_2,
      destTile: 'Guanajuato',
      location: 'Mexico',
      price: '$6,666',
   },

   {
      id: 3,
      imgSrc: house_3,
      destTile: 'Angkor Wat',
      location: 'Cambodia',
      price: '$4,444',
   },
]

const Offers = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])

   return (
      <section className="offer container section">
         <div className="secContainer">
            <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
               <h3 className="secTitle">
                  Special Offers
               </h3>
               <p>
                  From historical cities to natural specteculars, come see the best of the world!
               </p>
            </div>

            <div className="mainContent grid">
               {
                  Details.map(({ id, imgSrc, destTile, location, price }) => {
                     return (
                        <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                           <div className="destImage">
                              <img src={imgSrc} alt="Image Name" />
                              <span className='discount'>
                                 30% Off
                              </span>
                           </div>
                           <div className="offerBody">
                              <div className="price flex">
                                 <h4>{price}</h4>
                                 <span className="status">
                                    For Rent
                                 </span>
                              </div>

                              <div className="amenities flex">
                                 <div className="singleAmenity flex">
                                    <MdKingBed className="icon" />
                                    <small>2 Beds</small>
                                 </div>
                                 <div className="singleAmenity flex">
                                    <MdBathtub className="icon" />
                                    <small>1 Bath</small>
                                 </div>
                                 <div className="singleAmenity flex">
                                    <FaWifi className="icon" />
                                    <small>Wi-fi</small>
                                 </div>
                                 <div className="singleAmenity flex">
                                    <MdAirportShuttle className="icon" />
                                    <small>Shuttle</small>
                                 </div>
                              </div>

                              <div className="location flex">
                                 <MdLocationOn className="icon" />
                                 <small>{destTile}, {location}</small>
                              </div>

                              <button className="btn flex">
                                 View Details <BsArrowRightShort className="icon" />
                              </button>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </section>
   )
}

export default Offers