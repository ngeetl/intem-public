import React, { useEffect, useRef } from 'react';
import './Maintenance.css';
import NavTop from '../../../components/NAVTOP/NavTop';
import { NavLink } from 'react-router-dom';
import Contact from '../../../components/CONTACT/Contact';
import { Helmet } from 'react-helmet-async';

const Maintenance = () => {
    
    // const sectionRef = useRef<HTMLElement>(null)
    
    useEffect(() => {
        const options = {
            threshold: 0.7, // 섹션이 20% 이상 보일 때 감지
          };
          
        const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aboutUpRise'); // 섹션에 animate 클래스 추가
                }
            });
        }, options);
    
        const section1_title = document.querySelector('.maintenance_section1_title');
        const speech_wrap_1 = document.querySelector('.speech_wrap_1');
        const speech_wrap_2 = document.querySelector('.speech_wrap_2');
        const maintenance_section2_h2 = document.querySelector('.maintenance_section2 h2');
        const maintenance_service_wrap = document.querySelector('.maintenance_service_wrap');
        const maintenance_section3_h2 = document.querySelector('.maintenance_section3 h2');
        const process_wrap = document.querySelectorAll('.process_wrap');

        observer.observe(section1_title);
        observer.observe(speech_wrap_1);
        observer.observe(speech_wrap_2);
        observer.observe(maintenance_section2_h2);
        observer.observe(maintenance_service_wrap);
        observer.observe(maintenance_section3_h2);
        process_wrap.forEach(process => {
            observer.observe(process);
        })

          
        // Clean up the observer
          return () => {
            observer.disconnect();
          };
        }, []);
   
let title = (
    <>
        RENTAL <b>SERVICE</b>
    </>
    );

    let sub = '유지관리';
    let img = '/navTop_maintenance_bg.jpg';
    return (
        <>
            <Helmet>
                <title>공기청정기 전문 기업 인템 유지관리 렌탈 서비스</title>
                <meta id="meta_og_title" property="og:title" content="공기청정기 전문 기업 인템 유지관리 렌탈 서비스" />
                <meta name="description" content="공기청정기 렌탈, 유지관리, 구매 전문 기업 인템 제품 소개, 대형공기청정기, 산업용, 필터관리, 단기렌탈" />
                <meta property="og:description" content="공기청정기 렌탈, 유지관리, 구매 기업 인템 제품 소개, 대형공기청정기, 산업용, 필터관리, 단기렌탈" />
                <meta name="keywords" content="부산렌탈, 전국렌탈, 서울렌탈, 경기도렌탈, 유지관리 wac-7200, wac-7700, 30평, 40평, 60평, 70평, 90평, 공기청정기, 렌탈, 구매, 판매, 거래처, 납품실적, 주요실적, 기업, 관공서, b2b, 사례, case, 사무, 고용노동부 남부지청,서울교통공사, 서울시청, 한국석유관리원, kbs, 롯데건설, 구글 코리아, 
                    공장, 건설현장, 단기렌탈, SK케미칼공장, 구미LG공장, 태안화력발전소, 롯데건설현장, 봉제공장, 교회, 여성기업, 학교, 건국대학교, 교육시설, 안양초등학교, 성남야탑중학교, 서울과학기술대학교, 삼육보건대, 경남대극동연구소,
                    병원, 의료시설, 대학병원, 요양원, 고려대학교안암병원, 클루케어, 산업용 공기청정기, 대형공기청정기, 강원대학교병원, 대한병원협회, 대전웰니스병원, 연지곤지요양원, 필터교체, 삼성블루스카이
                    소모주기가 끝난 공기청정기의 필터를 6개월이상 교체하지 않거나 내부 세척을 진행하지 않으면 기능이 정상적으로 작동하지 않습니다.
                    인템에서는 다양한 공기청정기 모델과 번거롭고 복잡한 공기청정기 유지관리를 25년 간의 경험으로 전문적인 케어 서비스와 합리적인 가격으로 제공합니다." />
            </Helmet>
            <NavTop title={title} sub={sub} img={img}>
                <NavLink id='navTop' className='nav_sub' to='/rental/maintenance'>유지관리</NavLink>
                <NavLink id='navTop' className='nav_sub' to='/rental/rentalservice'>렌탈</NavLink>
            </NavTop>
            <div className='maintenance container'>

                <div className='maintenance_section1'>
                    <div className='maintenance_section1_title'>구매하신 <b>공기청정기</b>, 몇 년간 <b>방치</b>하고 계시진 않나요?</div>
                    <div className='maintenance_section1_speech_wrap'>
                        <div className='speech_wrap_1'>
                            <p>
                            소모주기가 끝난 공기청정기의 필터를<br/>   
                            <b>6개월</b> 이상 교체하지 않거나
                            내부 세척을 진행하지 않으면 
                            기능이 정상적으로 작동하지 않습니다.
                            </p>
                        </div>
                        <div className='speech_wrap_2'>
                            <p>
                            인템에서는 다양한 공기청정기 모델과<br/>  
                            번거롭고 복잡한 공기청정기 유지관리를<br/>
                            <b>25년 간의 경험</b>으로 전문적인 케어 서비스와 
                            합리적인 가격으로 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='maintenance_section2' >
                    <h2>유지관리 서비스</h2>
                    <div className='maintenance_service_wrap'>
                        <div className='service_img'></div>
                        <div className='service_img_info_wrap'>
                            <div className='service_img_info'>
                            <b>기기점검&nbsp;▶&nbsp;</b> 방문시 무상으로 기기 점검과 A/S가 이루어져 항상 최고의 성능이 유지될 수 있게 합니다.
                            </div>
                            <div className='service_img_info'>
                            <b>필터교체&nbsp;▶&nbsp;</b> 사용 장소의 오염도와 환경을 고려한 맞춤 필터 교체를 진행합니다. 
                            </div>
                            <div className='service_img_info'>
                            <b>기기세척&nbsp;▶&nbsp;</b> 인템만의 전문적인 클리닝 도구를 이용하여 내관과 외관을 꼼꼼하게 세척합니다.
                            </div>
                            <div className='service_img_info'>
                            <b>살균소독&nbsp;▶&nbsp;</b> 기기 주변의 코로나 바이러스 등 오염 물질들을 소독해 필터의 원활한 공기순환을 돕습니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='maintenance_section3' >
                    <h2>계약 진행 절차</h2>
                    <div className='maintenance_process_wrap'>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 1</h5>Consulting</p></div>
                            <h4>견적 접수</h4>
                        </div>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 2</h5>Visit</p></div>
                            <h4>출장 방문</h4>

                        </div>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 3</h5>Check</p></div>
                            <h4>공기청정기<br/> 점검 및 진단</h4>

                        </div>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 4</h5>Discussion</p></div>
                            <h4>유지관리<br/>진행 협의</h4>

                        </div>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 5</h5>Contract</p></div>
                            <h4>계약 체결</h4>

                        </div>
                    </div>
                </div>

            </div>
            <Contact />
        </>
    )
}

export default Maintenance
