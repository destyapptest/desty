import './../../assets/scss/page.scss'
import {Component } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import First2 from './../../assets/images/first2.png'
import Solution1 from './../../assets/images/business.png' 
import SponsoredB from './../../assets/images/sponsor.png' 
import Page1 from './../solution/page1.js'
import Page2 from './../solution/page2.js'
import Page3 from './../solution/page3.js'
import Page4 from './../solution/page4.js'
import Page5 from './../solution/page5.js'
import Desain from './desain.js'
import Desty from './destyPage.js'
import End from './end.js'
import Foot from './foot.js'

class page extends Component{
  render(){
    return(
      <div className='page'>
        <div className='dekstop_page'>
          <div className='header_page'>
            <div className='first_header'>
              <img src={Header1}ss className='image_first_header'/>
              <nav className='nav'>
                <span className='nav_item'>Home</span>
                <span className='link_nav'>desty page</span>
                <span className='nav_item'>desty store</span>
                <span className='nav_item'>Market</span>
                <span className='nav_item'>Blog</span>
                <span className='nav_item'>karir</span>
                <span className='nav_item'>Pusat bantuan</span>
              </nav>
              <div className='language'>
                <div className='language_item1'>ID</div>
                <div className='language_item2'>EN</div>
              </div>
            </div>
            <div className='second_header'>
              <div className='header_content'>
                <img src={Header2} className="second_image"/>
                <div className='right_content'>
                  <span className='button1'>DAFTAR</span>
                  <span className='button2'>MASUK</span>
                </div>
              </div>
            </div>
          </div>
          <div className='first'>
            <div className='first_page'>
              <h1 className='title_first'>
                <span className='link_in_bio'>Link-in-bio</span> untuk
                <br/>
                semua penjual
              </h1>
              <div className='subfirst'>
                dengan fitur lengkap
                <strong className='strong'> GRATIS </strong>
                untuk kamu
              </div>
              <div className='first_button'> buat page gratis sekarang 👉</div>
              <img src={First2} className="image_first"/>
            </div>
          </div>
          <section className='solution'>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>
          </section>
          <Desain/>
          <Desty/>
          <End/>
          <Foot/>
        </div>
      </div>
    )
  }
}
export default page;