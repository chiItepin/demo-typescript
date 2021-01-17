import { useState, useEffect } from 'react';
import axios from 'axios';

export interface PostData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const usePost = (postId: string): PostData => {

  const [post, setPost] = useState<PostData>();

  const getPost = () => {
    axios.get<PostData>('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(response => {
      setPost(response.data);
    })
    .catch(error => {
      console.error(error);
    })
  };

  useEffect(() => {
    getPost();
  }, []);

  return post as PostData
};

export default usePost;