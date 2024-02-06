import React, { useEffect, useState } from 'react'
import NavTop from '../../../components/NAVTOP/NavTop'
import { NavLink } from 'react-router-dom'
import './Map.css'
import { Helmet } from 'react-helmet-async';

const { kakao } = window;


const Map = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.626874, 127.051325),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    
    var mapTypeControl = new kakao.maps.MapTypeControl();    
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    // 마커
    var markerPosition  = new kakao.maps.LatLng(37.626874, 127.051325); 
    var marker = new kakao.maps.Marker({
      map: map,
      position: markerPosition,
    });
    marker.setMap(map);


    const content = 
      `${showOverlay && `<div class="wrap">
         <div class="info"> 
                INTEM
        </div>    
      </div>`}`
    
      
    
    // 커스텀 오버레이
    var overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition()       
  });
  
  // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
  kakao.maps.event.addListener(marker, 'click', function() {
      overlay.setMap(map);
  });
  
  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
  function closeOverlay() {
      overlay.setMap(null);     
  }

  }, [])

  

  let title = (
    <>
      COMPANY <b>MAP</b>
    </>
  );

  let sub = '오시는 길';
  let img = '/navTop_bg_cut.jpg';
  

  return (
    <>
      <Helmet>
        <title>공기청정기 전문 기업 인템 오시는길</title>
      </Helmet>
      <NavTop title={title} sub={sub} img={img}>
        <NavLink id='navTop' className='nav_sub' to='/intro/intro'>회사소개</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/intro/history'>연혁</NavLink>
        <NavLink id='navTop' className='nav_sub' to='/intro/map'>오시는길</NavLink>
      </NavTop>
      <div className='map container'>
        <div className='map_title'>
          <h2>LOCATION</h2>
          <p>오시는 길</p>
        </div>
        <div className='map_wrap' id="map" ></div> 
        <div className='map_detail_wrap'>
          <div className='map_logo'>
            <img src='/intem_logo.png'/>
          </div>
          <div className='map_detail_right'>
            <div className='map_detail'>
              <span className="material-symbols-outlined pin_drop">pin_drop</span>
              <span>서울 노원구 월계로45길 28 월계테크노타운 8층 인템</span>
            </div>
            <div className='map_detail'>
              <span className="material-symbols-outlined">call</span>
              <span>1688-7995 </span>
            </div>
            <div className='map_detail'>
              <span className="material-symbols-outlined">mail</span>
              <span>ars99@naver.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className='map'>
        <div className='map_img'></div>
      </div>
    </>
  )
}

export default Map;
