import React, { useEffect } from 'react'
import './blog.css'
import { BsArrowRightShort } from 'react-icons/bs'
import image_5 from '../../Assets/image_5.jpg'
import image_6 from '../../Assets/image_6.jpg'
import image_7 from '../../Assets/image_7.jpg'
import image_8 from '../../Assets/image_8.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
   {
      id: 1,
      postImg: image_5,
      title: 'Beautiful Morocco, let us travel!',
      desc: `The kingdom of Morocco is a Muslim country in westtern North Africa with coastlines
            on the Atlantic Ocean and Mediterranean.`,
   },

   {
      id: 2,
      postImg: image_6,
      title: 'Romantic moments under Eiffel Tower',
      desc: `With vast swaths of desert in its east and west and the rich Nile River Valley at its heart,
            site to one of the world's earliest and greatest civilizations.`,
   },

   {
      id: 3,
      postImg: image_7,
      title: 'Let us have an adventure outside Tunisia ',
      desc: `Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom
            and struggles against terrorism that roil the region.`,
   },

   {
      id: 4,
      postImg: image_8,
      title: 'Best country in East Africa',
      desc: `When Kenya claimed its independence from the U.K. in 1963, leader of the newly formed republic
            promoted a sense of national unity using the motto.`,
   },
]

const Blog = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])

   return (
      <section className="blog container section">
         <div className="secContainer">
            <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
               <h2 className="secTitle">
                  Our Best Blog?
               </h2>
               <p>
                  An insight to the incredible experince in the world
               </p>
            </div>

            <div className="mainContainer grid">
               {
                  Posts.map(({ id, postImg, title, desc }) => {
                     return (
                        <div data-aos="fade-right" data-aos-duration="3000" className="singlePost grid">
                           <div className="imgDiv">
                              <img src={postImg} alt="Image Name" />
                           </div>

                           <div className="postDetails">
                              <h3>{title}</h3>
                              <p>
                                 {desc}
                              </p>
                           </div>

                           <a href="#" className='flex'>
                              Read More
                              <BsArrowRightShort className='icon' />
                           </a>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </section>
   )
}

export default Blog