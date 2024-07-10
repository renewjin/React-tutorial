import React, {useState} from "react";
import './TicTapToe.css';

const 배열랜덤섞기 = (배열) => {
    return 배열.sort(() => Math.random() -0.5);
};

const TicTapToesTwoStep = () => {
    const[numbers, setNumbers] = useState(배열랜덤섞기([...Array(20).keys()].map((n) => n + 1)));

    const[nextNumber, setNextNumber] = useState(1);
    const[message, setMessage] = useState("");

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
    };

    return (
        <div className="tictaptoe-container">
            <h1>틱탭토2</h1>
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