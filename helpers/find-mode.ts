export function findMode(dataset: number[]) {
	const entries = new Map<number, number>()
	let mode = {
		value: [dataset[0]],
		count: 1,
	}

	dataset.forEach((num) => {
		const number = entries.get(num)

		if (number) {
			entries.set(num, number + 1)

			if (number + 1 === mode.count) {
				mode = {
					value: [...mode.value, num],
					count: number + 1,
				}
			} else if (number + 1 > mode.count) {
				mode = {
					value: [num],
					count: number + 1,
				}
			}
		} else entries.set(num, 1)
	})

	return mode.value
}
