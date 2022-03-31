export function findMedian(dataset: number[]) {
	const sorted = dataset.sort((a, b) => a - b)
	const l = sorted.length

	if (l % 2 === 0) return (sorted[l / 2] + sorted[l / 2 - 1]) / 2
	return sorted[Math.floor(l / 2)]
}
