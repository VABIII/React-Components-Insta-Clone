import React, {useEffect, useState} from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
import dummyData from "./dummy-data";


import './App.css';

const App = () => {
  const [posts, set_posts] = useState(dummyData);

  const likePost = postId => {
      const updated_post = posts.map(post => {
          if (postId === post.id) {
            return  {...post, likes: post.likes + 1}
          }
          else {
              return post
          }
      })
      return set_posts(updated_post)
  };

  return (
    <div className='App'>
      <SearchBar/>
      <Posts posts={posts} likePost={likePost}/>
    </div>
  );
};

export default App;
