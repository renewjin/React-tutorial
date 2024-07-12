import logo from './logo.svg';
import './App.css';
import Game from './component/Game.js';
import GameTwoStep from './component/GameTwoStep.js';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home.js';
import NavBar from './component/NavBar.js';
import Header from './component/Header.js';
import TodoList from './component/TodoList.js';
import TicTapToe from './component/TicTapToe1.js';
import TicTapToesTwoStep from './component/TicTapToeTwoStep.js';
import TypingTest from './component/TypingTest.js';
import MovieRating from './component/Movie/MovieGrade.js';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes> {/* 링크 모음 */}
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/game-twoStep' element={<GameTwoStep />} />
        <Route path='/todoList' element={<TodoList/>} />
        <Route path='/tictaptoe' element={<TicTapToe/>} />
        <Route path='/ttt-twoStep' element={<TicTapToesTwoStep/>} />
        <Route path='/typingTest' element={<TypingTest/>} />
        <Route path='/movieRate' element={<MovieRating/>} />

      </Routes>

    </div>
  );
}

export default App;
