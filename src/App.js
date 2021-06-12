
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Userlist from './components/Userlist';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/register" component={Register} />
          <Route path="/login"  component={Login} />
          <Route path="/userlist" component={Userlist} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
