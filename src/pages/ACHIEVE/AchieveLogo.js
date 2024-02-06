import React from 'react';
import './AchieveLogo.css';
import { NavLink } from 'react-router-dom';
import NavTop from '../../components/NAVTOP/NavTop';
import { Helmet } from 'react-helmet-async';

const AchieveLogo = () => {
    let title = (
        <>
          COMPANY <b>ACHIEVE</b>
        </>
      );
    
      let sub = '납품 실적';
      let img = '/navTop_achieve_bg.jpg';

  return (
    <>
      <Helmet>
        <title>공기청정기 전문 기업 인템 거래처 납품 실적</title>
        <meta id="meta_og_title" property="og:title" content="공기청정기 전문 기업 인템 거래처 납품 실적" />
        <meta name="description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 인템 거래처 납품 실적" />
        <meta property="og:description" content="공기청정기 렌탈, 유지관리, 구매 기업 인템 거래처 납품 실적" />
        <meta name="keywords" content="공기청정기, 렌탈, 구매, 판매, 거래처, 납품실적, 주요실적, 기업, 관공서, b2b, 사례, case, 사무, 고용노동부 남부지청,서울교통공사, 서울시청, 한국석유관리원, kbs, 롯데건설, 구글 코리아, 
          공장, 건설현장, 단기렌탈, SK케미칼공장, 구미LG공장, 태안화력발전소, 롯데건설현장, 봉제공장, 교회, 여성기업, 학교, 건국대학교, 교육시설, 안양초등학교, 성남야탑중학교, 서울과학기술대학교, 삼육보건대, 경남대극동연구소,
          병원, 의료시설, 대학병원, 요양원, 고려대학교안암병원, 클루케어, 산업용 공기청정기, 대형공기청정기, 강원대학교병원, 대한병원협회, 대전웰니스병원, 연지곤지요양원, 필터교체" />
      </Helmet>
      <NavTop title={title} sub={sub} img={img}>
        <NavLink id='navTop' className='nav_sub' to='/achieve/achieve'>주요실적</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/achieve/achievelogo'>거래처</NavLink>
      </NavTop>
      <div className='achievelogo'>
        <div className='achievelogo_img'></div>
      </div>
    </>
  )
}

export default AchieveLogo
