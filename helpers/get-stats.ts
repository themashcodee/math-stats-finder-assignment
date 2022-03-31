import { Stats } from "types"
import { findMean } from "./find-mean"
import { findMedian } from "./find-median"
import { findMode } from "./find-mode"
import { findStdDeviation } from "./std-deviation"

export function getStats(dataset: number[]): Stats[] {
	return [
		{
			id: "1",
			type: "mean",
			value: findMean(dataset),
		},
		{
			id: "2",
			type: "median",
			value: findMedian(dataset),
		},
		{
			id: "3",
			type: "mode",
			value: findMode(dataset),
		},
		{
			id: "4",
			type: "std_deviation",
			value: findStdDeviation(dataset),
		},
	]
}
