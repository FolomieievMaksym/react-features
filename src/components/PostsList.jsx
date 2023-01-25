import React from "react";
import Post from './Post';
import classes from './PostsList.module.scss';

const PostsList = function (props) {
	console.log(props);
	
	return (
		<div>
			<h2 className={classes.postsTitle} style={{ fontSize: "2em", textAlign: "center", marginBottom: "20px", marginTop: '20px' }}>{props.title}</h2>
			{props.posts.map((post) => (
				<Post post={post} key={post.id} />
         ))}
		</div>
	);
}

export default PostsList;