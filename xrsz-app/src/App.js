import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Workout from './components/pages/Workout';
import Landing from './components/pages/Landing';
import Musclegroup from './components/pages/Musclegroup';
import { Container } from 'semantic-ui-react';
import './App.css';
import Register from './components/RegisterForm/Register';
import Login from './components/LoginForm/Login';


import WorkoutState from './context/workout/WorkoutState';
import AuthState from './context/auth/AuthState';
import setAuthHeader from './utils/setAuthHeader';

if(localStorage.token) { //if local storage has a token
  setAuthHeader(localStorage.token); //pass in the token
}

const App = () => {
  return (
    <AuthState>
      <WorkoutState>
        <Router>
        {/* <div className="App"> */}
          <NavBar />
          {/* <Container className="main"> */}
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/workout' component={Workout} />
              <Route exact path='/musclegroup' component={Musclegroup} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          {/* </Container> */}
        {/* </div> */}
        <Footer />  
        </Router>
      </WorkoutState>
    </AuthState>
  );
}

export default App;
