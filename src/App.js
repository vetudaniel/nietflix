import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Navigation from './Navigation'
import TryFree from './Pages/TryFree'
import Movie from './Pages/Movie'


function App() {
  return (
      <Router>
        <div className="container">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login}/>
            <Route path="/getstarted" component={TryFree}/>
            <Route path="/login/:id" component={Movie}/>
          </Switch>
        </div>
      </Router>
   
    
  );
}

export default App;
