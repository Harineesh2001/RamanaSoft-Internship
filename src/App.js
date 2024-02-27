
import './App.css';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navj from './Components/Navj';
import Structure from './Components/Structure';
import Codepage from './Components/Codepage';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Navj/>}></Route>
      <Route  path='/hh' element={<Structure/>}></Route>
      <Route  path='/stru' element={<Codepage/>}></Route>
      
    
    </Routes>
  </Router>



  );
}

export default App;
