import React, { useContext, useEffect, useState } from 'react';
import { Card, Grid, Modal,Button, Form, Container, Image } from 'semantic-ui-react';
import './_profile.scss';
// import '../../../sass/base/_typography.scss';
import AuthContext from '../../../context/auth/authContext';
import Moment from 'react-moment';

const Profile = (props) => {

    const authContext = useContext(AuthContext);
    
    //take methods out of authcontext
    const { update, user, setCurrent, deleteUser, current } = authContext;

     //add component level state
     const [newUser, setUser] = useState({
        email: '',
        name: '',
        goals: ''
        })

    const { goals, email, name, _id } = user;

    useEffect(() => {
        if(current !== null) {
            setUser(current)
        } else {
            setUser({
                name: name,
                email: email,
                goals: goals
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
        <>
        <div className="profiles">
            <div class="bg-image">
                <Image class="bg-image__content" 
                    src={require('../../../images/barbells-on-gray-surface-669584.jpg')} />
            </div>
            <div className="profiles__card">
            
                                <Card className="profile" >
                                    <Card.Content>
                                        <Card.Header className="username">{user.name}</Card.Header>
                                        <Card.Meta>Email: {user.email}</Card.Meta>
                                        <Card.Meta>Joined: <Moment format='MM/DD/YYYY'>{user.date}</Moment></Card.Meta>
                                        <Card.Description>
                                        Goals: {user.goals}
                                        </Card.Description>
                                    </Card.Content>
                    

                                    <Modal closeIcon centered basic size='small' dimmer='blurring' trigger={<Button onClick={() => setCurrent(user)}>Edit Profile</Button>}>
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
                                                label='goals'
                                                id='form-input-goals'
                                                name='goals'
                                                value={newUser.goals}
                                                onChange={handleChange}
                                            />
                                            <Form.Button
                                                fluid
                                                type="submit"
                                                
                                            >Update</Form.Button>
                                            </Form>
                                        </Modal.Content>
                                    </Modal>
                                    <Button className="button--blue" onClick={onDelete} >Delete Profile</Button>
                                </Card>
                                
                        
                    
                                
                    
            </div>
            
        </div>
        <div class="u-left-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                Exercises
            </h2>
        </div>
        </>
    )
}

export default Profile;
