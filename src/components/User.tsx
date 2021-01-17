import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import useUser, { IUser } from '../hooks/useUser'

interface IParamTypes {
    userId: string
}

const User: FunctionComponent = () => {
    const { userId } = useParams<IParamTypes>();
    const user: IUser = useUser(userId);

    return (
        <>
            {
                !user.id && (
                    <div style={ {marginTop: 20} } className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
            {
                user.id && (
                <div key={user.id} style={ {marginTop: 10} } className="card">
                    <h5 className="card-header">
                        {user.name}
                    </h5>
                    <div className="card-body">
                        <h5 className="card-title">
                        {user.email}
                        </h5>
                        <p className="card-text">
                        {user.phone}
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Address: {user.address.street}
                            </li>
                            <li className="list-group-item">
                                Company: {user.company.name}
                            </li>
                            <li className="list-group-item">
                                @{user.username}
                            </li>
                            <li className="list-group-item">
                                Website: {user.website}
                            </li>                                                                                    
                        </ul>                        
                    </div>
                </div>
                )
            }
        </>
    );

};

export default User;