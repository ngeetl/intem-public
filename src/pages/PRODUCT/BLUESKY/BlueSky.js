import React from 'react';
import './BlueSky.css';
import { NavLink } from 'react-router-dom';
import NavTop from '../../../components/NAVTOP/NavTop';
import ImgViewer from '../../../components/IMGVIEWER/ImgViewer';
import Contact from '../../../components/CONTACT/Contact';
import { Helmet } from 'react-helmet-async';

const BlueSky = () => {
    let title = (
        <>
          PRODUCT <b>INFORMATION</b>
        </>
      );
    let sub = '제품 소개';
    let img = '/navTop_product_bg_1.jpg';
    
    return (
        <>
        <Helmet>
          <title>공기청정기 전문 기업 인템 제품 소개</title>
          <meta id="meta_og_title" property="og:title" content="공기청정기 전문 기업 인템 제품 소개 삼성블루스카이" />
          <meta name="description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 인템 제품 소개, 대형공기청정기, 산업용, 필터관리" />
          <meta property="og:description" content="공기청정기 렌탈, 유지관리, 구매 기업 인템 제품 소개, 대형공기청정기, 산업용, 필터관리" />
          <meta name="keywords" content="블루스카이3000, 블루스카이5000, 블루스카이7000, 블루스카이9000, 10평, 28평, 24평, 47평 공기청정기, 렌탈, 구매, 판매, 거래처, 납품실적, 주요실적, 기업, 관공서, b2b, 사례, case, 사무, 고용노동부 남부지청,서울교통공사, 서울시청, 한국석유관리원, kbs, 롯데건설, 구글 코리아, 
            공장, 건설현장, 단기렌탈, SK케미칼공장, 구미LG공장, 태안화력발전소, 롯데건설현장, 봉제공장, 교회, 여성기업, 학교, 건국대학교, 교육시설, 안양초등학교, 성남야탑중학교, 서울과학기술대학교, 삼육보건대, 경남대극동연구소,
            병원, 의료시설, 대학병원, 요양원, 고려대학교안암병원, 클루케어, 산업용 공기청정기, 대형공기청정기, 강원대학교병원, 대한병원협회, 대전웰니스병원, 연지곤지요양원, 필터교체, 삼성블루스카이" />
        </Helmet>
        <NavTop title={title} sub={sub} img={img}>
            <NavLink id='navTop' className='nav_sub' to='/product/wac'>산업용공기청정기</NavLink>
            <NavLink id='navTop' className='nav_sub' to='/product/bluesky'>공기청정기</NavLink>
            <NavLink id='navTop' className='nav_sub' to='/product/ecoair'>탈취기</NavLink>
            <NavLink id='navTop' className='nav_sub' to='/product/perfume'>방향제</NavLink>
        </NavTop>
        <div style={{marginTop: '70px'}}>
          <ImgViewer option='bluesky3000' name='삼성 블루스카이3000 (10평)'/>
          <ImgViewer option='bluesky5000' name='삼성 블루스카이5000 (18평)'/>
          <ImgViewer option='bluesky7000' name='삼성 블루스카이7000 (24평)'/>
          <ImgViewer option='bluesky9000' name='삼성 블루스카이9000 (47평)'/>
        </div>
        <div className='bluesky'>
            <div className='bluesky_img'></div>
        </div>
        <Contact />
        </>
      )
}

export default BlueSky
