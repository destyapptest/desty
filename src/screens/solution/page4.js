import './../../assets/scss/page.scss'
import {Component, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import Sponsored4 from './../../assets/images/sponsor2.png'
import Solution4 from './../../assets/images/traffic.jpg' 
import Aos from 'aos';
import "aos/dist/aos.css";

const Page4 =()=>{
  useEffect(()=>{
  Aos.init({duration:2000});
  }, []);
 
    return(
      
    
      <section className='floor4'>
        
        <section  className='floor4_text'>
          <header data-aos="fade-left" className='header_floor4'>
            <span className='span_header_floor4'>Traffic</span>
              <div className='line_header_floor4'></div>
          </header>
          <h2 data-aos="fade-up" className='sub_floor4'> Bagikan dan tingkatkan
            <span className='span_sub_floor4'> traffic</span>,
            dengan cepat
          </h2>
          <p data-aos="fade-up" className='article_floor4'>
          	Bagikan link lewat bio Instagram, pesan WhatsApp, facebook, Webiste, dan apapun.
          </p>
					<div className='sponsored4'>
						<img src={Sponsored4} className="sponsored_image4"/>
					</div>
         
        </section>
        <section data-aos="flip-left" className='image_floor4'>
            <img src={Solution4} className="image_floor4_1"/>
        </section>
          
      </section>
    
       
    )
  }

export default Page4;