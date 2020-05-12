import React from 'react';
import { Item } from 'semantic-ui-react';

export const Exercises = ({ exercise }) => {

    const { title, description, } = exercise;

    return (
        // <Item.Group divided>
            <Item >
                <Item.Image size='tiny' src='https://picsum.photos/200' />
                <Item.Content verticalAlign='middle' style={{ marginRight: 80 }}>
                    <Item.Header>{title}</Item.Header>
                    <Item.Description>{description}</Item.Description>
                </Item.Content>
                
            </Item>
        // </Item.Group>
    )
}


