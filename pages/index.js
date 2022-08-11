import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = (props) => {
	console.log(props.data);

	return props?.data?.map((anime) => {
		return (
			<div key={anime.mal_id}>
				<h1>{anime.title}</h1>
			</div>
		);
	});
};

export async function getServerSideProps(context) {
	const res = await axios.get("https://api.jikan.moe/v4/anime/", {
		params: { page: 1, limit: 10 },
	});
	return { props: res.data };
}

export default Home;
