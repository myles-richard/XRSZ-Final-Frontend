import React, { useContext, useEffect, useState } from 'react';
import { Card, Grid, Modal, Image,Button, Form } from 'semantic-ui-react';
import './Profile.css';
import AuthContext from '../../../context/auth/authContext';

const Profile = () => {

    const authContext = useContext(AuthContext);

    //take methods out of authcontext
    const { update, user, setCurrent, clearCurrent, current } = authContext;

     //add component level state
     const [newUser, setUser] = useState({
        email: '',
        name: '',
        })

    const { email, name } = user;

    useEffect(() => {
        if(current !== null) {
            setUser(current)
        } else {
            setUser({
                name: name,
                email: email
            })
        }
        // eslint-disable-next-line
    }, [authContext, current])

    //handle Change
    const handleChange = (e) => {
        console.log('hi');
        setUser({...newUser, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hi')
        update(newUser)
    }

    return (
        <>
            <Grid centered={true}>
                <Grid.Row>
                    <Grid.Column >
                        <Card centered={true}>
                            <Card.Content>
                                <Card.Header>{user.name}</Card.Header>
                                <Card.Meta>Male</Card.Meta>
                                <Card.Meta>6ft 185lb</Card.Meta>
                                <Card.Description>
                                    Email: {user.email}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                
                <Modal dimmer='blurring' trigger={<Button onClick={() => setCurrent(user)}>Show Modal</Button>}>
                    <Modal.Header>Edit Profile Info</Modal.Header>
                    <Modal.Content>
                        <Form onSubmit={handleSubmit}>
                        <Form.Input 
                            fluid
                            label='name'
                            id='form-input-name'
                            name='name'
                            value={newUser.name}
                            onChange={handleChange}
                        />
                        <Form.Input 
                            fluid
                            label='Email'
                            id='form-input-email'
                            name='email'
                            value={newUser.email}
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
                        >Update</Form.Button>
                        </Form>
                    </Modal.Content>
                </Modal>
        </>
    )
}

export default Profile;
