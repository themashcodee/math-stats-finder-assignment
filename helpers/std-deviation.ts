import { findMean } from "./find-mean"

export function findStdDeviation(dataset: number[]) {
	const mean = findMean(dataset)

	const deviationSum = dataset.reduce((sum, num) => {
		return parseFloat((sum + Math.pow(num - mean, 2)).toFixed(2))
	}, 0)

	return parseFloat(Math.sqrt(deviationSum / dataset.length).toFixed(2))
}
