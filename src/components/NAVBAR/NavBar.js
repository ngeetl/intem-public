import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = ({ menuClick, showMenu }) => {

  return (
    <div className={`navBar_app ${showMenu ? 'showMenu' : ''}`} onClick={menuClick}>
        <div className='logo_app'>
            <div className='logo_img_app'></div>
        </div>
        <ul className='nav_wrap_app'>
            <li>
                <NavLink to='/intro/intro' className='nav_app'>회사소개</NavLink>
                <ul id='nav_list' className='nav_list_app'>
                    <NavLink to='/intro/intro'>회사소개</NavLink>
                    <NavLink to='/intro/history'>연혁</NavLink>
                    <NavLink to='/intro/map'>오시는길</NavLink>
                </ul>
            </li>
            <li>
                <NavLink to='/product/wac' className='nav_app'>제품소개</NavLink>
                <ul id='nav_list' className='nav_list_app'>
                    <NavLink to='/product/wac'>산업용공청기</NavLink>
                    <NavLink to='/product/bluesky'>공기청정기</NavLink>
                    <NavLink to='/product/ecoair'>탈취기</NavLink>
                    <NavLink to='/product/Perfume'>방향제</NavLink>
                </ul>
            </li>
            <li>
                <NavLink id='nav_list' to='/achieve/achieve' className='nav_app'>납품실적</NavLink>
                <ul className='nav_list_app'>
                    <NavLink to='/achieve/achieve'>납품실적</NavLink>
                    <NavLink to='/achieve/achievelogo'>거래처</NavLink>
                </ul>
            </li>
            <li>
                <NavLink to='/rental/maintenance' className='nav_app'>유지관리</NavLink>
                <ul id='nav_list' className='nav_list_app'>
                    <NavLink to='/rental/maintenance'>유지관리</NavLink>
                    <NavLink to='/rental/rentalservice'>렌탈</NavLink>
                </ul>
            </li>
            <li>
                <NavLink to='https://intem99.cafe24.com/product/list.html?cate_no=51' target='_blank' className='nav_app'>스토어</NavLink>
                <ul id='nav_list' className='nav_list_app'>
                    <NavLink to='https://intem99.cafe24.com/product/list.html?cate_no=51' target='_blank'>스토어</NavLink>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
