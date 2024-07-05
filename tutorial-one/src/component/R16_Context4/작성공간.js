import React, {useState, useContext} from "react";

import 유저정보전달 from "./유저정보모두저장.js";
//input 타입을 만들고 저장하는 버튼을 생성
const 작성하는공간 = () => {
    const {userList, setUserList} = useContext(유저정보전달);

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');

    const 유저추가 = () => {
        const user = {"inputName" : inputName, "inputPhone" : inputPhone};
        const newUserList = [...userList, user];
        setUserList(newUserList);

        // 멤버가 저장이 되면 input에 작성된 내용 모두 지우기
        setInputName(''); // 이름칸 모두 지우기
        setInputPhone(''); // 번호칸 모두 지우기
    }

    return (
        <div>
            <label htmlFor="inputName">이름</label>
            <input t
                ype="text" 
                id="inputName"
                onChange={(e) => {setInputName(e.target.value)}}
                value={inputName}
            />

            <br></br>
            <label htmlFor="inputPhone">전화번호</label>
            <input 
                type="text" 
                id="inputPhone"
                onChange={(e) => {setInputPhone(e.target.value)}}
                value={inputPhone}
            />
            <button onClick={유저추가}>멤버추가</button>
        </div>
    )
}

export default 작성하는공간;