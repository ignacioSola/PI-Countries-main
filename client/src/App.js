import './App.css';
import {Route , Routes} from 'react-router-dom';
import Home from '../src/components/home.jsx'
import LandingPage from './components/landingPage';
import Detail from './components/detail';
import CreateActivity from './components/createActivity';

function App() {
  return (
    <div className="App">
    <Routes >
     <Route path='/' element={<LandingPage/>}/>
     <Route exact path='/home' element={<Home/>}/>
     <Route exact path='/home/:id' element={<Detail/>}/>
     <Route exact path='/activity' element={<CreateActivity/>} />
    </Routes>
    </div>
  );
}

export default App;
