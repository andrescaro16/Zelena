import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import './App.css';


function App() {
  return (
    <>
    
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<> <NavBar /> <Banner /> </>} />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
