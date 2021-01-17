import { useState, useEffect } from 'react';
import axios from 'axios';

export interface IUsers {
    id: number,
    name: string,
    username: string,
    address: Record<string, unknown>,
}

const useUsers = ():[IUsers[], boolean] => {
    const [users, setUsers] = useState<IUsers[]>([]);
    const [usersLoaded, setUsersLoaded] = useState<boolean>(false);

    const getUsers = () => {
        axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setUsers(response.data);
            setUsersLoaded(true);
        })
        .catch((error) => {
            console.error(error);
        })
    };

    useEffect(() => {
        getUsers();
    }, []);

    return [users, usersLoaded];
};

export default useUsers;