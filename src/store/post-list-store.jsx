import { createContext, useReducer } from "react";
import { SiPayloadcms } from "react-icons/si";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});
const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPostList]
    }
    return newPostList;
};
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        DEFAULT_POSTLIST,
    );
    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            }
        })
    };
    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            }
        })
    };
    return (
        <PostList.Provider
            value={{
                postList: postList,
                addPost: addPost,
                deletePost: deletePost,
            }}
        >
            {children}
        </PostList.Provider>
    );
};
const DEFAULT_POSTLIST = [
    {
        id: "1",
        title: "Going to Mumbai",
        body: "Hi Friends, I am going to Mumbai for my vacations.Hope to enjoy a lot.Peace out.",
        reactions: 25,
        userId: "user-9",
        tags: ["vacation", "Mumbai", "Enjoying"],
    },
    {
        id: "2",
        title: "Going to Umrah",
        body: "Hi Friends, I am going to Saudi, A purest place in the world to perform Umrah. May Allah Call us again & again ,Ameenn...........",
        reactions: 100,
        userId: "user-1",
        tags: ["Umrah", "Mecca"],
    },
];
export default PostListProvider;
