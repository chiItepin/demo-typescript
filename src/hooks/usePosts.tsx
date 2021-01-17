import { useState, useEffect } from 'react';
import axios from 'axios';

export interface PostData {
    userId: number,
    id: number,
    title: string,
    body: string
}

const usePosts = (): PostData[] => {

  const [posts, setPosts] = useState<PostData[]>([]);

  const getPosts = () => {
    axios.get<PostData[]>('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error(error);
    })
  };

  useEffect(() => {
    getPosts();
  }, []);

  return posts
};

export default usePosts;