import React, { useEffect, useState } from 'react';
import './ConfirmModal.css';
import LottieComplete from '../LOTTIE/LottieComplete';

const ConfirmModal = () => {


  return (
    <>
        <div className='confirm_modal'>
            <div className='confirm_modal_wrap'>
                <div className='confirm_modal_icon'><LottieComplete/></div>
                <div className='confirm_modal_content'>
                    견적 요청이 접수되었습니다!<br/>
                    빠른 시일 내에 친절한 상담 도와드리겠습니다.
                </div>
            </div>
        </div>
    </>
  )
}

export default ConfirmModal;

