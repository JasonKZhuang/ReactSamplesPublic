import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { API } from "./Constants";
import { IPostObject } from "./model/IPostObject";
import { ICommentObject } from "./model/ICommentObject";

function MinimalExample() {
	const [post, setPost] = useState<IPostObject>();
	const [posts, setPosts] = useState<IPostObject[]>();
	const [comment, setComment] = useState<ICommentObject>();

	// Make a request for a post with a given ID
	const handleSimpleGetPost = () => {
		axios
			.get(`${API.BASE_URL}/posts/1`)
			.then(function (response: AxiosResponse) {
				// handle success
				console.log(response.data);
				setPost(response.data);
			})
			.catch(function (error: AxiosError) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};

	// Make a request for a comment with a parameter ID
	const handleSimpleGetComment = () => {
		axios
			.get(`${API.BASE_URL}/comments`, {
				params: {
					postId: 5,
				},
			})
			.then(function (response: AxiosResponse) {
				console.log(response.data);
				setComment(response?.data[0]);
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};

	// Make a request using async and await
	const handleAsyncGetPosts = async () => {
		try {
			const response = await axios.get(`${API.BASE_URL}/posts`);
			console.log(response);
			setPosts(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div style={{ display: "flex", flexDirection: "column", border: "1px solid red", padding: "8px" }}>
				<div style={{ display: "flex", flexDirection: "column", margin: "2px" }}>
					<span>id:{post?.id}</span>
					<span>title:{post?.title}</span>
					<p style={{ width: "300px" }}>body:{post?.body}</p>
					<br />
					<button onClick={handleSimpleGetPost}>Get One Post</button>
				</div>
				<div style={{ display: "flex", flexDirection: "column", margin: "2px" }}>
					<span>id: {comment?.id}</span>
					<span>name: {comment?.name}</span>
					<p style={{ width: "300px" }}>body: {comment?.body}</p>
					<br />
					<button onClick={handleSimpleGetComment}>Get One Comment</button>
				</div>
			</div>
			<div style={{ display: "flex", flexDirection: "column", border: "1px solid blue" }}>
				<button onClick={handleAsyncGetPosts}>Get All Posts</button>
				{posts?.map((item, index) => {
					return (
						<div
							key={index}
							style={{ display: "flex", flexDirection: "column", margin: "2px" }}
						>
							<span>id: {item.id}</span>
							<span>title: {item.title}</span>
							<p style={{ width: "300px" }}>body: {item.body}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default MinimalExample;
