import React, {useState, useEffect} from "react";
import './TicTapToe.css';

const 배열랜덤섞기 = (배열) => {
    return 배열.sort(() => Math.random() -0.5);
};
/* TicTapToesTwoStep 컴포넌트 시작 위치 */
const TicTapToesTwoStep = () => {
    const[numbers, setNumbers] = useState(배열랜덤섞기([...Array(20).keys()].map((n) => n + 1)));
    const[nextNumber, setNextNumber] = useState(1);
    const[message, setMessage] = useState("");
    const[timer, setTimer] = useState(10); // 처음 초기 시간 설정

    // useEffect( function 기능명  () => {어떤 기능이 동작해야하나요?  }, [어떤값이변경될때마다 function기능이 움직여야하나요? -> 생략가능]);
    // function 기능명 () = const 기능명 ()   매번 쓰기 번거로우니 생략
    // useEffect ( () => {}, []);
    // useEffect( () => {}, [numbers]); // numbers 숫자가 변경될 때마다 function 기능 발생
    /*
    useEffect(()=>{
        // 소비자가 검색하고 싶은 검색어가 들어올 때마다 일치하는 내용들 검색하기
        // 검색이 실시간으로 됨
        // 끝 으로 시작하는 단어를 보여주자
    }, [끝])
    */
    useEffect(()=> {
        console.log("TicTapToeTwoStep.js 가 실행되면");
        console.log("사용자 눈에 보이지 않게 자동 시작기능을 설정할 수 있음");
        console.log("F12에서 자동으로 콘솔로그가 찍히는지 확인하자");
    })

    useEffect(() => {
     let countdown;
     if(timer > 0) { // 남은 시간이 0보다 크다면 숫자를 점점 줄이겠다
        // 점점 시간이 줄어드는 효과를 만들어서 적용
        countdown = setTimeout(() => {
            setTimer(timer-1);
        }, 1000);

     } else if (timer === 0) { // 남은시간이 없다면
        alert("시간초과! 게임이 종료되었습니다.");
     }
    });

    const 숫자클릭하기 = (number) => {
        if(number === nextNumber) {
            if(number === 20) {
                setMessage("모든 숫자를 순서대로 클릭했습니다.");
            } else {
                setNextNumber(nextNumber + 1);
            }
        } else {
            setMessage("틀렸습니다. 처음부터 다시 시작하세요");
        }
    };

    const 재시작버튼 = () => {
        setNumbers(배열랜덤섞기([...Array(20).keys()].map((n) => n + 1)));
        setNextNumber(1);
        setMessage("");
        setTimer(10); // 재시작 버튼에도 timer를 5초로 재설정
    };

    return (
        <div className="tictaptoe-container">
            <h1>틱탭토2</h1>
            <div className="timer">남은시간 : {timer}초</div>
            <div className="tictaptoetwostep-grid">
                {numbers.map((number) => (
                    <button className="tictaptoe-button" key={number} onClick={() => 숫자클릭하기(number)}>
                        {number}
                    </button>
                ))}
            </div>
            <p>{message}</p>
            <button className="restart-button" onClick={재시작버튼}>게임재시작</button>
        </div>
    );
};

export default TicTapToesTwoStep;