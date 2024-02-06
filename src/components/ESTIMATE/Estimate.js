import React, { useEffect, useState } from 'react';
import './Estimate.css';
import { collection, getDoc, orderBy, query, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const Estimate = () => {
    const [quote, setQuote] = useState([]);
    const [option, setOption] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchQuotes = async () => {
            const docRef = doc(db, "contact", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setQuote(docSnap.data());
                setOption(docSnap.data().state || '');
            } else {
                alert('데이터를 불러오지 못했습니다.')
            }
            } 

            fetchQuotes();
        }, []);

    const optionClick = async (e) => {
        const docRef = doc(db, 'contact', id);
        setDoc(docRef, { ...quote, state: e.target.value });    
        setOption(e.target.value);
    }
  return (
    <div className='estimate container'>
        <div className='estimate_head'>
            <Link to='/admin/4902'><button>← 전체 보기</button></Link>
            <select
                value={option} 
                onChange={e => optionClick(e)}>
                <option value='확인전'>확인전</option>
                <option value='견적중'>견적중</option>
                <option value='견적완료'>견적완료</option>
            </select>
        </div>
        <div className='estimate_wrap'>
            <div className='estimate_content_head'>
                <h3>{quote.optionValue} 견적서</h3>    
                <h3>{quote.date}</h3>    
            </div>
            <div className='estimate_content'>
                <h2>성함 :</h2>
                <p>{quote.name}</p>    
            </div>        
            <div className='estimate_content'>
                <h2>연락처 :</h2>
                <p>{quote.phoneNum}</p>    
            </div>        
            <div className='estimate_content'>
                <h2>이메일 :</h2>
                <p>{quote.email}</p>    
            </div>        
            <div className='estimate_content'>
                <h2>지역 :</h2>
                <p>{quote.region}</p>    
            </div>        
            <div className='estimate_content'>
                <h2>모델 :</h2>
                <p>{quote.model}</p>    
            </div>        
            <div className='estimate_content'>
                <h2>평형 :</h2>
                <p>{quote.size}</p>    
            </div>
            <div className='estimate_content'>
                <h2>렌탈 기간 :</h2>
                <p>{quote.period}</p>    
            </div>
            <div className='estimate_content'>
                <h2>보유 모델 :</h2>
                <p>{quote.holdingModel}</p>    
            </div>
            <div className='estimate_content'>
                <h2>보유 댓수 :</h2>
                <p>{quote.holdingNum}</p>    
            </div>
            <div className='estimate_content'>
                <h2>요청사항 :</h2>
                <p>{quote.request}</p>    
            </div>
        </div>
    </div>
  )
}

export default Estimate
