
import './App.css';
import Game from './component/Game.js';
import GameTwoStep from './component/GameTwoStep.js';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home.js';
import NavBar from './component/Layout/NavBar.js';
import Header from './component/Layout/Header.js';
import TodoList from './component/TodoList.js';
import TicTapToe from './component/TicTapToe/TicTapToe1.js';
import TicTapToesTwoStep from './component/TicTapToe/TicTapToeTwoStep.js';
import TypingTest from './component/TypingTest.js';
import MovieRating from './component/Movie/MovieGrade.js';
import Footer from './component/Layout/Footer.js';
import Aquarium from './component/Projects/Aquarium.js';


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
        <Route path='/aquariumProject' element={<Aquarium/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
