// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import axios from "axios";
// import NextCors from "nextjs-cors";
// // export default function handler(req, res) {
// //   res.status(200).json({ name: 'John Doe' })
// // }

// const baseUrl = "https://api/jikan.moe/v4";

// const PlainAPI = axios.create({
// 	headers: {
// 		"Access-Control-Allow-Origin": "*",
// 		"Access-Control-Allow-Headers": "*",
// 		"Access-Control-Allow-Methods": "*",
// 		contentType: "application/json",
// 	},
// 	validateStatus: (status) => {
// 		return (200 <= status && status < 300) || status === 304;
// 	},
// });

// PlainAPI.interceptors.request.use(
// 	(config) => {
// 		return config;
// 	},
// 	(error) => {
// 		if (error.response === undefined) {
// 			alert("네트워크 접속 오류입니다. \r\n조금뒤에 다시 접속해주세요.");
// 		} else {
// 			return Promise.reject(error);
// 		}
// 	}
// );

// export const getAnimes = () => PlainAPI.get(`${baseUrl}/anime/1`);

// export const getAnime = ({ animeId }) =>
// 	PlainAPI.get(`${baseUrl}/anime/${animeId}/full`);
