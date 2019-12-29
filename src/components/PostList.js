import React, { useContext, useEffect } from 'react';
import PostCard from './PostCard';
import BlogContext from '../context/blogContext';
import {
    useRouteMatch,
} from 'react-router-dom';

const PostList = () => {
    const blogContext = useContext(BlogContext);
    let match = useRouteMatch();
    const { getPosts, blogPosts, loading } = blogContext;

    useEffect(() => {
        console.log('hello')
        getPosts();
    }, []);

    return (
        <div className='posts'>
            <div className="container">
                <h2>Posts</h2>
                {
                    !loading ? (
                        <div className="posts-grid-container">
                            {
                                blogPosts.map((post, i) => {
                                    return (
                                        <PostCard
                                            key={i}
                                            title={post.title}
                                            image={post.image}
                                            author={post.author}
                                            date={post.date}
                                            id={post.id} />
                                    )
                                })
                            }
                        </div>
                    ) : (
                            <div>Loading...</div>
                        )
                }
            </div>
        </div>
    )
}

export default PostList;