import React, { useState } from "react";
import PostItem from "./PostItem";

const PostList = function ({posts, title}) {
	
	return (
		<div>
			<h1 className="post__title">{title}</h1>
         {posts.map((post) => (
            <PostItem post={post} key={post.id} />
         ))}
		</div>
	);
}

export default PostList;