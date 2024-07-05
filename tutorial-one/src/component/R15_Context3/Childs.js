import React, {useState,useContext} from "react";
// 사용할 외부 Context 객체 import
import UserContext from "./UserContexts";
// 자식 컴포넌트 정의
// 자식 컴포넌트 정의
const Child = () => {
    /* Context를 이용해서 제공받은 값을 가져오기 */

    //Context로 전달받은 객체
    // {"userList" : userList,
    //  "setUserList" : setUserList
    // }

    // 전달받은 값의 key 값을 변수명과 똑같이 작성해서 값이 알아서 들어갈 수 있도록 해줌
    const {userList, setUserList} = useContext(UserContext);

    /* 자식에서 컴포넌트 상태 변수 선언 */
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const 사용자추가하기 = () =>{
        //상태 변수값을 이용해서 user 객체 생성
        //const 유저 = {"부모에전달할변수명": 부모에전달할값};
        const   유저 = {"name"             : inputName, "age" : inputAge  };
        // userList 복사 = ...userList (기존 유저 리스트) + 유저 데이터 추가
        // 일상 대화에서 ...을 쓰면 많은 내용이 함축적으로 담겨있는 것처럼
        // ...기존유저리스트에는 모든 유저의리스트를 담아진 값을 복사해놓겠다.
        // ...변수명 = 변수명에 담긴 모든 값을 복사해놓겠다.
        const 새로운유저 = [...userList, 유저]; 
        //기존에 있는내용을 복제하고 복제한리스트에 새로운유저를 추가해서 덮어쓰기
        setUserList(새로운유저); //새로운 유저가 추가된 리스트로 변경해!
    }

    return (
        <div>
            <label htmlFor="inputId">이름</label>
            <input type="text"
                id = "inputId"
                onChange={ (e) => {setInputName(e.target.value)   }   }
                value={inputName}
            />
            <br></br>
            <label htmlFor="inputAge">나이</label>
            <input type="number"
                id = "inputAge"
                onChange={ (e) => {setInputAge(e.target.value)   }   }
                value={inputAge}
            />
            {/* onChange={ (e) => {setInputName(e.target.value)   }   }
                변경되는 값 설정 e = 이벤트 = 동작, 상태, 움직임이 발생   
                e(움직임이 발생).target(움직이발생한 목표).value(값이 무엇인지 가져옴)
                
                value={inputName} 
                   값={초기값(  =useState('')  )  } 
                
                움직임이 발생하면 value에 작성된 초기값은 감지된 값으로 변경이됨
            */}
            <button onClick={사용자추가하기}>추가버튼</button>
        </div>
    )

}
export default Child;