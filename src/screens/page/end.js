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
import Gurl from './../../assets/images/mac.png'


class End extends Component{
  render(){
    return(
      <div className='container_end'>
        <div className='left_img'>
          <img src={Gurl} className='real_img'/>
        </div>
        <div className='right_content'>
          <div className='right_title'>
            Hubungi kami untuk segala yang kamu perlukan.
          </div>
          <div className='connect_content'>
            <div className='info'>
              <div className='info_title'>Pusat bantuan</div>
              <div className='content_info'>
                Temukan pertanyaan yang paling sering diajukan & panduan pengguna
              </div>
              <div className='link'>
                Lebih lanjut 
                <img src={Arrow} className="link_img"/>
              </div>
            </div>
          </div>
          <div className='connect_content'>
            <div className='info'>
              <div className='info_title'>Menemukan masalah?</div>
              <div className='content_info'>
                Laporkan masalah apapun dan timkami akan menjawab pertanyaan kamu
              </div>
              <div className='link'>
                Hubungi kami 
                <img src={Arrow} className="link_img"/>
              </div>
            </div>
          </div>
          <div className='connect_content'>
            <div className='info'>
              <div className='info_title'>Hubungi kami</div>
              <div className='content_info'>
                Hubungi  tim Customer Support kami melalui Whatsapp
              </div>
              <div className='link'>
                Chat kami 
                <img src={Arrow} className="link_img"/>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default End;