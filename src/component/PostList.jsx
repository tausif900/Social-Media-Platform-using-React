import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMsg from './WelcomeMsg';

const PostList = () => {
    const { postList } = useContext(PostListData)
    const handleGetPostsClick = () => {

    }
    return (
        <div>
            {postList.length === 0 && <WelcomeMsg />}
            {postList.map((post) => (
                <Post key={post.id}
                    post={post} />
            ))}
        </div>
    )
}

export default PostList
