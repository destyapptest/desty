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
import User4 from './../../assets/images/jiwagroup.png'
import User5 from './../../assets/images/lunahabit.png'


class desain extends Component{
  render(){
    return(
      <div className='desain_container'>
        <div className='swiperBox'>
          <h3 className='title_swiper'> Siapa yang pakai desty page?</h3>
          <div className='desty_page'>
            <div className='desty_wrap'>
              <div className='desty_slide'>
                <div className='imgbox'>
                  <img src={Banner1} className='img_in'/>
                </div>
                <p className='par_desty'>
                  <span className='span_par_desty'> Marketplace sellers</span>
                </p>
              </div>
              <div className='desty_slide'>
                <div className='imgbox'>
                  <img src={Banner2} className='img_in'/>
                </div>
                <p className='par_desty'>
                  <span className='span_par_desty'> Marketplace sellers</span>
                </p>
              </div>
              <div className='desty_slide'>
                <div className='imgbox'>
                  <img src={Banner3} className='img_in'/>
                </div>
                <p className='par_desty'>
                  <span className='span_par_desty'> Marketplace sellers</span>
                </p>
              </div>
              <div className='desty_slide'>
                <div className='imgbox'>
                  <img src={Banner4} className='img_in'/>
                </div>
                <p className='par_desty'>
                  <span className='span_par_desty'> Marketplace sellers</span>
                </p>
              </div>
              <div className='desty_slide'>
                <div className='imgbox'>
                  <img src={Banner5} className='img_in'/>
                </div>
                <p className='par_desty'>
                  <span className='span_par_desty'> Marketplace sellers</span>
                </p>
              </div>
              <div className='desty_slide'>
                <div className='imgbox'>
                  <img src={Banner6} className='img_in'/>
                </div>
                <p className='par_desty'>
                  <span className='span_par_desty'> Marketplace sellers</span>
                </p>
              </div>
              
            </div>
            <div className='slide_scrollbar'>
              <div className='trans_scroll'></div>
            </div>
          </div>
        </div>
        <div className='trusted'>
          <p className='trusted_title'>
            Dipercaya 300.000+ 
            <br/>
            pengguna aktif
            <img src={User1} className="image_user"/>
          </p>
          <div className='trusted_list'>
            <div className='trusted_info'>
              <img src={User5} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User4} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User3} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User2} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User1} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User3} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User2} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User5} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User4} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User2} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            
            <div className='trusted_info'>
              <img src={User1} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
            <div className='trusted_info'>
              <img src={User5} className="user_list"/>
              <h2 className='trusted_name'>desty.page/kopinako</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default desain;