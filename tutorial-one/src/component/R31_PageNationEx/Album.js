// Album
// https://jsonplaceholder.typicode.com/photos 이용해서 한 페이지에서 이미지 5개씩 보이기
import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const Album = () => {
    const [data, setDate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // 현재페이지 맨 처음 1번 페이지 설정
    //const [itemPerPage] = useState(5);
    const itemPerPage = 5; // 한 페이지당 5개씩 

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
            setDate(res.data);
        })
        .catch((err) => {
            console.error("사진 데이터 가져오는데 실패했습니다", err);
            //alert(err + "발생");
        })
    }, []);

    const lastItem = currentPage * itemPerPage;
    const firstItem = lastItem - itemPerPage;
    const albumList = data.slice(firstItem, lastItem);

    // 페이지 변경 처리
    const paginate = (pageNo) => setCurrentPage(pageNo);

    return (
        <div className='container'>
            <h1>리액트 페이지네이션 예제</h1>
            {albumList.map((data) => (
                <div key={data.id}>
                    <img src={data.thumbnailUrl} />
                </div>
            ))}
            
            {/*
            <ul className='list-group mb-4'>
                {albumList.map(album => (
                    <li key={album.id} className='list-group-item'>
                        <img src={album.thumbnailUrl} />
                        <p>{album.title}</p>
                    </li>
                ))}
            </ul>
            */}
            <Pagination
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}
export default Album;