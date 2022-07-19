import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="theme-color" content="#3c1756" />
				<title>React Table</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
