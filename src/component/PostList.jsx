import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMsg from './WelcomeMsg';

const PostList = () => {
    const { postList, addAllPosts } = useContext(PostListData)
    const handleGetPostsClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => { addAllPosts(data.posts) });
    }
    return (
        <div>
            {postList.length === 0 && <WelcomeMsg onGetPostsClick={handleGetPostsClick} />}
            {postList.map((post) => (
                <Post key={post.id}
                    post={post} />
            ))}
        </div>
    )
}

export default PostList
