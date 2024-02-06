import React, { useEffect, useRef, useState } from 'react'
import './Rental.css'

const Rental = () => {
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

  return (
    <div className='rental' ref={ref}>
      <div className='rental_bg square'></div>

        <div className={`rental_title_wrap ${animation ? 'aboutUpRise' : ''}`}>
          <h2 className='rental_title'>RENTAL SYSTEM</h2>
          <div className='rental_sub'>유지관리 기준</div>  
        </div>

        <div className={`container card_wrap ${animation ? 'aboutUpRise' : ''}`}>

          <div className='card'>
            <div className='card_pic_wrap'>
              <div className='pic'><img src='/rentalcare.jpg'/></div>
            </div>
            <div className='card_bottom_wrap'>
              <div className='card_title'>맞춤형 유지 관리</div>
              <div className='card_content'>
              기기 상태와 환경적 특성을 고려한<br/>
              기기 점검 및 필터 교체, 클리닝 
              서비스를<br/> 통해 언제나 최상의 
              컨디션을<br/> 유지합니다.
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='card_pic_wrap'>
              <div className='pic'><img src='/rentalcare_3.jpg'/></div>
            </div>
            <div className='card_bottom_wrap'>
              <div className='card_title'>최첨단 필터</div>
              <div className='card_content'>
              강력한 집진 효율을 보여주는<br/> 
              H13등급 헤파 필터를 취급하여<br/>  
              최고의 관리를 실현하는데<br/>  
              앞장서고 있습니다. 
            </div>
            </div>
          </div>

          <div className='card'>
            <div className='card_pic_wrap'>
              <div className='pic'><img src='/rentalcare_2.jpg'/></div>
            </div>
            <div className='card_bottom_wrap'>
              <div className='card_title'>고객 특화형 렌탈</div>
              <div className='card_content'>
              인템만의 특화된 렌탈 서비스는<br/> 
              가정용부터 산업용까지<br/>  
              폭넓은 제품 라인업을 제공하며,<br/>  
              필요에 따른 단기부터 장기 렌탈까지<br/>
              유연한 옵션을 제공합니다. 
              </div>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default Rental
