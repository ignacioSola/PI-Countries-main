import './App.css';
import {Route , BrowserRouter} from 'react-router-dom';
import Home from '../src/components/home.jsx'
import LandingPage from './components/landingPage';
import Detail from './components/detail';
import CreateActivity from './components/createActivity';


function App() {
  return (
    <div className="App">
    <BrowserRouter >
     <Route exact path='/' component={LandingPage}/>
     <Route exact path='/home' component={Home}/>
     <Route exact path='/home/:id' component={Detail}/>
     <Route exact path='/activity' component={CreateActivity} />
    </BrowserRouter>
    </div>
  );
}

export default App;
