import React, { FunctionComponent, useState, useEffect } from 'react';
import usePosts, { PostData } from '../hooks/usePosts';
import useUsers, { IUsers } from '../hooks/useUsers';
import { Link } from 'react-router-dom';

const Home: FunctionComponent = () => {
  const posts: PostData[] = usePosts();
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
      <div>
          {
            posts.length === 0 && (
                <div style={ {marginTop: 20} } className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
          }
          {
            posts.length !== 0 && users.length !== 0 && (
              posts.map((post) => (
                <div key={post.id} style={ {marginTop: 10} } className="card">
                  <Link to={'user/'+post.userId} className="card-header">
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
                    <Link to={'/post/'+post.id} className="btn btn-primary">View more</Link>
                  </div>
                </div>
              ))
            )
          }
      </div>
    </>
    )
};

export default Home;
