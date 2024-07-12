import React, {useState, useEffect} from 'react';
import axios from 'axios';

// ul li 태그 이용해서 useId id title completed

export const Axios_Ex2 = () => {
    //const [data, setData] = useState(null);
    const [data, setData] = useState([]);
    useEffect (()=> {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setData(res.data);
        })
        .catch( () => {
            alert("데이터를 가져오는데 실패했씁니다.");
        })
    }, []);

    return (
        <>
            <h1>버튼을 클릭하면, JSON 안에 작성된 내용 가져오기</h1>
            <ul>
                {data.map(comment => (
                    <li key={comment.postId}>
                        <strong>UserId: </strong>{comment.postId} <br />
                        <strong>ID: </strong>{comment.id} <br />
                        <strong>Name: </strong>{comment.name} <br />
                        <strong>Email: </strong>{comment.email} <br />
                        <strong>Body: </strong>{comment.body} <br />
                    </li>
                ))}
            </ul>
        </>
    )
}