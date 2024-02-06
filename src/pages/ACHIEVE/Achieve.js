import React from 'react';
import './Achieve.css';
import NavTop from '../../components/NAVTOP/NavTop';
import { Link, NavLink } from 'react-router-dom';
import CaseViewer from '../../components/CASEVIEWER/CaseViewer';
import { Helmet } from 'react-helmet-async';

const Achieve = () => {
  let title = (
    <>
      COMPANY <b>ACHIEVE</b>
    </>
  );

  let sub = '납품 실적';
  let img = '/navTop_achieve_bg.jpg';

  // instance
  const instance = 
    [
      {
        previewImages: [
          '/case/기업관공서/관공서 (1).jpg',
          '/case/기업관공서/관공서 (5).jpg',
          '/case/기업관공서/관공서 (2).jpg',
          '/case/기업관공서/관공서 (6).jpg',
          '/case/기업관공서/관공서 (7).jpg',
        ],
        title: '관공서/공공시설',
        sub: '관공서 및 공공시설 등 납품 실적 사례',
        link: (
          <>
          <li><Link to='https://blog.naver.com/ars99/221653737694' target='_blank'>고용노동부 서울남부지청</Link></li>
          <li><Link to='https://blog.naver.com/ars99/221657737129' target='_blank'>서울교통공사</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221643467321' target='_blank'>서울시청</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/222480944287' target='_blank'>수원시청</Link> </li>  
          <li><Link to='https://blog.naver.com/ars99/222432304542' target='_blank'>경기도교육청</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/223026465955' target='_blank'>한국석유관리원</Link> </li>
          <li><Link to='https://blog.naver.com/ars99' target='_blank'>북한인권기록센타</Link> </li>
          </>
        )
      },
      {
        previewImages: [
          '/case/기업관공서/관공서 (99).jpg',
          '/case/기업관공서/관공서 (8).jpg',
          '/case/기업관공서/관공서 (9).jpg',
          '/case/기업관공서/관공서 (3).jpg',
          '/case/기업관공서/관공서 (4).jpg',
        ],
        title: '기업/오피스',
        sub: '기업 및 오피스 등 사무 시설 납품 실적 사례',
        link: (
          <>
          <li><Link to='https://blog.naver.com/ars99/223037222872' target='_blank'>한국금융안전</Link></li>
          <li><Link to='https://intem99.cafe24.com/board/free/read.html?no=412&board_no=1002&search=%ED%98%84%EB%8C%80&search_key=subject&search_date=all&page=1' target='_blank'>현대자동차</Link> </li>
          <li><Link to='https://intem99.cafe24.com/board/free/read.html?no=333&board_no=1002&search=%ED%95%98%EC%9D%B4%ED%8A%B8&search_key=subject&search_date=all&page=1' target='_blank'>하이트진로</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/222576529629' target='_blank'>KBS</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/223072538058' target='_blank'>롯데건설</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221645429413' target='_blank'>구글 코리아</Link> </li>  
          <li><Link to='https://intem99.cafe24.com/board/free/read.html?no=236&board_no=1002&search=%EC%97%94%EC%97%90%EC%9D%B4%EC%B9%98%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C&search_key=subject&search_date=all&page=1' target='_blank'>엔에이치투자증권</Link> </li>  
          </>
        )
      },
      {
        previewImages: [
          '/case/공장/공장 (1).jpg',
          '/case/공장/공장 (5).jpg',
          '/case/공장/공장 (4).jpg',
          '/case/공장/공장 (3).jpg',
          '/case/공장/공장 (2).jpg',
        ],
        title: '공장/건설현장',
        sub: '공장, 건설 현장 등 납품 사례',
        link: (
          <>
          <li><Link to='https://blog.naver.com/ars99/222077990575' target='_blank'>SK케미칼공장</Link></li>
          <li><Link to='https://blog.naver.com/ars99/221708616580' target='_blank'>구미LG공장</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221339854294' target='_blank'>태안화력발전소</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/223052104663' target='_blank'>롯데건설현장</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/223041291902' target='_blank'>대우건설현장</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/223098497865' target='_blank'>봉제공장</Link> </li>
          </>
        )
      },
      {
        previewImages: [
          '/case/학교/학교 (2).jpg',
          '/case/학교/학교 (1).jpg',
          '/case/학교/학교 (4).jpg',
          '/case/학교/학교 (5).jpg',
          '/case/학교/학교 (3).jpg',
        ],
        title: '교육시설',
        sub: '초등학교, 대학교 등 교육 시설 납품 사례',
        link: (
          <>
          <li><Link to='https://blog.naver.com/ars99/223199958994' target='_blank'>서울대학교</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/222979276769' target='_blank'>한양대학교</Link></li>
          <li><Link to='https://blog.naver.com/ars99/222529701885' target='_blank'>건국대학교</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/223039604641' target='_blank'>서울과학기술대학교</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221340628647' target='_blank'>경남대극동연구소</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/222700591764' target='_blank'>명지고등학교</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221758369781' target='_blank'>안양초등학교</Link></li>
    
          </>
        )
      }, 
      {
        previewImages: [
          '/case/병원/병원 (1).jpg',
          '/case/병원/병원 (2).jpg',
          '/case/병원/병원 (5).jpg',
          '/case/병원/병원 (4).jpg',
          '/case/병원/병원 (3).jpg',
        ],
        title: '의료시설',
        sub: '대학병원, 요양원 등 의료 시설 납품 사례',
        link: (
          <>
          <li><Link to='https://blog.naver.com/ars99/221644396931' target='_blank'>고려대학교안암병원</Link></li>
          <li><Link to='https://blog.naver.com/ars99/222438312083' target='_blank'>대한병원협회</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221340596404' target='_blank'>강원대학교병원</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221340548092' target='_blank'>대전웰니스병원</Link> </li>
          <li><Link to='https://blog.naver.com/ars99/221704325304' target='_blank'>연지곤지요양원 </Link> </li>
          </>
        )
      },
    ]  
  
  return (
    <>
      <Helmet>
        <title>공기청정기 전문 기업 인템 거래처 납품 실적</title>
        <meta id="meta_og_title" property="og:title" content="공기청정기 전문 기업 인템 거래처 납품 실적" />
        <meta name="description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 인템 거래처 납품 실적" />
        <meta property="og:description" content="공기청정기 렌탈, 유지관리, 구매 기업 인템 거래처 납품 실적" />
        <meta name="keywords" content="공기청정기, 렌탈, 구매, 판매, 거래처, 납품실적, 주요실적, 기업, 관공서, b2b, 사례, case, 사무, 고용노동부 남부지청,서울교통공사, 서울시청, 한국석유관리원, kbs, 롯데건설, 구글 코리아, 
          공장, 건설현장, 단기렌탈, SK케미칼공장, 구미LG공장, 태안화력발전소, 롯데건설현장, 봉제공장, 교회, 여성기업, 학교, 건국대학교, 교육시설, 안양초등학교, 성남야탑중학교, 서울과학기술대학교, 삼육보건대, 경남대극동연구소,
          병원, 의료시설, 대학병원, 요양원, 고려대학교안암병원, 클루케어, 산업용 공기청정기, 대형공기청정기, 강원대학교병원, 대한병원협회, 대전웰니스병원, 연지곤지요양원, 필터교체"></meta>
      </Helmet>
      <NavTop title={title} sub={sub} img={img}>
        <NavLink id='navTop' className='nav_sub' to='/achieve/achieve'>납품실적</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/achieve/achievelogo'>거래처</NavLink>
      </NavTop>
      <div className='mt-80 container achieve'>
        {instance.map(val => <CaseViewer instance={val}/>)}
        <Link to='https://intem99.cafe24.com/board/free/list.html?board_no=1002' target='_blank' className='readmore_ac' >
          <button className='readmore_ac_wrap'>
              <div className='readmore_ac_text'>설치사례 전체 보러가기</div>
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
          </button>
        </Link>
      </div>
    </>

  )
}

export default Achieve
