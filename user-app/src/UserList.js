import {useState} from 'react';
import './App.css';

function UserList() {
  // 유저 초기 목록과 유저가 추가될 목록을 담을 변수명을 설정
  const [users, setUsers] = useState([]); 
  const [name, setName] = useState('');
  
  // 모두 초기값이 아무것도 없는 상태
  /* 
  1번
  useState(''); useState(""); useState(null);
  빈 배열인 상태 useState([]); = 목록이 비어있음
  초기 변수 users 가 아무런 유저 목록을 담고 있지 않기 때문에 users = []; 빈 배열로 설정
  */
  /*
  2번
  const 기능 = () => {
    return 리턴값; // return 구문이 필수가 아니고, 작성할 수 있다는 의미
  }

  const 기능 = () => (
    // 리턴 없음
  )

  ========================

  const 이사기능 = () => {
    const 인사메세지 = "안녕하세요.";
    
    return 인사메세지;
  }
  <p>{인사기능}<p>

  const 인사기능 = () => (
    alert("좋은아침입니다");  
  )
  */

  /*
  3번
   <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
   <button                         onClick ={( ) => 삭제버튼}>삭제하기</button>

   e = 특정 변화는 값이나 변화가 있는 것을 감지
   button의 경우 버튼을 클릭하기만 하고, 특정 값이 랜덤으로 설정되는 부분이 없기 때문에
   버튼에서는 e와 같은 변수명을 생략

   input의 경우 사용자가 어떤 값을 작성할지 컴퓨터가 모르기 때문에
          사용자가 어떤 값을 입력한다는 것을 이벤트로 받아드리고, 이벤트가 감지되면 value 값을 가져옴
  */

  const 추가버튼 = () => {
    setUsers([...users, name]); // ...기존유저목록 
    setName('');
  }

  // filter = 배열에서 결과가 true 값만 반환

  const 삭제버튼 = (idx) => {
    //                                users에 있는 유저 목록 user = 유저명, i = users에 있는 유저가 저장된 번호
    const 삭제후유저목록 = users.filter( (user, i)   =>   i !== idx);
    /*
    4번
    const 삭제후유저목록 = users.filter((user, i) => i !== idx);
    위 삭제 후 유저목록 기능은 삭제하기를 선택한 번호 1개만 삭제

    const 삭제후유저목록 = users.filter((user, i) => i === idx);
    삭제 후 유저목록 기능은 삭제하기를 선택한 번호 이외 모든 번호 지우기
    */
    /*
    users.filter( (user,  i                 )   =>   i                 !==                index);
    유저목록들    유저명, 각 유저가 가입한 번호    => 배열에 저장된 번호   같지않은 유저번호만 삭제하려고 누른 번호가 일치하지 않으면
    유저목록에 넣어주겠다
    */
    setUsers(삭제후유저목록); // 유저목록 교체하기
  }
  
  return (
    <div className="App">
      <h1>유저 리스트</h1>
      <h3>유저 추가하기</h3>
      <input type='text' 
              value={name} 
              onChange={(e) => setName(e.target.value)}
      />
      <button onClick={추가버튼}>추가하기</button>
      <h3>유저 리스트 목록보기</h3>

      {users.map( (user, idx) => (
        <li key={idx}>
          {idx} - {user}
          <button onClick={() => 삭제버튼(idx)}>삭제하기</button>
          {/* e가 없는 이유 : 이벤트가 발생하지 않기 때문에, value값 의 유무 */}
        </li>
      )   )}
    </div>
  );
}

export default UserList;
