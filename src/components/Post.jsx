import React from "react";

const Post = function () {
	return (
		<div>
			<div className="post">
				<div className="post__head">
					<p className="post__id">1</p>
					<p className="post__name">JavaScript</p>
				</div>
				<div className="post__body">Description Aout JS</div>
				<div className="post__buttons">
					<button>Delete</button>
					<button>Save</button>
				</div>
			</div>
		</div>
	);
}

export default Post;