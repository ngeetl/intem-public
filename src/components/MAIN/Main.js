import React, { useEffect, useRef, useState } from 'react'
import './Main.css'

const Main = () => {
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
        threshold: 0.1, // 10% 요소가 보일 때 애니메이션을 시작합니다.
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
  //   window.scrollTo(0, 0); // 스크롤을 가장 위로 이동
  //   setAnimation(true);
  //   return () => {
  //     setAnimation(false);
  //   }
  // }, [])

  return (
    <div className='main'>
      <div className={`main_bg ${animation ? 'scaleDown' : ''}`} ref={ref}>
          <div className='main_intro_wrap container'>
              <p className={`main_intro_title ${animation ? 'mainUpRise' : ''}`}>The First<br/>Rental Service</p>
              <p className={`main_intro_sub ${animation ? 'mainUpRise' : ''}`}>환경과 사람을 소중히 생각하는 기업 인템</p>
          </div>
      </div>
    </div>
  )
}

export default Main
