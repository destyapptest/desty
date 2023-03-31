import './../../assets/scss/page.scss'
import {Component, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import First2 from './../../assets/images/first2.png'
import Solution2 from './../../assets/images/content.png' 

import Aos from 'aos';
import "aos/dist/aos.css";

const Page2 =()=>{
  useEffect(()=>{
  Aos.init({duration:2000});
  }, []);
  
    return(
      
      <section className='floor2'>
        <section  className='floor2_text'>
          <header data-aos="fade-left" className='header_floor2'>
            <span className='span_header_floor2'>Konten</span>
              <div className='line_header_floor2'></div>
          </header>
          <h2 data-aos="fade-up" className='sub_floor2'> Berbagi
            <span className='span_sub_floor2'> konten</span>,
            tingkatkan penjualan
          </h2>
          <p data-aos="fade-up" className='article_floor2'>
            Impor produk online, tambahkan link tanpa batas, pasang gambar, simpan video & audio semua dalam satu halaman.
          </p>
         
        </section>
        
          <section data-aos="flip-left" className='image_floor2'>
            <img src={Solution2} className="image_floor2_1"/>
          </section>
      </section>
    
       
    )
  }

export default Page2;