import React, {useState} from "react";
//외부에서 만든 Context 객체를 import 가져와 사용
import UserContext from "./UserContexts";
import Child from "./Childs";
//부모 컴포넌트 정의
const Parents = () => {
    // 상태변수 userList, setUserList 선언
    // userList 초기값 빈 배열 공간으로 만들어줄 것
    const [userList, setUserList] = useState([]);
    // userList = 유저리스트 = 처음엔 아무 유저도 없기 때문에 빈 목록
    // setUserList = 추가될 유저 리스트
    return(
        <UserContext.Provider value={{userList,setUserList}}>
            <Child />
            <div>
                {/* child에서 추가한 user 정보를 보여주는 공간 */}
                {/* userList 초기에 저장된 유저목록을 보여주는 것
                    추가되는 유저 리스트는 map에 담겨서 보여지게 됨
                    map = key, value (유저의 inputName, inputAge에 담김 값이 저장)
                    저장이 된 모든 값을 index = 번호를 매겨 순서대로 기록

                     const 유저 = {"name"              : inputName, "age" : inputAge};
                    0번 째 
                         inputName = "홍길동" = "name" 이라는 이름으로 홍길동 이름이 저장
                         inputAge  = 10      = "age" 이라는 이름으로 10 이라는 숫자가 저장 

                    1번 째 
                         inputName = "고길동" = "name" 이라는 이름으로 고길동 이름이 저장
                         inputAge  = 20      = "age" 이라는 이름으로 20 이라는 숫자가 저장
                */}
                {userList.map((유저, index)=> {
                    return(
                        /* Key 속성 : 배열 반복 출력 시 태그를 구분하는 key */
                        <ul key={index}>번
                            <li>index : {index} 번 쨰 유저</li>
                            <li>name : {유저.name}</li>
                            <li>age : {유저.age}</li>
                        </ul>
                    )
                })}
            </div>
        </UserContext.Provider>
    )
}
export default Parents;

/*
배열.map((요소, index) => {
    return (
        얻어온 값 확인하기
    )    
})

배열의 각 값을 순서대로 하나씩 얻어와 return에 전달
return에서는 하나씩 얻어온 값을 모두 모아서 새로운 배열을 최종적으로 반환

index는 자동으로 0부터 번호매김이 시작되는 수의 값이기 때문에 기존에 작성한 다른 코드와 연관이 없음

index 번호매김용
*/