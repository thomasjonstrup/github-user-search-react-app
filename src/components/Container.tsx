import React, { memo, useCallback, useState } from "react";
import { useQuery } from "react-query";

import Logo from "../devfinder.svg";
import Profile from "./Profile";

const Container = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchActiveItem, setSearchActiveItem] = useState("octocat");

	const { isLoading, error, data } = useQuery(
		["searchterm", searchActiveItem],
		() =>
			fetch(`https://api.github.com/users/${searchActiveItem}`).then(
				(res) => res.json()
			)
	);

	const handleClick = useCallback(() => {
		console.log("searchTerm :>> ", searchTerm);
		setSearchActiveItem(searchTerm);
	}, [searchTerm]);

	return (
		<div className="container">
			<img src={Logo} alt="devfinder logo" />
			<div className="search">
				<input
					type="text"
					value={searchTerm}
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
					placeholder="Search github username..."
				/>
				<button className="btn" onClick={handleClick}>
					Search
				</button>
			</div>
			{isLoading ? (
				<div className="container">
					<div className="profile">
						<p>{"Loading..."}</p>
					</div>
				</div>
			) : (
				<Profile data={data} />
			)}
		</div>
	);
};

export default memo(Container);
