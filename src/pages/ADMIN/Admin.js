import React, { useEffect, useState } from 'react';
import './Admin.css';
import AdminModal from '../../components/MODAL/AdminModal';
import { collection, getDocs, orderBy, query, deleteDoc, doc, setDoc, updateDoc, where, limit } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


const Admin = () => {
    const [quotes, setQuotes] = useState([]);
    const auth = getAuth();
    const user = auth.currentUser;
    const [complete, setComplete] = useState(false);
    const [render, setRender] = useState('');
    const quotesLength = quotes.length;
    const navigate = useNavigate();
     

  useEffect(() => {
    const fetchQuotes = async () => {
      const q = query(collection(db, 'contact'), orderBy('createAt', 'desc'));
      const docSnapshot = await getDocs(q);
      const quoteData = [];

      const data = docSnapshot.docs.map((doc) => {
        const quoteData = doc.data();
        const quoteId = doc.id;

        return { id: quoteId, ...quoteData}
      })

      setQuotes(data);
    };

    fetchQuotes();
  }, [complete]);

  const deleteClick = async (id) => {
    const confirm = window.confirm('삭제하시겠습니까?');

    if(confirm) {
      try {
        await deleteDoc(doc(db, "contact", id));
        setQuotes(prev => prev.filter(quote => quote.id !== id))
      } catch(err) {
        alert('오류가 발생하였습니다.');
        console.log(err)
      } 
    }
  }

  const editClick = (id) => {
    navigate(`/admin/4902/${id}`);
  }


  return (
    <>
      <AdminModal rendering={(r) => setRender(r)}/>
      {user && 
        <div className="quote-container">
        <h2>견적서</h2>
        <table className="quote-table">
            <thead>
            {/* <tr>
                <th>옵션</th>
                <th>성함</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>지역</th>
                <th>모델</th>
                <th>평형</th>
                <th>렌탈 기간</th>
                <th>보유 모델</th>
                <th>보유 댓수</th>
                <th>날짜</th>
                <th>요청사항</th>
            </tr> */}
            <tr>
              <th>번호</th>
              <th>옵션</th>
              <th>이름</th>
              <th>연락처</th>
              <th>지역</th>
              <th className='request'>요청사항</th>
              <th>날짜</th>
              <th>처리상태</th>
              <th>EDIT</th>
            </tr>
            </thead>
            <tbody>
              {quotes.map((quote, index) => {
                if(quote.state !== '견적완료') {
                  return(
                      <tr 
                        key={index} 
                        >
                          <td>{quotesLength - index}</td>
                          <td>{quote.optionValue}</td>
                          <td>{quote.name}</td>
                          <td>{quote.phoneNum}</td>
                          <td>{quote.region}</td>
                          <td>{quote.request}</td>
                          <td>{quote.date.toLocaleString()} </td>
                          <td>{quote.state || '확인전'}</td>
                          <td>
                            <button className='editButton' onClick={() => editClick(quote.id)}>보기</button>
                            <button className='deleteButton' onClick={() => deleteClick(quote.id)}>삭제</button>
                          </td>    
                      </tr>
                  )
                }
              }
              )}
              {/* <tr>
                  <td>0</td>
                  <td>구매</td>
                  <td>홍길동</td>
                  <td>010-000-000</td>
                  <td>서울 oo구 oo동</td>
                  <td>테스트입니다.</td>
                  <td>2023/00/00</td>
                  <td>견적완료</td>
                  <td>
                    <button className='editButton'>보기</button>
                    <button className='deleteButton'>삭제</button>
                  </td>
              </tr> */}
              {quotes.map((quote, index) => {
                if(quote.state === '견적완료') {
                  return (
                       <tr 
                         key={index} 
                         className={quote.state === '견적완료' ? 'complete' : ''}>
                           <td>{quotesLength - index}</td>
                           <td>{quote.optionValue}</td>
                           <td>{quote.name}</td>
                           <td>{quote.phoneNum}</td>
                           <td>{quote.region}</td>
                           <td>{quote.request}</td>
                           <td>{quote.date.toLocaleString()} </td>
                           <td>{quote.state || '확인전'}</td>
                           <td>
                             <button className='editButton' onClick={() => editClick(quote.id)}>보기</button>
                             <button className='deleteButton' onClick={() => deleteClick(quote.id)}>삭제</button>
                           </td>    
                       </tr>
                   )
                }
              }
              )}
            </tbody>
        </table>
        </div>
      }

    </>
  )
}

export default Admin
