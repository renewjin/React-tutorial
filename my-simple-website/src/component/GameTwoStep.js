import React, {useState} from "react";

const GameTwoStep = () => {
    const [guess, setGuess] = useState(''); // 사용자 예측입력값
    const [message, setMessage] = useState(''); // 전달할 메시지(맞췃을때 틀렸을때)
    const [number, setNumber] = useState(Math.floor(Math.random()*100) +1); // 맞춰야할 랜덤숫자
    const [attempts, setAttempts] = useState(0); // 시도횟수 초기 0
    
    const handelChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => { // 예상값 제출할때
        e.preventDefault(); // 폼 제출될때마다 맞춰야할 값 변경 안되게

        const userGuess = parseInt(guess, 10);

        setAttempts(attempts + 1); // 시도횟수 증가

        if(userGuess === number) {
            setMessage('축하합니다. 맞추셨습니다.');
            setNumber(Math.floor(Math.random()*100) +1);
            setAttempts(0);
            setGuess('');
        } else if (userGuess > number) {
            setMessage('숫자가 너무 큽니다.!');
        } else {
            setMessage('숫자가 너무 작습니다.!');
        }

    }

    return (
        <div>
            <h1>스무고개2</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={guess}
                    onChange={handelChange}
                    placeholder="1에서 100 사이의 숫자 입력하기"
                />
                <button>추측하기</button>
            </form>
            <p>{message}</p>
            
        </div>
    )

}

export default GameTwoStep;