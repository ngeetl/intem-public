import React, { useEffect, useRef, useState } from 'react'
import NavTop from '../../../components/NAVTOP/NavTop'
import { NavLink } from 'react-router-dom'
import './History.css'
import { Helmet } from 'react-helmet-async'

const History = () => {
  const [animation, setAnimation] = useState(false);
  const ref = useRef();

  useEffect(() => {  
    const observer = new IntersectionObserver(
      (entries) => {
        if(entries[0].isIntersecting) {
          setAnimation(true);
        } else {
          // setAnimation(false);
        }
      },
      { threshold: 0.1 }
    );

    if(ref.current) { observer.observe(ref.current) };
      
    return () => {
      if(ref.current) {
        observer.unobserve(ref.current)
      }
    };
  }, [])


  let title = (
    <>
      COMPANY <b>HISTORY</b>
    </>
  );

  let sub = '연혁';
  let img = '/navTop_bg_cut.jpg';

  return (
    <>
      <Helmet>
        <title>공기청정기 전문 기업 인템 오시는길</title>
        <meta id="meta_og_title" property="og:title" content="공기청정기 전문 기업 소개 인템" />
        <meta name="description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 소개 인템" />
        <meta property="og:description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 소개 인템" />
        <meta name="keywords" content="공기청정기, 렌탈, 구매, 판매, 기업소개" />
      </Helmet>
      <NavTop title={title} sub={sub} img={img}>
        <NavLink id='navTop' className='nav_sub' to='/intro/intro'>회사소개</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/intro/history'>연혁</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/intro/map'>오시는길</NavLink>
      </NavTop>
      <div className='history container' ref={ref}>
        <div className={`history_title ${animation ? 'aboutUpRise' : ''}`}>
          <h2>Our History</h2>
          <p>깨끗하고 건강한 환경을 위한 인템의 노력은 계속됩니다</p>
        </div>
        <div className={`history_wrap ${animation ? 'aboutUpRise' : ''}`}>
        <div className='history_content'>
            <div className='history_left'>
              <h3>2023</h3>
            </div>
            <div className='history_right'>
              <ul>
                {['단기렌탈 사업 확장', 
                '관공서, 학교, 사무실 유지관리 전담 부서 신설',
                '수도권 소재 초중고등학교 유지관리 계약 체결',
                '강북구청, 파주시청, 한국일보사, 대홍기획 유지관리 계약 체결',
                '(주)국보디자인 인테리어 현장 단기렌탈 전속',
                '(주)베텔 필터 국내외 제조관련 업무 협약',
                '정부지원 공기청정기 설치 지원(서울의류공제협동조합 등)'
                ].map((list, idx) => 
                    <li>
                      {list}
                    </li>
                )}
              </ul>
            </div>
          </div>
        <div className='history_content'>
            <div className='history_left'>
              <h3>2020</h3>
            </div>
            <div className='history_right'>
              <ul>
              {['CL-1806 공기청정기 출시', 
                '가정용 공기청정기 K-15 / K-17 출시',
                '공군전투비행단 납품',
                '롯데호텔 시그니엘 납품',
                '월성 원자력 발전소 납품',
                ].map((list, idx) => 
                    <li>
                      {list}
                    </li>
                )}
              </ul>
            </div>
          </div>
          <div className='history_content'>
            <div className='history_left'>
              <h3>2011</h3>
            </div>
            <div className='history_right'>
              <ul>
                <li>한주아로마산업과 기술 제휴</li>
                <li>아로마향 방향제 출시</li>
                <li>(주)일동생활건강 이온수기 관리 업무 대행</li>
                <li>한화리조트 전국망 탈취기 납품</li>
                <li>(주)오클레어와 OEM 계약 체결</li>
                <li>필아로마 업무 제휴</li>
              </ul>
            </div>
          </div>
          <div className='history_content'>
            <div className='history_left'>
              <h3>2006</h3>
            </div>
            <div className='history_right'>
              <ul>
                <li>(주)우트론전자와 OEM 계약 체결</li>
                <li>산업용 대형 공기청정기 WAC Series 출시</li>
                <li>(주)제일필터와 OEM 계약 체결</li>
                <li>Biothy Gmbh와 기술 제휴된 악취제거용 탈취겔 출시</li>
              </ul>
            </div>
          </div>
          <div className='history_content'>
            <div className='history_left'>
              <h3>2004</h3>
            </div>
            <div className='history_right'>
              <ul>
                <li>국내 최초 탈취정화기 IT-100 출시</li>
                <li>국내 최초 탈취정화기 중대형 NBA-200 출시</li>
                <li>핫라이브체인사업부 업무체결 산하 PC방 납품</li>
                <li>수도권 지역 공기청정기 렌탈 업무 개시</li>
              </ul>
            </div>
          </div>
          <div className='history_content'>
            <div className='history_left'>
              <h3>2001</h3>
            </div>
            <div className='history_right'>
              <ul>
                <li>(주)나노바이오티스와 기술 제휴</li>
                <li>시스템 및 IT 사업부 신설</li>
                <li>대규모 학원 체인 납품 업무 개시</li>
              </ul>
            </div>
          </div>
          <div className='history_content'>
            <div className='history_left'>
              <h3>1995</h3>
            </div>
            <div className='history_right'>
              <ul>
                <li>국내최초 공기청정기 렌탈사업부 신설</li>
                <li>일동제약환경사업부와 제휴 공기청정기</li>
                <li>ID-3000 모델 렌탈 개시</li>
                <li>롯데 호텔 b2b 체결 렌탈 개시</li>
                <li>국내 대학병원 및 로컬 병원 계약 개시</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default History
