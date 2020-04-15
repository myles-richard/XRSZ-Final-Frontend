import React from 'react'
import { Comment, CommentGroup, Card, Icon } from 'semantic-ui-react';


export const WorkoutItem = ({ workout }) => {
    const { id, name, time, type } = workout;

    return (
        <Card style={{ padding: 10, margin: 10 }}>
            <CommentGroup>
                <Comment>
                    <Comment.Avatar src="https://picsum.photos/200"/>
                    <Comment.Content>
                        <Comment.Author>
                            {name} <Icon floated="right" name='plus'   />
                            
                        </Comment.Author>
                        <div>
                            <Comment.Metadata>{type}</Comment.Metadata>
                        </div>
                        <div>
                            <Comment.Metadata>Save</Comment.Metadata>
                        </div>
                    </Comment.Content>
                </Comment>
            </CommentGroup>
        </Card>
    )
};

// export default WorkoutItem;