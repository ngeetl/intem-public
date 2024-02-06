import React, { useEffect, useState } from 'react'
import NavTop from '../../../components/NAVTOP/NavTop'
import { NavLink } from 'react-router-dom'
import './Intro.css'
import { Helmet } from 'react-helmet-async'

const Intro = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let title = (
    <>
      COMPANY <b>INTRODUCTION</b>
    </>
  );
  let sub = '회사 소개';
  let img = '/navTop_bg_cut.jpg';

  
  return (
    <>
      <Helmet>
        <title>공기청정기 전문 기업 소개 인템</title>
        <meta id="meta_og_title" property="og:title" content="공기청정기 전문 기업 소개 인템" />
        <meta name="description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 소개 인템" />
        <meta property="og:description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 소개 인템" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta name="keywords" content="공기청정기, 렌탈, 구매, 판매, 기업소개" />
      </Helmet>
      <NavTop title={title} sub={sub} img={img}>
        <NavLink id='navTop' className='nav_sub' to='/intro/intro'>회사소개</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/intro/history'>연혁</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/intro/map'>오시는길</NavLink>
      </NavTop>
      <div className='intro container'>
        <div className='intro_wrap'>
          <p className={`intro_title ${animation ? 'aboutUpRise' : ''}`}>
            Environment And People
            <p>환경과 사람을 소중히 생각하는 기업</p>
          </p>
          <p className={`intro_sub ${animation ? 'aboutUpRise' : ''}`}>
            <p>
              저희 인템은 공기청정기 렌탈 분야에서 새로운 시대를 열었습니다. 
              대한민국 최초로 공기청정기 렌탈 사업을 시작하였으며, 
              인템만의 혁신적인 접근법으로 국내 시장을 선도하고 있습니다. 
            </p>
            <p>
              당사는 업계 가장 많은 거래처를 보유하고 있는 기업 중 하나입니다. 
              {/* 국내에서 가장 많은 거래처를 보유하고 있습니다.  */}
              이는 우리의 경험과 신뢰가 업계에서 얼마나 중요한 요소인지를 반영한 결과입니다. 
              {/* 더 많은 공간에서 깨끗하고 건강한 공기를 제공하고자 최선을 다하고 있습니다.  */}
            </p>
            <p>
              고객 여러분께서는 우리의 미래를 함께 만들어갈 중요한 역할을 하십니다. 
              우리는 고객에 대한 높은 책임감을 가지고 있으며, 
              공기청정기 렌탈 분야에서 신뢰할 수 있는 기업으로서 역할을 
              지속적으로 수행할 것을 약속드립니다.
            </p>
            <p className='sign'>
              인템 대표 <b>이재룡</b>
            </p>
          </p>
        </div>
        <div className='intro_img_wrap'>
          <div className={`intro_img ${animation ? 'aboutUpRise' : ''}`}></div>
        </div>
      </div>
    </>
  )
}

export default Intro
