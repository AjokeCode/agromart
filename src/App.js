import './App.css';
import Hero from './hero-section/hero-section';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
    <Route exact path='/' element={<Hero/>}/>
    </Routes>
    </div>
  );
}

export default App;
