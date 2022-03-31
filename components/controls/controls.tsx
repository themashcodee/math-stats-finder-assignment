import React, {
	ChangeEvent,
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react"
import { getStats } from "helpers"
import { Stats } from "types"

type P = {
	stats: Stats[]
	setStats: Dispatch<SetStateAction<Stats[]>>
}

export const Controls = ({ setStats, stats }: P) => {
	const [number, setNumber] = useState("")
	const [dataset, setDataset] = useState<number[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (dataset.length) setStats(getStats(dataset))
	}, [dataset, setStats])

	function handleAddNumber(e: FormEvent) {
		e.preventDefault()
		if (!stats.length) return alert("Kindly fetch data first")
		setDataset([...dataset, parseInt(number)])
		setNumber("")
	}

	function hanldeNumberChange(e: ChangeEvent<HTMLInputElement>) {
		const { value } = e.target
		if (+value > 0 || value === "") setNumber(value)
	}

	async function fetchData1() {
		setLoading(true)
		const data: { dataset: number[]; stats: Stats[] } = await (
			await fetch("/api/stats")
		).json()
		setStats(data.stats)
		setDataset(data.dataset)
		setLoading(false)
	}
	async function fetchData2() {
		setLoading(true)
		const data: { dataset: number[]; stats: Stats[] } = await (
			await fetch("/api/stats?index=2")
		).json()
		setStats(data.stats)
		setDataset(data.dataset)
		setLoading(false)
	}

	return (
		<div className="flex flex-col gap-12 items-center">
			<form
				className="flex flex-col sm:flex-row rounded-lg overflow-hidden"
				onSubmit={handleAddNumber}
			>
				<input
					type="text"
					required
					value={number}
					maxLength={5}
					onChange={hanldeNumberChange}
					className="bg-gray-100 p-3 px-5"
					placeholder="Enter a Number"
				/>
				<button className="bg-yellow-400 px-4 py-2 font-semibold">
					Add number to dataset
				</button>
			</form>

			<div className="flex gap-4">
				<button
					disabled={loading}
					onClick={fetchData1}
					className="px-3 py-2 bg-orange-400 text-white rounded-md disabled:opacity-60"
				>
					{loading ? "Loading..." : "Reload data 1"}
				</button>
				<button
					disabled={loading}
					onClick={fetchData2}
					className="px-3 py-2 bg-orange-400 text-white rounded-md disabled:opacity-60"
				>
					{loading ? "Loading..." : "Reload data 2"}
				</button>
			</div>
		</div>
	)
}
