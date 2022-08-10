import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home(props) {
	console.log(props.data);

	return <div>hi</div>;
}

export async function getServerSideProps(context) {
	const res = await axios.get("https://api.jikan.moe/v4/anime/");
	return { props: res.data };
}
