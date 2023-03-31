import './../../assets/scss/page.scss'
import React, {Component, useEffect } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import First2 from './../../assets/images/first2.png'
import Solution1 from './../../assets/images/business.png' 
import SponsoredB from './../../assets/images/sponsor.png' 
import Aos from 'aos';
import "aos/dist/aos.css";

const Page1 =()=>{
  useEffect(()=>{
  Aos.init({duration:2000});
  }, []);
    return(
      
    
        <section className='wrap_solution square-wrapper'>
          <section data-aos="flip-left" className='wrap_solution1 hello0'>
            <img src={Solution1} className='image_solution'/>
          </section>
          <section className='wrap_solution2'>
            <div data-aos="fade-left" className='bisnis_solution2 hello'>
              <span className='span_bisnis'>Bisnis</span>
              <line className='line_bisnis'></line>
            </div>
            <h2  data-aos="fade-up" className='sub_bisnis hello2'>
              Satu link untuk hubungkan semua
              <span className='span_sub_bisnis'>bisnismu</span>
            </h2>
            <p data-aos="fade-up" className='paraf_bisnis hello2'>
              Hubungkan bisnis dan marketplace-mu dalam satu Page.
            </p>
            <div className='imglist'>
              <img src={SponsoredB} className='sponsored_list'/>
            </div>
          </section>
        </section>
    
       
    )
  }

export default Page1;