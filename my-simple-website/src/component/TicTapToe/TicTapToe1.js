import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import '../TicTapToe.css';
/*
./ -> 현재 폴더에ㅓ 가져온 파일 동일한 폴더 위치에서 다른 파일을 가져오는 것
../ -> 현재 폴더를 감싸고 잇는 상위폴더에서 다른 파일을 가지고 오는 것
useEffect(() => {
    // Tictaptoe.js가 실행되면 특정 기능 시작!
}, [])
*/
const 배열랜덤섞기 = (배열) => {
  //sort = 가지런히 정렬하다 할 때 정렬   랜덤으로 나온 값을 정렬
  // Math.random() - 0.5 : 배열을 랜덤으로 섞을 때 자주 사용 -0.5 ~ 0.5 사이 생성
  // -0.5 를 붙이지 않으면 Math.random() 는 0.0 ~ 0.99999999999999999999999999... 사이 값 반환
  //  0.5 범위 지정용
  return 배열.sort(() => Math.random() - 0.5);
};

const TicTapToe = () => {
  // numbers 1부터 9까지 숫자가 섞인 배열
  // ...Array(9) 숫자가 담길 그릇을 9개 만듬 숫자가 담길 그릇이 9개
  // .keys() 숫자를 가지고옴
  // 어떤 숫자를 가지고 오냐면  0 => 0 + 1     1 ~ 9 까지 생성
  // 1 ~ 9 까지 생성된 수를 배열랜덤섞기를 이용해서 숫자가 담긴 그릇을 섞는 것
  const [numbers, setNumbers] = useState(
    배열랜덤섞기([...Array(9).keys()].map((n) => n + 1)) // Array(9) -> 0 ~ 8 
  );

  // 사용자가 클릭해야하는 다음 숫자를 나타냄
  const [nextNumber, setNextNumber] = useState(1); // 사용자가 클릭해야하는 처음 수가 1이기 때문

  // 게임 상태에 따라 사용한테 보여줄 메세지를 표현
  const [message, setMessage] = useState(""); //처음에는 할 말이 없기 때문에 빈공간

  //const [isCorrect, setIsCorrect] = useState(false); // 정답확인 전이라 false

  const [timer, setTimer] = useState(10);

  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(()=>{
    let countdown;
    if(isTimerActive && timer > 0) {
      countdown = setTimeout(()=> {
        setTimer(timer-1);
      }, 1000);
    } else if (timer === 0) {
      alert("시간초과! 게임이 종료되었습니다.");
    }

  });

  const 숫자클릭하기 = (number) => {
    //만약에 현재 사용자가 클릭해야하는 숫자와 사용자가 클릭한 숫자가 서로 일치하는가 ?
    if (number === nextNumber) {
      if (number === 1) {
        setIsTimerActive(true);
      }
      if (number === 9) {
        setMessage("축하합니다. 모든 숫자를 순서대로 클릭했습니다.");
        //setIsCorrect(true);
        // 9 까지 왔으면 다음 숫자를 10 으로 만들어주기
        setNextNumber(10);
        setIsTimerActive(false);
      } else {
        setNextNumber(nextNumber + 1);
      }
    } else {
      setMessage("틀렸습니다. 처음부터 다시하세요.");
      setIsTimerActive(false);
    }
  };


  const 재시작버튼 = () => {
    setNumbers(배열랜덤섞기([...Array(9).keys()].map((n) => n + 1))); //다시 초기 숫자 세팅
    // 다음숫자 세팅 
    setNextNumber(1);
    // 메세지 세팅
    setMessage('');
    //setIsCorrect(false);
    setTimer(10);
  }
  return (
    <div className="tictaptoe-container">
      <h1>틱탭토</h1>
      <div className="timer">남은시간 {timer}초</div>
      <div className="tictaptoe-grid">
        {numbers.map((number) => (
          <button className="tictaptoe-button" key={number} onClick={() => 숫자클릭하기(number)}>
            {number}
          </button>
        ))}
      </div>
      <p>{message}</p>
      {/* 예를들어 수를 모두 맞출 경우에만 다음단계로 이동버튼 보여주기 */}
      {/* 
      {isCorrect ? 
                (<Link to="/ttt-twoStep"><button>다음단계로 이동</button></Link>) 
                : 
                (<button onClick={재시작버튼}>게임 재시작</button>)}
      */}
      <button className="restart-button" onClick={재시작버튼}>게임 재시작</button>
      {nextNumber > 9 && (<Link to="/ttt-twoStep"> <button className="restart-button">다음단계로 이동</button></Link>)}
      
      
    </div>
  );
};

export default TicTapToe;