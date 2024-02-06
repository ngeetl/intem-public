import React, { useState, useEffect, useRef } from 'react';
import './Business.css';
import { Link } from 'react-router-dom';

const Business = () => {
  const [animation, setAnimation] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0]는 animatedElemRef의 DOM 요소를 관찰하는 것입니다.
        if (entries[0].isIntersecting) {
          setAnimation(true);
        } else {
          // setAnimation(false);
        }
      },
      {
        threshold: 0.3, // 10% 요소가 보일 때 애니메이션을 시작합니다.
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [])
  // useEffect(() => {
  //   window.addEventListener('scroll', onScrollHandler)
  //   return () => {
  //     window.removeEventListener('scroll', onScrollHandler)
  //   }
  // }, []);

  // const onScrollHandler = () => {
  //   if(window.scrollY > 700) {
  //     setAnimation(true);
  //   } else {
  //     setAnimation(false);
  //   }
  // };
  
  return (
    <div className='business' ref={ref}>
      <h2 className={animation ? 'aboutUpRise' : ''}>INTEM <span>BUSINESS</span></h2>
      <div className={`business_wrap ${animation ? 'aboutUpRise' : ''}`}>
        <div 
          className='business_info'
          style={{backgroundImage: `url(/business_wrap_1.jpg)`}}
          >
          <div className='business_contnent_wrap'>
            <h2>의료기관</h2>
            <p>
            병원 내에 첨단 공기청정기를 배치하여
            미세한 불순 입자를 제거해 보호 환경을
            조성하였으며, 환자와 의료진 모두에게 
            안전한 환경을 제공하고 있다.
            </p>
            <ul>
              <li>고려대학교병원</li>
              <li>요양원</li>
              <li>병원</li>
            </ul>
            <Link to='/achieve/achieve' className='readmore pluse'>
              READ MORE
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
        <div 
          className='business_info'
          style={{backgroundImage: `url(/business_wrap_2.jpg)`}}>
          <div className='business_contnent_wrap'>
          <h2>건설현장/발전소</h2>
            <p>
            작업 현장에서 발생하는 유해한 미세 물질을 효과적으로 
            제거하기 위해 설치한 산업용 공기청정기로
            공기 중의 미세 먼지, 유해 화학 물질을 제거해
            작업 환경을 개선하였다
            </p>
            <ul>
              <li>태안화력발전소</li>
              <li>LG공장</li>
              <li>원자력발전소</li>
            </ul>
            <Link to='/achieve/achieve' className='readmore pluse'>
              READ MORE
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
        <div 
          className='business_info'
          style={{backgroundImage: `url(/business_wrap_3.jpg)`}}>
          <div className='business_contnent_wrap'>
          <h2>교육시설</h2>
            <p>
            초등 교육 시설부터 대학교까지 다양한 교육 시설에 
            공기청정기를 배치하여 학습 환경을 최적화하고, 
            학생들과 교직원 모두에게 안전하고 쾌적한 환경을 제공하고 있다.
            </p>
            <ul>
              <li>인하대학교</li>
              <li>도서관</li>
              <li>초등학교</li>
            </ul>
            <Link to='/achieve/achieve' className='readmore pluse'>
              READ MORE
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
        <div 
          className='business_info'
          style={{backgroundImage: `url(/business_wrap_4.jpg)`}}>
          <div className='business_contnent_wrap'>
          <h2>기업/관공서</h2>
            <p>
            수많은 기업과 관공서에서도 선택한 인템의 공기청정기는
            우수한 기술과 안전성을 통해 고객 여러분들께 신뢰를 제공합니다.
            </p>
            <ul>
              <li>삼성물산</li>
              <li>롯데호텔</li>
              <li>한화리조트</li>
            </ul>
            <Link to='/achieve/achieve' className='readmore pluse'>
              READ MORE
              <span className="material-symbols-outlined">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Business
