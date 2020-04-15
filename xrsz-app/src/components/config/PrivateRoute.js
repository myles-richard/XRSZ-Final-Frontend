import React, { useContext } from 'react';
import  AuthContext  from '../../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    return (
        // pass in any exta props
        <Route { ...rest } render={props => !isAuthenticated ? (
            <Redirect to='/' />
        ) : (
            <Component {...props} />
            )
        }
    />
    )
}

export default PrivateRoute;