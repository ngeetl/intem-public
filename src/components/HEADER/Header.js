import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import LottieBuilding from '../LOTTIE/LottieBuilding';
import NavBar from '../NAVBAR/NavBar';


const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuClick = () => {
    setShowMenu(prev => !prev);
  }

  return (
    <div className='header'>
        <div className={navActive ? `nav_bar container_nav navActive ` : `nav_bar container_nav`}>
              <div className='nav_slide_bg'>
                  <div className='nav_slide_wrap'>
                      <div className='nav_slide_text_wrap'>
                          <p className='nav_slide_title'>공기청정기 기업 인템</p>
                          <p className='nav_slide_content'>
                            대한민국 공기청정기의 역사와 함께<br/>
                            깨끗하고 건강한 환경을 위해 
                          </p>
                      </div>
                      <div className='nav_slide_img'>
                          <LottieBuilding/>
                      </div>
                  </div>
              </div>
              <div className='nav_wrap'>
                  <div className='logo_wrap'>
                    <Link to='/' className='logo'></Link>
                    <div 
                      className='menu'
                      onClick={(e) => {
                        // e.stopPropagation();
                        menuClick();
                      }}>
                      <span className="menu material-symbols-outlined">
                        menu
                      </span>
                    </div>
                  </div>
                    <div className='flex_wrap'>
                        <ul className='nav_list_wrap'>
                          <li id='nav'>
                            <NavLink to='/intro/intro' className='nav'>회사소개</NavLink>
                            <ul id='nav_list' className='nav_list'>
                              <NavLink to='/intro/intro'>회사소개</NavLink>
                              <NavLink to='/intro/history'>연혁</NavLink>
                              <NavLink to='/intro/map'>오시는길</NavLink>
                            </ul>
                          </li>
                          <li id='nav'>
                            <NavLink to='/product/wac' className='nav'>제품소개</NavLink>
                            <ul id='nav_list' className='nav_list'>
                              <NavLink to='/product/wac'>산업용공청기</NavLink>
                              <NavLink to='/product/bluesky'>공기청정기</NavLink>
                              <NavLink to='/product/ecoair'>탈취기</NavLink>
                              <NavLink to='/product/Perfume'>방향제</NavLink>
                            </ul>
                          </li>
                          <li id='nav'>
                            <NavLink to='/achieve/achieve' className='nav'>납품실적</NavLink>
                            <ul id='nav_list' className='nav_list'>
                              <NavLink to='/achieve/achieve'>납품실적</NavLink>
                              <NavLink to='/achieve/achievelogo'>거래처</NavLink>
                            </ul>
                          </li>
                          <li id='nav'>
                            <NavLink to='/rental/maintenance' className='nav'>유지관리</NavLink>
                            <ul id='nav_list' className='nav_list'>
                              <NavLink to='/rental/maintenance'>유지관리</NavLink>
                              <NavLink to='/rental/rentalservice'>렌탈</NavLink>
                            </ul>
                          </li>
                          <li id='nav'>
                            <NavLink to='https://intem99.cafe24.com/product/list.html?cate_no=51' target='_blank' className='nav'>스토어</NavLink>
                            <ul id='nav_list' className='nav_list'>
                              <NavLink to='https://intem99.cafe24.com/product/list.html?cate_no=51' target='_blank'>스토어</NavLink>
                            </ul>
                          </li>
                        </ul>
                        
                        {/* <Link to='https://intem99.cafe24.com/product/list.html?cate_no=51' target='_blank' className='shop' >
                            <button className='shop_wrap'>
                                <div className='shop_text'>Shop</div>
                                <span className="material-symbols-outlined">
                                  arrow_right_alt
                                </span>
                            </button>
                        </Link> */}
                    </div>
              </div>
        </div>
        <NavBar menuClick={menuClick} showMenu={showMenu}/>
    </div>
  )
}

export default Header;
