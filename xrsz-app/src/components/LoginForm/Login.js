import React, { useState } from 'react';
import { Form,Grid } from 'semantic-ui-react';

const Login = () => {
//add component level state
const [user, setUser] = useState({
    name: '',
    password: '',
})

const { name, password} = user;

//handl Change
const handleChange = (e, {name, value }) => setUser({ [name]: value });

//onSubmit 
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submit')
}

return (
    <Grid container >
            <Grid.Column width='8' >
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
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
                        label='Password'
                        placeholder='password'
                        name='password'
                        value={password}
                        type="password"
                        minLength={4}
                        onChange={handleChange}
                    />
                    <Form.Button
                        fluid
                        type="submit"
                    //     disabled={!name
                    //     || !password
                    //     || !confirmPassword
                    //     || !email
                    //   }
                    >Login</Form.Button>
                </Form>
            </Grid.Column>
    </Grid>
    

    )
}

export default Login;