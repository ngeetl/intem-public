import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import './Contact.css'
import { Timestamp, addDoc, collection, connectFirestoreEmulator } from 'firebase/firestore';
import { db } from '../../firebase';
import ConfirmModal from '../MODAL/ConfirmModal';


const Contact = () => {
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [model, setModel] = useState('');
  const [size, setSize] = useState('');
  const [request, setRequest] = useState('');
  const [animation, setAnimation] = useState(false);
  const [optionValue, setOptionValue] = useState('렌탈')
  const [period, setPeriod] = useState('');
  const [holdingModel, setHoldingModel] = useState('');
  const [holdingNum, setHoldingNum] = useState('');
  const [nameErrForm, setNameErrForm] = useState(false);
  const [numErrForm, setNumErrForm] = useState(false);
  const [regionErrForm, setRegionErrForm] = useState(false);
  const currentTime = Timestamp.now();

  const ref = useRef();

  // 클라우드 메시징

  // 애니메이션
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0]는 animatedElemRef의 DOM 요소를 관찰하는 것입니다.
        if (entries[0].isIntersecting) {
          setAnimation(true);
        } else {
          // setAnimation(false);
        }
      },
      {
        threshold: 0.3, // 10% 요소가 보일 때 애니메이션을 시작합니다.
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [])

  // confirm modal
  const [showModal, setShowModal] = useState(false);

  const modalOn = useCallback(async() => {
    try {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 4000)
    }
    catch(err) {
      console.log(err);
    }
  }, [])

  // form
  const img = {
    blueSky: '/bluesky5000.png',
    air: '/wac7200.png',
    ecoAir: '/ecoair.png',
    perfume: '/perfume1.png'
  }

  // Date
  const currentDate = new Date();
  const _year = currentDate.getFullYear(); // 현재 연도
  const _month = currentDate.getMonth() + 1; // 현재 월 (0부터 시작하므로 +1 필요)
  const day = currentDate.getDate(); // 현재 날짜
  const hours = currentDate.getHours(); // 현재 시간 (24시간 형식)
  const minutes = currentDate.getMinutes(); // 현재 분
  const formattedDateTime = `${_year}/${_month}/${day} ${hours}:${minutes}`

  // 파이어스토어 addDoc 
  const buttonClick = async() => {
    if(name === '') {
      setNameErrForm(true);
    } else if(phoneNum === ''){
      setNumErrForm(true);
    } else if (region === ''){
      setRegionErrForm(true);
    }
     else {
      try {
        const docRef = await addDoc(collection(db, "contact"), {
          optionValue,
          name,
          phoneNum,
          email,
          region,
          model,
          size,
          request,
          period,
          holdingModel,
          holdingNum,
          date: formattedDateTime,
          createAt: currentTime
        });
        modalOn();
  
        setName('');
        setPhoneNum('');
        setEmail('');
        setModel('');
        setSize('');
        setRequest('');
        setHoldingModel('');
        setHoldingNum('');
        setPeriod('');
        setRegion('');
  
      } catch (e) {
        console.error("Error!! ", e);
      }
    }
  };


  const optionClick = (e) => {
      setOptionValue(e.target.value);
  }

  const addForm = useMemo(() => {
    if(optionValue === '렌탈') {
      return (
      <label>
        <span>약정 기간:</span>
        <select
          name="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="none">선택</option>
          <option value="1년">1년</option>
          <option value="2년">2년</option>
          <option value="3년">3년</option>
          <option value="4년">4년</option>
          <option value="5년">5년 이상</option>
        </select>
      </label>
      )
    }
    if(optionValue === '단기렌탈') {
      return (
        <label>
          <span>약정 기간:</span>
          <select
            name="period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="none">선택</option>
            <option value="1개월">1개월</option>
            <option value="2개월">2개월</option>
            <option value="3개월">3개월</option>
            <option value="4개월">4개월</option>
            <option value="5개월">5개월</option>
            <option value="6개월">6개월</option>
            <option value="7개월">7개월</option>
            <option value="8개월">8개월</option>
            <option value="9개월">9개월</option>
            <option value="10개월">10개월</option>
            <option value="11개월">11개월</option>
            <option value="12개월">12개월</option>
          </select>
        </label>
        )
    }
    if(optionValue === '유지관리') {
      return (
        <>
        <label>
          <span>보유한 모델:</span>
          <input
                type="text"
                placeholder="ex) LG퓨리케어(AS247DWE)"
                value={holdingModel}
                onChange={(e) => setHoldingModel(e.target.value)}
              />
        </label>
        <label>
        <span>보유한 댓수:</span>
        <input
              type="text"
              placeholder="ex) 각 방에 1대씩 총 8대"
              value={holdingNum}
              onChange={(e) => setHoldingNum(e.target.value)}
            />
        </label>
        </>
        )
    }
  }, [optionValue, holdingNum, holdingModel, period]) 
 

  return (
    <div ref={ref}>
    {/* <div className={`box ${animation ? 'opacityUp' : ''}`}></div> */}
    <div className='contact container'>
      {showModal && <ConfirmModal/>}
      

      <div className='contact_wrap'>
        <div className={`contact_title_wrap ${animation ? 'aboutUpRise' : ''}`}>
          <div className='contact_title'>CONTACT US</div>
          <div className='contact_sub'>견적 문의</div>
        </div>

        <div className={`contact_img_wrap ${animation ? 'aboutUpRise' : ''}`}>
          <div 
            className='contact_img floatUp'
            style={
              model === "none" || model === '' ? 
              { backgroundImage: `url(/bluesky3000.png)`} : 
              { backgroundImage: `url(${img[model]})`}
            }
            >
          </div>
        </div>
      </div>

        <div className={`contact_form_wrap ${animation ? 'aboutUpRise' : ''}`}>
          <form >
            <label>
              <span>견적 선택:</span>
              <select onChange={optionClick} className='contact_form_option'>
                <option value='렌탈'>렌탈 문의</option>
                <option value='단기렌탈'>단기렌탈 문의</option>
                <option value='유지관리'>유지관리 문의</option>
                <option value='구매'>구매 문의</option>
              </select>
            </label>
            <label>
              <span>성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;함:</span>
              <input
                type="text"
                placeholder= 'ex) 홍길동 주임' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={() => setNameErrForm(false)}
                className={nameErrForm ? 'errForm' : null}
              />
            </label>
            <label>
              <span>연&nbsp;&nbsp;락&nbsp;&nbsp;처:</span>
              <input
                type="text"
                placeholder="ex) 010 1234 1234"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                onKeyDown={() => setNumErrForm(false)}
                className={numErrForm ? 'errForm' : null}
              />
            </label>
            <label>
              <span>이&nbsp;&nbsp;메&nbsp;&nbsp;일:</span>
              <input
                type="text"
                placeholder="ex) abcde@naver.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>지&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;역:</span>
              <input
                type="text"
                placeholder="ex) 서울 강남구 역삼동 oo빌딩"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                onKeyDown={() => setRegionErrForm(false)}
                className={regionErrForm ? 'errForm' : null}
              />
            </label>
            {optionValue !== '유지관리' && <label>
              <span>모델 선택:</span>
              <select
                name="selectedModel"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="none">선택</option>
                <option value="air">인템 WAC시리즈</option>
                <option value="blueSky">삼성 블루스카이</option>
                <option value="ecoAir">인템 eco-Air</option>
                <option value="perfume">인템 방향제 디스펜서</option>
              </select>
            </label>}
            {optionValue !== '유지관리' && <label>
              <span>평형 선택:</span>
              <select
                name="selecteSize"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="선택">선택</option>
                <option value="10평형">10평형</option>
                <option value="20평형">20평형</option>
                <option value="30평형">30평형</option>
                <option value="40평형">40평형</option>
                <option value="50평형">50평형</option>
                <option value="60평형">60평형</option>
              </select>
            </label>}
            {addForm}
            <label>
              <span>문의 사항:</span>
              <textarea
                rows="5" 
                type="text"
                placeholder="문의 사항을 입력해 주세요."
                value={request}
                onChange={(e) => setRequest(e.target.value)}
              />
            </label>
            <div className='contact_form_bt_wrap'>
              <div 
                className='contact_from_bt_icon floatCross'
                onClick={buttonClick}
                title='견적 보내기'
                >
              </div>
            </div>
          </form>
        </div>

    </div>
    </div>
  )
}

export default Contact;
