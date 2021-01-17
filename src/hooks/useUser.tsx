import { useState, useEffect } from 'react';
import axios from 'axios';

export interface IUser {
    id: number,
    name: string,
    username : string,
    email: string,
    address: Record<string, unknown>,
    phone: string,
    website: string,
    company: Record<string, unknown>,
}

const useUser = (userId: string): IUser => {

const [user, setUser] = useState<IUser | Record<string, unknown>>({});

  const getUser = () => {
    axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+userId)
    .then(response => {
      setUser(response.data);
    })
    .catch(error => {
      console.error(error);
    })
  };

  useEffect(() => {
    getUser();
  }, []);

  return user as IUser
};

export default useUser;