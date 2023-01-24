import React from "react";

const PostItem = function (props) {
	return (
		<div className="post-item">
			<div className="post-item__head">
				<p className="post-item__id">{props.post.id}</p>
				<p className="post-item__name">{props.post.title}</p>
			</div>
			<div className="post-item__body">{props.post.body}</div>
			<div className="post-item__buttons">
				<button>Delete</button>
				<button>Save</button>
			</div>
		</div>
	);
}

export default PostItem;