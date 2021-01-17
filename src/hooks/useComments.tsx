import { useState, useEffect } from 'react';
import axios from 'axios';

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const useComments = (postId: string): IComment[] => {

const [postComments, setPostComments] = useState<IComment[]>([]);

  const getComments = () => {
    axios.get<IComment[]>('https://jsonplaceholder.typicode.com/post/'+postId+'/comments')
    .then(response => {
      setPostComments(response.data);
    })
    .catch(error => {
      console.error(error);
    })
  };

  useEffect(() => {
    getComments();
  }, []);

  return postComments as IComment[]
};

export default useComments;