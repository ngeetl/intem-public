import React, { useEffect, useState } from 'react';
import './AdminModal.css';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence  } from "firebase/auth";

const AdminModal = ({ rendering }) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [render, setRender] = useState('');

    const auth = getAuth();
    const user = auth.currentUser;


    useEffect(() => {
        setPersistence(auth, browserSessionPersistence)
    }, []);

    const loginButtonClick = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, id, pw)
        .then(() => {
            alert(user + '로그인에 성공했습니다.');
            setRender(true);
            rendering(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
            console.log(errorCode, errorMessage);

        });
    }

  return (
     <div className='admin_modal' style={user ? { display: "none"} : { display: "block"} }>
        <div className='admin_modal_wrap'>
            <h3>관리자 로그인</h3>
            <form>
                <label>
                    <span>아&nbsp;이&nbsp;디&nbsp;&nbsp;:</span>
                    <input
                        type='text'
                        value={id}
                        onChange={(e) => setId(e.target.value)} />
                </label>
                <label>
                    <span>비밀번호&nbsp;:</span>
                    <input
                        type='password'
                        value={pw}
                        onChange={(e) => setPw(e.target.value)} />
                </label>
                <button onClick={loginButtonClick}>로그인</button>
            </form>
        </div>
        <div className='overlay'></div>
    </div>
  )
}

export default AdminModal
