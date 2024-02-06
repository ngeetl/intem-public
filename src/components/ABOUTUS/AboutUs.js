import React, { useEffect, useRef, useState } from 'react'
import './AboutUs.css'

const AboutUs = () => {
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
  //   if(window.scrollY > 250) {
  //     setAnimation(true);
  //   } else {
  //     setAnimation(false);
  //   }
  // };

  return (
    <div className='container'>
      <div className='aboutUs' ref={ref}>
        <div className='aboutUs_wrap'>
          <div className={animation ? 'aboutUs_rectangle aboutUpRise' : 'aboutUs_rectangle'}></div>
          <div className={animation ? 'aboutUs_bg aboutSlide' : 'aboutUs_bg'}><div className='aboutUs_bg_img'></div></div>
        </div>
        <div className={animation ? 'aboutUs_content_wrap aboutUpRise' : 'aboutUs_content_wrap'}>
            <p className='title'>국내 최고의 <b>공기청정기 기업</b><br/>오랜 역사가 증명합니다</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="18" viewBox="0 0 98 18" fill="none">
              <path d="M97.6572 8.77326L89.0665 0.0440007L80.3372 8.6347L88.9279 17.364L97.6572 8.77326ZM0.988 9.49995L88.9852 10.2039L89.0092 7.20403L1.012 6.50005L0.988 9.49995Z" fill="#FFA800"/>
            </svg>
            <p className='sub'>
              1995년 저희 인템은 공기청정기 렌탈 분야에서
              새로운 시대를 열었습니다. 대한민국 최초로
              공기청정기 렌탈 사업을 시작하여 업계 최다
              거래처를 보유하고 있습니다. 이러한 경험과
              신뢰를 바탕으로 국내 시장을 선도하는 믿음직한
              기업임을 자부합니다.
            </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
