export type Stats =
	| {
			id: string
			type: "mean" | "median" | "std_deviation"
			value: number
	  }
	| {
			id: string
			type: "mode"
			value: number[]
	  }
