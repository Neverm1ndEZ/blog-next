import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cat) => {
	const res = await fetch(
		`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
		{
			cache: "no-store",
		},
	);

	if (!res.ok) {
		throw new Error("Failed");
	}

	return res.json();
};

const fetchAllPosts = async (cat) => {
	let allPosts = [];
	let page = 1;
	let hasMore = true;

	while (hasMore) {
		const { posts, count } = await getData(page, cat);
		allPosts = [...allPosts, ...posts];
		hasMore = posts.length > 0;
		page += 1;
	}

	return allPosts;
};

const CardList = async ({ page, cat }) => {
	const allPosts = await fetchAllPosts(cat);
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
	);
	const POST_PER_PAGE = 2;

	const paginatedPosts = sortedPosts.slice(
		POST_PER_PAGE * (page - 1),
		POST_PER_PAGE * page,
	);

	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * page < sortedPosts.length;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.posts}>
				{paginatedPosts.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
			<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
		</div>
	);
};

export default CardList;
