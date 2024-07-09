import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import NavBar from './component/NavBar';
import TicTapToe from './component/TicTapToe';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
      <Route path='/tictaptoe' element={<TicTapToe />} />
      </Routes>
    </div>
  );
}

export default App;
