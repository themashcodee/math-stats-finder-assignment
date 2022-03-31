import React from "react"
import { Stats as StatsType } from "types"

type P = {
	data: StatsType[]
}

export const Stats = ({ data }: P) => {
	return (
		<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-4">
			{data.map(({ id, name, value }) => {
				return (
					<div
						key={id}
						className="p-12 rounded-md flex items-center flex-col bg-gray-200 text-2xl"
					>
						<span className="font-bold text-center">{name}</span>
						<span className="text-lg">{value}</span>
					</div>
				)
			})}
		</div>
	)
}
