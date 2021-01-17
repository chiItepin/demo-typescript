import React, { FunctionComponent } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';
import usePost, { PostData } from '../../hooks/usePost';
import useUsers, { IUsers } from '../../hooks/useUsers';

interface IParamTypes {
    postId: string
}

const Post: FunctionComponent = () => {
    const { postId } = useParams<IParamTypes>();
    const post: PostData = usePost(postId);
    const [users] = useUsers();

    const getUser = (userId: number): IUsers => {
      if (users.length === 0) return {} as IUsers;
      const [user = {} as IUsers] = users.filter((user) => {
        return user.id === userId
      });
      return user as IUsers;
    };    

    return (
        <>
            {
                !post && (
                    <div style={ {marginTop: 20} } className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
            {
                post && (
                <div key={post.id} style={ {marginTop: 10} } className="card">
                    <Link to={'../user/'+post.userId} className="card-header">
                        {
                        (getUser(post.userId) !== undefined)
                            ? getUser(post.userId).name
                            : null
                        }
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">
                        {post.title}
                        </h5>
                        <p className="card-text">
                        {post.body}
                        </p>
                    </div>
                    <Comments postId={postId} />
                </div>
                )
            }
        </>
    );
};

export default Post;