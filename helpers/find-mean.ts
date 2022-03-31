export function findMean(dataset: number[]): number {
	const sum = dataset.reduce((acc, curr) => acc + curr, 0)
	return parseFloat((sum / dataset.length).toFixed(2))
}
