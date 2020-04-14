import React from 'react'
import { Comment, CommentGroup, Card } from 'semantic-ui-react';


export const WorkoutItem = ({ workout }) => {
    const { id, name, time, type } = workout;

    return (
        <Card style={{ padding: 10, margin: 10 }}>
            <CommentGroup>
                <Comment>
                    <Comment.Avatar src="https://picsum.photos/200"/>
                    <Comment.Content>
                        <Comment.Author>
                            {name}
                        </Comment.Author>

                        <Comment.Metadata>{type}</Comment.Metadata>
                        <Comment.Action>Save</Comment.Action>
                    </Comment.Content>
                </Comment>
            </CommentGroup>
        </Card>
    )
};

// export default WorkoutItem;