import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Workout from './components/pages/Workout';
import Landing from './components/pages/Landing';
import Musclegroup from './components/pages/Musclegroup';
import Alerts from './components/layout/Alerts';
import './App.css';
import Register from './components/RegisterForm/Register';
import Login from './components/LoginForm/Login';
import selectedWorkout from './components/pages/selectedWorkout/selectedWorkout';
import PrivateRoute from './components/config/PrivateRoute';

import WorkoutState from './context/workout/WorkoutState';
import AuthState from './context/auth/AuthState';
// alert state and set alert action in any component we bring it into.
import AlertState from './context/alert/AlertState'
import setAuthHeader from './utils/setAuthHeader';
import Profile from './components/pages/profile/Profile';
// import { div } from 'semantic-ui-react';

if(localStorage.token) { //if local storage has a token
  setAuthHeader(localStorage.token); //pass in the token
}

const App = () => {
  return (
    <AuthState>
      <WorkoutState>
        <AlertState>
          <Router>
          {/* <div className="App"> */}
            <NavBar />
            
              <Alerts />
                <Switch>
                  <Route exact path='/' component={Landing} />
                  <PrivateRoute exact path='/workout' component={Workout} />
                  <PrivateRoute exact path='/musclegroup' component={Musclegroup} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/profile' component={Profile} />
                  <PrivateRoute exact path='/workouts' component={selectedWorkout} />
                </Switch>
            
          {/* </div> */}
          <Footer />  
          </Router>
        </AlertState>
      </WorkoutState>
    </AuthState>
  );
}

export default App;
