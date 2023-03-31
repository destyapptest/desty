import './../../assets/scss/page.scss'
import {Component, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Design from './../../assets/images/design.png'
import Analitic from './../../assets/images/analytics.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Desain =()=>{
  useEffect(()=>{
  Aos.init({duration:2000});
  }, []);
 
    return(
      
      <div className='desain'>
        <div className='bg1'></div>
        <div className='bg2'></div>
        <div className='bg3'></div>
        <div className='sec'>
          <section className='sec2'>
            <section   data-aos="flip-left" className='sec2_image'>
              <img src={Design} className='image'/>
            </section>
            <section className='sec3'>
              <header  data-aos="fade-left" className='title_sec3'>
                <span className='span_sec3'>Desain</span>
                <div className='line_sec3'></div>
              </header>
              <p  data-aos="fade-up" className='sub_sec3'>
                <span className='sub_sec3_color'> Desain </span>
                dengan imajinasi tanpa batas
              </p>
              <p  data-aos="fade-up" className='desc_sec3'>
                Geser-dan-lepas dengan mudah banyak pilihan font, background, gambar, dan lainnya.
              </p>
            </section>

          </section>
          <section className='next_sec'>
            <section  data-aos="flip-left" className='next_sec_image_wrap'>
              <img src={Analitic} className='next_sec_image'/>
            </section>
            <section className='next_sec3'>
              <header   data-aos="fade-left" className='title_next_sec3'>
                <span className='span_next_sec3'>Analitik</span>
                <div className='line_next_sec3'></div>
              </header>
              <p  data-aos="fade-up" className='sub_next_sec3'>
                <span className='sub_next_sec3_color'> Page </span>
                kamu, data kamu
              </p>
              <p  data-aos="fade-up" className='desc_next_sec3'>
                Kenali pelanggan kamu dengan baik. Cari tahu siapa mereka
                dan apa yang mereka suka dengan data analitik lengkap dan gratis kami.
              </p>
            </section>

          </section>
        </div>
      </div>
    )
  }

export default Desain;