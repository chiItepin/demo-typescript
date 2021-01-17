import React, { FunctionComponent } from 'react';
import useComments, { IComment } from '../../hooks/useComments';

interface Props {
    postId: string
}

const Comments: FunctionComponent<Props> = ({
    postId
}: Props) => {
    const postComments: IComment[] = useComments(postId);

    return (
        <>
            {
                postComments.length !== 0 && (
                    <div className="comments-container">
                        {
                            postComments.map((comment) => (
                                <div key={comment.id} className="comment">
                                    <div className="email">
                                        {comment.email}
                                    </div>
                                    <div className="author">
                                        {comment.name}
                                    </div>                                    
                                    <p className="body">
                                        {comment.body}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
};

export default Comments;