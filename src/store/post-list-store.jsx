import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});
const postListReducer = (currentPostList, action) => {
    return currentPostList;
}
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POSTLIST)
    const handleAddPost = () => {

    }
    const handleDeletePost = () => {

    }
    return <PostList.Provider value={
        {
            postList: postList,
            handleAddPost: handleAddPost,
            handleDeletePost: handleDeletePost
        }
    }>
        {children}
    </PostList.Provider >
};
const DEFAULT_POSTLIST = [{
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi Friends, I am going to Mumbai for my vacations.Hope to enjoy a lot.Peace out.',
    reactions: 25,
    userId: 'user-9',
    tags: ['vacation', 'Mumbai', 'Enjoying'],

},
{
    id: '2',
    title: 'Going to Umrah',
    body: 'Hi Friends, I am going to Saudi, A purest place in the world to perform Umrah. May Allah Call us again & again ,Ameenn...........',
    reactions: 100,
    userId: 'user-1',
    tags: ['Umrah', 'Mecca'],

}
]
export default PostListProvider;