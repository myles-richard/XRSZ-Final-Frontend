import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import './_Login.scss';


const Login = (props) => {

const authContext = useContext(AuthContext)
// bring in alert beacause if its invalit we want to show alert 
const alertContext = useContext(AlertContext)

// take login method out of authContext 
const { login, error, isAuthenticated } = authContext;

const { setAlert } = alertContext;
// checking to see if authenticated and for the error of invalid credentials 
useEffect(() => {
    if(isAuthenticated) {
        props.history.push('/workout')
    }

    if (error === 'Invalid Credentials') {
        setAlert(error);
    }
    // eslint-disable-next-line
},[error, isAuthenticated, props.history]);


//add component level state
const [user, setUser] = useState({
    email: '',
    password: '',
})

const { email, password } = user;

//handl Change
const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value });

//onSubmit 
const handleSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === '') {
        setAlert('Please fill in all fields');
    } else {
        login({
            email,
            password
        });
    }
};

const onClick = () => {
    props.history.push("/")
}

return (
    <div className="login-container">
        <div >
            <h2 class="heading-secondary u-center-text">
                XRSZ
            </h2>
        </div>
            <div className="login-container login-container__form">
                    
                    <Form onSubmit={handleSubmit}>
                        <p>Email</p>
                        <Form.Input required
                            fluid
                            label='Email'
                            placeholder='Email'
                            id='form-input-email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                        <Form.Input required
                            fluid
                            label='Password'
                            placeholder='password'
                            name='password'
                            value={password}
                            type="password"
                            minLength={4}
                            onChange={handleChange}
                        />
                        <div style={{paddingBottom: 10}}>
                        <Button
                            fluid
                            className="button--blue"
                            size='medium'
                            type="submit"
                        >Login</Button>
                        </div>
                        <Button
                            fluid
                            className="button--blue"
                            type="back"
                            onClick={onClick}
                        >Back</Button>
                    </Form>
                
                    <div style={{paddingBottom: 10}}>
                        <Button
                            fluid
                            className="button--blue"
                            size='medium'
                            type="submit"
                        >Login</Button>
                        </div>
            </div> 
        </div>                                 
    

    )
}

export default Login;