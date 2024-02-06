import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/HEADER/Header';
import Footer from './components/FOOTER/Footer';
import routes from './routes';
import Chat from './components/FIXED/Chat';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { Suspense } from 'react';

function App() {

  return (
    <>
    <BrowserRouter>
    <HelmetProvider>
      <Helmet>
        <title>공기청정기 전문 기업 인템</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:url" content="https://intem.co.kr/" />
        <meta name="application-name" content="공기청정기 전문 기업 인템" />
        <meta name="msapplication-tooltip" content="공기청정기 전문 기업 인템" />
        <meta id="meta_og_title" property="og:title" content="공기청정기 전문 기업 인템" />
        <meta name="description" content="국내 최초의 공기청정기 렌탈 기업으로 대형, 산업용, 업소용, 체육관용, 다중이용시설용 공기청정기 판매 및 렌탈, 유지관리 전문 업체" />
        <meta property="og:description" content="국내 최초의 공기청정기 렌탈 기업으로 대형, 산업용, 업소용, 체육관용, 다중이용시설용 공기청정기 판매 및 렌탈, 유지관리 전문 업체" />
        <meta id="meta_og_image" property="og:image" content="/intem_logo.png" />
        <meta name="naver-site-verification" content="face2fefcc17988174d8d624539728e7a3bac256" />
        <meta name="keywords" content="공기청정기렌탈, 공기청정기판매, 대형공기청정기, 위생용품, 방향제,dlsxpa,intem,공기청정기단기렌탈,단기렌탈,삼성블루스카이렌탈,블루스카이렌탈,산업용공기청정기,공장용공기정청기,체육관용공기청정기,90평공기청정기,70평공기청정기,60평공기청정기,대형공기청정기,산업용공기청정기,업소용공기청정기,사무실공기청정기,다중이용시설공기청정기,병원공기청정기,대용량공기청정기,전기집진식공기청정기,전기집진기,전기집진필터,공기청정기단기렌탈,공기청정기단기대여,공기청정기대여,미세먼지,우트론,집진판필터,공기청정기필터,공기청정기관리"/>
      </Helmet>

      <div className='app'>
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
          <Header/>
            <Routes>
              {routes.map(route => 
                <Route exact key={route.path} path={route.path} element={route.component} />
              )}
            </Routes>
          <Chat />
          <Footer/> 
        </Suspense>
      </div>
    </HelmetProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
