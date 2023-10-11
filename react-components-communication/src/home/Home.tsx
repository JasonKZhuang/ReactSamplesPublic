function Home() {
	return (
		<div>
			<h1>Home</h1>
			<div style={{ width: "500px", padding: "10px 1px ", margin: "10px 1px", border: "1px solid red" }}>
				<a href="/usingProps">Go to using Props to communicate between components</a>
			</div>
			<div style={{ width: "500px", padding: "10px 1px ", margin: "10px 1px", border: "1px solid white" }}>
				<a href="/usingContext">Go to using React Context to communicate between components</a>
			</div>
		</div>
	);
}

export default Home;
