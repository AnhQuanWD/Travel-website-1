import React, { useEffect } from 'react'
import './about.css'
import mountain from '../../Assets/mountain.png'
import climbing from '../../Assets/climbing.png'
import customer from '../../Assets/customer.png'
import video from '../../Assets/video.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
   useEffect(() => {
      Aos.init({ duration: 2000 })
   }, [])

   return (
      <section className="about section">
         <div className="secContainer">
            <h2 data-aos="fade-up" data-aos-duration="2000" className="tiitle">
               Why Hikings?
            </h2>

            <div data-aos="fade-up" data-aos-duration="2500" className="mainContent container grid">
               <div className="singleItem">
                  <img src={mountain} alt="Image Name" />
                  <h3>100+ Mountains</h3>
                  <p>
                     Research shows that a change to break away from the normal rhythms of daily life reduces stress
                     and improves health and well-being.
                  </p>
               </div>

               <div className="singleItem">
                  <img src={climbing} alt="Image Name" />
                  <h3>1000+ Hikings</h3>
                  <p>
                     Research shows that a change to break away from the normal rhythms of daily life reduces stress
                     and improves health and well-being.
                  </p>
               </div>

               <div className="singleItem">
                  <img src={customer} alt="Image Name" />
                  <h3>2000+ Customers</h3>
                  <p>
                     Research shows that a change to break away from the normal rhythms of daily life reduces stress
                     and improves health and well-being.
                  </p>
               </div>
            </div>

            <div className="videoCard container">
               <div className="cardContent grid">
                  <div data-aos="fade-right" className="cardText">
                     <h2>
                        Wonderful House experience nin there!
                     </h2>
                     <p>
                        The Adventure subranking is based on an equally weighted
                        average of scores from five country.
                     </p>
                  </div>

                  <div data-aos="fade-left" className="cardVideo">
                     <video src={video} autoPlay loop muted type='video/mp4'></video>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About