import React, { FunctionComponent } from 'react';
import useUsers from '../../hooks/useUsers';
import { Link } from 'react-router-dom'

const Users: FunctionComponent = () => {
    const [users] = useUsers();

    return (
        <>
            {
                users.length !== 0 && (
                    users.map((user) =>(
                        <div key={user.id} style={ {marginTop: 10} } className="card">
                        <Link to={'../user/'+user.id} className="card-header">
                            @{user.username}
                        </Link>
                        <div className="card-body">
                          <h5 className="card-title">
                            {user.name}
                          </h5>
                          <Link to={'../user/'+user.id} className="btn btn-primary">View more</Link>
                        </div>
                      </div>
                    ))
                )
            }
        </>
    );
};

export default Users;
