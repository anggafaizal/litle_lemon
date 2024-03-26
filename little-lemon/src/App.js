import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Newpage } from './components/newpage';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <>
      {/*<Counter />*/}
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='newpage' element={<Newpage />} />
        <Route path='Footer' element={<Footer />} />
      </Routes>


    </>
  );
}

export default App;
