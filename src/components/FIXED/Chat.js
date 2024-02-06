import React, { useEffect, useState } from 'react';
import './Chat.css';
import { Link, useNavigate } from 'react-router-dom';

const Chat = () => {
    const navigate = useNavigate();
    const [animation, setAnimation] = useState(false);

    let kakao = 'http://pf.kakao.com/_Jvnaj/chat';
    let naver = 'http://talk.naver.com/WC2TRV';
    const phoneNumber = '1688-7995'; 


    const chatClick = () => {
        setAnimation(prev => !prev);
    }

    const openChatInNewWindow = (url) => {
        const width = 'auto'; // 새 창의 가로 크기
        const height = 'auto'; // 새 창의 세로 크기
        const left = (window.innerWidth - width) / 2; // 가로 가운데 정렬
        const top = (window.innerHeight - height) / 2; // 세로 가운데 정렬

        window.open(url, 'Chat Window', `width=${width}, height=${height}, left=${left}, top=${top}`);
    }

    const scrollHandler = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight - 1100,
                behavior: 'smooth'
            })
        }, 100)
    }

  return (
    <div className='chat'>
        <div className={`chat_select ${animation ? 'slideLeft' : ''}`}>
            <Link><div className='kakao' onClick={() => openChatInNewWindow(kakao)}>카카오톡</div></Link>
            <Link><div className='naver' onClick={() => openChatInNewWindow(naver)}>네이버 톡톡</div></Link>
            <Link to={`tel:${phoneNumber}`}><div>1688 - 7995</div></Link>
            <div onClick={scrollHandler}>견적 작성하기</div>
        </div>
        <div 
            className='chat_img'
            onClick={chatClick}>
        </div>
    </div>
  )
}

export default Chat;

