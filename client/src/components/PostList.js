import React, { useEffect } from 'react'
import PostItem from './PostItem'
import "./../styles/Post.css";
import {useDispatch} from "react-redux";

export default function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "GET_ALL_POSTS_SAGA"});
  }, [dispatch]);

  return (
    <section className="post-section">
      <div className="post-list">
        <PostItem/>
      </div>
    </section>

  )
}
