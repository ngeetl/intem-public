import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  // 사업자등록증 팝업창
  const openBizCommPop = () => {
    window.open(
      'http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2090498884',
      'bizCommPop',
      'width=750, height=950;'
    );
  };
  return (
    <footer className="footer">
      <div className="footer_wrap">
        <div className="footer-content">

          <div className="footer-section info">
            <h3>INTEM</h3>
            <p>법인명: 인템&nbsp;&nbsp;|&nbsp;&nbsp;대표자: 이재룡</p>
            <p>주소: 서울 노원구 월계로45길 28 월계테크노타운 8층 인템</p>
            <p>전화번호: 1688-7995&nbsp;&nbsp;|&nbsp;&nbsp;팩스번호: 02-6499-7995</p>
            <p>사업자 등록번호: 209-04-98884</p>
            <p>개인정보관리책임자: 이준용 주임 ars99@naver.com</p>
            <p>
              통신판매업 신고: 2009-서울노원-0122호
              <a href="#none" onClick={openBizCommPop}>[사업자정보확인]</a>
            </p>
          </div>
          <div className="footer-section service">
            <h3>고객센터</h3>
            <ul>
              <h2>1688 - 7995</h2>
              <p>평일 상담시간: 오전 9시 - 오후 6시</p>
              <p>점심시간: 오후 12시 - 1시</p>
              <p>휴무일 : 토, 일, 공휴일</p>
            </ul>
            <p className='copyright'>Copyright © 인템 All rights reserved</p>
          </div>
          <div className="footer-section site">
            <h3>바로가기</h3>
            <ul>
              <li>
                <Link to='https://intem99.cafe24.com/' target='_blank'>
                  <div className='icon'><img src='/intem.png'/></div>
                  <h4>인템몰</h4>
                </Link>
              </li>
              <li>
                <Link to='https://smartstore.naver.com/intem' target='_blank'>
                  <div className='icon'><img src='/naver.png'/></div>
                  <h4>스마트스토어</h4>
                </Link>
              </li>
              <li>
                <Link to='https://blog.naver.com/ars99' target='_blank'>
                  <div className='icon'><img src='/blog.png'/></div>
                  <h4>블로그</h4>
                </Link>
              </li>              
              {/* <li>
                <Link to='' target='_blank'>
                  <div className='icon'><img src='/action.png'/></div>
                  <h4>옥션</h4>
                </Link>
              </li>              
              <li>
                <Link to='' target='_blank'>
                  <div className='icon'><img src='/gmarket.png'/></div>
                  <h4>지마켓</h4>
                </Link>
              </li> */}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
