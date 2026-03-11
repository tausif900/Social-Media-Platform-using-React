import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
    const { postList, addAllPosts } = useContext(PostListData)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addAllPosts(data.posts)
                setLoading(false);
            });
    }, [])


    // const [dataFetched, setDataFetched] = useState(false);
    // if (!dataFetched) {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then(data => {
    //             addAllPosts(data.posts)
    //         });
    //     setDataFetched(true);
    // }
    // const handleGetPostsClick = () => {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then(data => { addAllPosts(data.posts) });
    // }
    return (
        <div>
            {loading && <LoadingSpinner />}
            {!loading && postList.length === 0 && <WelcomeMsg />}
            {!loading && postList.map((post) => (
                <Post key={post.id}
                    post={post} />
            ))}
        </div>
    )
}

export default PostList
