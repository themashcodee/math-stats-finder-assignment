import type { NextPage } from "next"
import { useState } from "react"
import { Controls, Head, Stats } from "components"
import { Stats as StatsType } from "types"

const Home: NextPage = () => {
	const [stats, setStats] = useState<StatsType[]>([])

	return (
		<>
			<Head />

			<main className="w-full h-screen flex justify-center items-center flex-col gap-12 p-12 text-[#222]">
				<Stats data={stats} />
				<Controls stats={stats} setStats={setStats} />
			</main>
		</>
	)
}

export default Home
