import './../../assets/scss/page.scss'
import {Component, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import First2 from './../../assets/images/first2.png'
import Solution3 from './../../assets/images/payment.jpg' 
import Aos from 'aos';
import "aos/dist/aos.css";

const Page3 =()=>{
  useEffect(()=>{
  Aos.init({duration:2000});
  }, []);
 
    return(
      
    
      <section className='floor3'>
        <section data-aos="flip-left" className='image_floor3'>
            <img src={Solution3} className="image_floor3_1"/>
        </section>
        <section  className='floor3_text'>
          <header data-aos="fade-left" className='header_floor3'>
            <span className='span_header_floor3'>Pembayaran</span>
              <div className='line_header_floor3'></div>
          </header>
          <h2 data-aos="fade-up" className='sub_floor3'> Terima
            <span className='span_sub_floor3'> pebayaran</span>,
            langsung
          </h2>
          <p data-aos="fade-up" className='article_floor3'>
          Dapatkan dukungan dari pendukung, jual voucher game, e-book, tiket webinar, dan barang digital lainnya dengan mudah.
          </p>
         
        </section>
        
          
      </section>
    
       
    )
  }

export default Page3;