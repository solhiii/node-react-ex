import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom'
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

function App() {
  return (

    <div className="App">
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>login</Link>
          </li>
          <li>
            <Link to='/register'>register</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path='/' component={Auth(LandingPage, null)}/>
          <Route exact path='/login'  component={Auth(LoginPage, false)}/>
          <Route exact path='/register'  component={Auth(RegisterPage, false)}/>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
