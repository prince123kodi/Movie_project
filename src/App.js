import logo from './logo.svg';
import './App.css';
import Add from './container/Add';
import { Route, Routes } from 'react-router-dom';
import Ticket from './container/Ticket';
import Ditail from './container/Ditail';
import Book from './container/Book';
import Sit from './container/Sit';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Ticket/>}/>
      <Route  path="/book" element={<Add/>}/>
      <Route path='/ditail/:id' element={<Ditail/>}/>
      <Route path='/book1/:id' element={<Book/>}/>
      <Route path='/sit/:id' element={<Sit/>}/>
    </Routes>
  );
}

export default App;
