import React, { ChangeEvent, FormEvent, useState } from "react"

type P = {}

export const Controls = () => {
	const [number, setNumber] = useState("")

	function handleAddNumber(e: FormEvent) {
		e.preventDefault()
	}

	function hanldeNumberChange(e: ChangeEvent<HTMLInputElement>) {
		const { value } = e.target
		if (+value > 0 || value === "") setNumber(value)
	}

	return (
		<div className="flex flex-col gap-12 items-center">
			<form
				className="flex flex-col sm:flex-row rounded-lg overflow-hidden"
				onSubmit={handleAddNumber}
			>
				<input
					type="text"
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
				<button className="px-3 py-2 bg-orange-400 text-white rounded-md">
					Reload Data 1
				</button>
				<button className="px-3 py-2 bg-orange-400 text-white rounded-md">
					Reload Data 2
				</button>
			</div>
		</div>
	)
}
