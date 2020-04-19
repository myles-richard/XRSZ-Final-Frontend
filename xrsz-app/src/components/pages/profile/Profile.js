import React, { useContext, useEffect, useState } from 'react';
import { Card, Grid, Modal,Button, Form, Container } from 'semantic-ui-react';
import './Profile.css';
import AuthContext from '../../../context/auth/authContext';

const Profile = (props) => {

    const authContext = useContext(AuthContext);

    //take methods out of authcontext
    const { update, user, setCurrent, deleteUser, current } = authContext;

     //add component level state
     const [newUser, setUser] = useState({
        email: '',
        name: '',
        height: ''
        })

    const { height, email, name, _id } = user;

    useEffect(() => {
        if(current !== null) {
            setUser(current)
        } else {
            setUser({
                name: name,
                email: email,
                height: height
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

    //delete
    const onDelete = () => {
        deleteUser(_id)
        props.history.push('/')
    }
    

    return (
        <Container>
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
                                    Joined: {user.date}
                                    height: {user.height}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
              
                        <Button onClick={onDelete} >Delete Profile</Button>

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
                                <Form.Input 
                                    fluid
                                    label='Height'
                                    id='form-input-height'
                                    name='height'
                                    value={newUser.height}
                                    onChange={handleChange}
                                />
                                <Form.Button
                                    fluid
                                    type="submit"
                                    
                                >Update</Form.Button>
                                </Form>
                            </Modal.Content>
                        </Modal>
                   
                </Grid.Row>
            </Grid>
                
                
        </Container>
    )
}

export default Profile;
