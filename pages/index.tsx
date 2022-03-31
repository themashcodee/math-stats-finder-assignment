import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Polymerize Assignment</title>
				<meta
					name="description"
					content="Mean, Median and Mode finder - Polymerize Assignment"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className="w-full h-screen p-12">
				<h1 className="font-bold text-3xl">Polymerize</h1>
			</main>
		</>
	)
}

export default Home
