import { useEffect, useState } from "react";
import { IPostObject } from "./model/IPostObject";
import AxiosService from "./AxiosService";

function GetRequestExample() {
	const [post, setPost] = useState<IPostObject>({});

	const getPostById = async (id: string) => {
		const response = await AxiosService.getAxiosInstance().get(`/posts/${id}`);
		setPost(response.data);
	};

	useEffect(() => {
		// first
		AxiosService.getAxiosInstance()
			.get("/posts/3")
			.then((response) => {
				setPost(response.data);
			});

		return () => {
			// second
		};
	}, []);

	return (
		<div style={{ width: "600px", border: "2px solid green" }}>
			<input
				style={{ height: "40px", width: "300px", fontSize: "20pt" }}
				type="number"
				name="postId"
				id="postId"
				onChange={(e) => getPostById(e.target.value)}
			/>
			<h3>{post.title}</h3>
			<h3>{post.body}</h3>
		</div>
	);
}

export default GetRequestExample;
