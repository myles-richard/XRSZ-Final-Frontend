import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';



const Register = props => {
    //initialize auth context so can access state here
    const authContext = useContext(AuthContext)
    const alertContext = useContext(AlertContext)

    // take signUp method out of authContext 
    const { signUp, isAuthenticated, error, clearErrors } = authContext;
    const { setAlert } = alertContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/workout')
        }

        if(error === 'User already exist'){
            setAlert(error)
            clearErrors()
        };
        // eslint-disable-next-line
    },[error, isAuthenticated, props.history]);

    //add component level state
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })


    const { name, email, password, confirmPassword } = user;

    //handl Change
    // setUser object grabs the current vaule of user, get name attribute and set it to value
    const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value });


    // handleSubmit 
    const handleSubmit = (e) => {
        e.preventDefault();
        if( password !== confirmPassword) {
            setAlert('Passwords do not match')
        } else {
            let newUser = {
                name,
                email,
                password,
            }
            signUp(newUser)
        }
    }

    const onClick = () => {
        props.history.push("/")
    }

return (
    <div className="login-container">
        
            <div className="login-container login-container__form">
                    
                    
                        
    {/* <Grid container >
            <Grid.Column width='8' >
                <h1>Sign Up</h1> */}
                            <Form onSubmit={handleSubmit}>
                                <div >
                                    <h2 className="heading-secondary u-center-text">
                                        Register
                                    </h2>
                                </div>
                                <Form.Input required
                                    fluid
                                    label='Username'
                                    placeholder='name'
                                    id='form-input-name'
                                    name='name'
                                    value={name}
                                    onChange={handleChange}
                                />
                                <Form.Input required
                                    fluid
                                    label='Email'
                                    placeholder='email'
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
                                    <Form.Input required 
                                    fluid
                                    label='Confirm Password'
                                    placeholder='confirm password'
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    type="password"
                                    onChange={handleChange}
                                />
                                <div style={{paddingBottom: 10}}>
                                <Button
                                    fluid
                                    type="submit"
                                    className="button--blue"
                                >Create Account</Button>
                                </div>
                                <Button
                                    fluid
                                    type="back"
                                    className="button--blue"
                                    onClick={onClick}
                                >Back</Button>
                            </Form>
                </div>
        </div>
           
    

    )
}

export default Register;