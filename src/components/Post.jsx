import React from "react";
import "../styles/Post.scss";
import Button from "./Button";

const Post = function (props, el) {
	return (
		<div className="post">
			<div className="post__head">
				<p className="post__num">
					{props.post.id}
				</p>
				<h2 className="post__title">
					{props.post.title}
				</h2>
			</div>
			<div className="post__body">
				<div className="post__content">
					<p className="post__text">
						{[props.post.text, ' ', props.post.id]}
					</p>
				</div>
				<div className="post__buttons">
					<Button text={[props.post.btn1,' ', props.post.id]} />
					<Button text={[props.post.btn2,' ', props.post.id]} />
				</div>
			</div>
		</div>
	);
}

export default Post;