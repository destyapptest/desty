import './../../assets/scss/page.scss'
import {Component } from 'react'
import {Link} from 'react-router-dom';
import Design from './../../assets/images/design.png'
import Banner1 from './../../assets/images/banner1.png'
import Banner2 from './../../assets/images/banner2.png'
import Banner3 from './../../assets/images/banner3.png'
import Banner4 from './../../assets/images/banner4.png'
import Banner5 from './../../assets/images/banner5.png'
import Banner6 from './../../assets/images/banner6.png'
import User1 from './../../assets/images/choky.png'
import User2 from './../../assets/images/dagelan.png'
import User3 from './../../assets/images/greyspolii.png'
import Arrow from './../../assets/images/arrow.png'
import Logo from './../../assets/images/logo.svg'


class Foot extends Component{
  render(){
    return(
      <div className='foot'>
        <div className='desty_foot'>
          <img src={Logo} className="image_foot"/>
          <div className='middle_foot'>
            <div className='left_content'>
              <div className='desty'>
                <h4 className='title'>DESTY</h4>
                <ul className='ul_item'>
                  <li className='li_item'>DESTY.PAGE</li>
                  <li className='li_item2'>DESTY.STORE</li>
                  <li className='li_item2'>DESTY.MENU</li>
                  <li className='li_item2'>DESTY.OMNI</li>
                </ul>
              </div>
              <div className='desty'>
                <h4 className='title'>PERUSAHAAN</h4>
                <ul className='ul_item'>
                  <li className='li_item'>DESTY.PAGE</li>
                  <li className='li_item2'>DESTY.STORE</li>
                  <li className='li_item2'>DESTY.MENU</li>
                  <li className='li_item2'>DESTY.OMNI</li>
                </ul>
              </div>
            </div>
            <div className='subscribe'>
              <h4 className='title'>LANGGANAN NEWSLETTER DESTY</h4>
              <div className='subs_art'>
                BERITA, ARTIKEL, DAN INFORMASI TERBARU DIKIRIM LANGSUNG KE INBOX-MU SETIAP MINGGU.
              </div>
              <div className='send_box'>
                <input placeholder='MASUKKAN EMAIL' className='input'/>
                <div className='button'>KIRIM</div>
              </div>
            </div>
          </div>
          <div className='bottom_foot'>
            <div className='left_bottom'>
              <div className='lang_box'>
                <span className='bottom_span'>INDONESIA</span>
                <svg className='arrow_down' xmlns="http://www.w3.org/2000/svg"/>
              </div>
              <div className='privacy'> KEBIJAKAN PRIVASI</div>
              <div className='term'> SYARAT & KETENTUAN</div>
            </div>
            <div className='copy'>Copyright © 2023 desty. All rights reserved.</div>
          </div>
        </div>
         
      </div>
    )
  }
}
export default Foot;