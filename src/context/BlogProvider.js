import React, { useReducer } from 'react';
import BlogContext from './blogContext';
import blogReducer from './blogReducer';

const BlogProvider = props => {
    const initialState = {
        blogPosts: [],
        currentBlogPost: null,
        loading: true
    };

    const [state, dispatch] = useReducer(blogReducer, initialState);

    // Get all Posts
    const getPosts = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch('/posts');
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_POSTS', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
    // Get Post by id
    const getPostById = async id => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await fetch(`/posts/${id}`);
            const data = await res.json();
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'SET_POST', payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <BlogContext.Provider
            value={{
                blogPosts: state.blogPosts,
                currentBlogPost: state.currentBlogPost,
                loading: state.loading,
                getPosts: getPosts,
                getPostById
            }}
        >
            {props.children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;
