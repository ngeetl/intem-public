import React, { useEffect } from 'react';
import './RentalService.css';
import NavTop from '../../../components/NAVTOP/NavTop';
import { NavLink } from 'react-router-dom';
import Contact from '../../../components/CONTACT/Contact';

const RentalService = () => {
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
        
            let sub = '렌탈';
            let img = '/navTop_maintenance_bg.jpg';

        return (
            <div>
                <NavTop title={title} sub={sub} img={img}>
                    <NavLink id='navTop' className='nav_sub' to='/rental/maintenance'>유지관리</NavLink>
                    <NavLink id='navTop' className='nav_sub' to='/rental/rentalservice'>렌탈</NavLink>
                </NavTop>
                <div className='maintenance container'>

                <div className='maintenance_section1'>
                    <div className='maintenance_section1_title'>신뢰할 수 있는 <b>공기청정기 렌탈</b>, 25년의 전문 노하우를 자랑하는 <b>인템</b></div>
                    <div className='maintenance_section1_speech_wrap'>
                        <div className='speech_wrap_1'>
                            <p>
                            인템은 <b>단기 렌탈부터 장기 렌탈</b>을<br/> 아우르는 
                            공기청정기 전문 업체로써<br/> <b>매월 방문, 필터 교체, 세척</b> 서비스를 제공하여 
                            렌탈 서비스의 원칙을 지키고 있습니다.
                            </p>
                        </div>
                        <div className='speech_wrap_2'>
                            <p>
                            또한 인템은 아이들이 다니는 <b>학교부터<br/> 
                            의료시설, 건설현장</b> 등 다양한 분야의 고객사를 두고 있으며,
                            고객들로부터 높은 신뢰를 얻고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='maintenance_section2' >
                    <h2>렌탈 서비스</h2>
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
                            <div><p><h5>STEP 2</h5>Check</p></div>
                            <h4>장비 조회</h4>
                        </div>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 3</h5>Paymen</p></div>
                            <h4>제품 결제</h4>
                        </div>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 4</h5>Discussion</p></div>
                            <h4>계약 체결</h4>

                        </div>
                        <div className='process_wrap'>
                            <div><p><h5>STEP 5</h5>Delivery</p></div>
                            <h4>배송 및 설치</h4>

                        </div>
                    </div>
                </div>

            </div>
            <Contact />
            </div>
        )
}

export default RentalService
