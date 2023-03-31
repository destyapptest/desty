import './../../assets/scss/page.scss'
import {Component, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import First2 from './../../assets/images/first2.png'
import Solution5 from './../../assets/images/affiliate.png' 
import Aos from 'aos';
import "aos/dist/aos.css";

const Page5 =()=>{
  useEffect(()=>{
  Aos.init({duration:2000});
  }, []);
 
    return(
      
    
      <section className='floor5'>
        <section  data-aos="flip-left" className='image_floor5'>
            <img src={Solution5} className="image_floor5_1"/>
          </section>
        <section  className='floor5_text'>
          <header  data-aos="fade-left" className='header_floor5'>
            <span className='span_header_floor5'>Pembayaran</span>
              <div className='line_header_floor5'></div>
          </header>
          <h2  data-aos="fade-up" className='sub_floor5'> Terima
            <span className='span_sub_floor5'> pebayaran</span>,
            langsung
          </h2>
          <p  data-aos="fade-up" className='article_floor5'>
          Dapatkan dukungan dari pendukung, jual voucher game, e-book, tiket webinar, dan barang digital lainnya dengan mudah.
          </p>
         
        </section>
        
          
      </section>
    
       
    )
  }

export default Page5;