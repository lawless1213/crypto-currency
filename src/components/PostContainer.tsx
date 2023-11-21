import React, { useEffect, useState } from "react";
import { PostAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
	const [limit, setLimit] = useState(10);
	const {data: posts, error, isLoading} = PostAPI.useFetchAllPostsQuery(limit);

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>Error...</h1>}
			{posts && posts.map(post => 
				<PostItem key={post.id} post={post}/>
			)}
		</div>
	)
}

export default PostContainer;