import React, { useState, useEffect, memo } from 'react'
import './NavTop.css'

const NavTop = ({ children, title, sub, img }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // 스크롤을 가장 위로 이동
    setAnimation(true);
    return () => {
      setAnimation(false);
    }
  }, [])

  return (
    <div className='navtop'>
        <div className='navtop_wrap'>
            <div 
              className={`navtop_bg ${animation ? 'scaleDown' : ''}`}
              style={{ backgroundImage : `url(${img})`}}>
                <div className={`navtop_intro_wrap container ${animation ? 'mainUpRise' : ''}`}>
                    <p className='navtop_intro_title'>{title}</p>
                    <p className='navtop_intro_sub'>{sub}</p>
                </div>
            </div>
        </div>
        <div className='nav_sub_bar_wrap'>
            <div className='nav_sub_bar'>
              {children}
            </div>
        </div>
    </div>
  )
}

export default memo(NavTop);
