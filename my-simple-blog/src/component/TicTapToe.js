import React, {useEffect, useState } from 'react';
import './TicTapToe.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5); // 무작위로 섞음
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1))); // numbers -> 숫자가 랜덤으로 1~9까지 들어가있음
  const [nextNumber, setNextNumber] = useState(1); //1 부터시작
  const [message, setMessage] = useState(""); // 빈공간으로 놓기

  const handleNumberClick = (   a   ) => {
    if (  nextNumber ===  a ) {
      if ( nextNumber === 9) { 
        //맞추면 메세지내용 맞췄습니다.! 로 변경하기
        setMessage("맞췄습니다.!");
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
        setMessage("틀렸습니다.!");//틀렸을경우 메세지 보여주기
    }
  };

  // 재시작버튼 눌렸을 때 값 초기화
  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setNextNumber(1); //번호초기화 
    setMessage(""); //메세지 초기화
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTap</h1>
      <div className="grid">
        
        { numbers.map((n) => (
          <button key={ n } onClick={() => handleNumberClick(n)} className="number-button">
            { n }
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
