import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import { log } from 'console';

const PostContainer = () => {
    const [limit, setLimit] = useState(10);
    const {data: posts, error, isLoading, refetch} =  postAPI.useFetchAllPostsQuery(limit)
    
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;