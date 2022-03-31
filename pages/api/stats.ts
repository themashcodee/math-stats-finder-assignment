// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getStats } from "helpers"
import type { NextApiRequest, NextApiResponse } from "next"
import { Stats } from "types"

type Data = {
	dataset: number[]
	stats: Stats[]
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const dataset1 = [9, 7, 11, 13, 2, 4, 5, 5]
	const dataset2 = [16, 18, 19, 21, 23, 23, 27, 29, 29, 35]

	if (req.query.index === "2")
		return res
			.status(200)
			.json({ dataset: dataset2, stats: getStats(dataset2) })

	res.status(200).json({ dataset: dataset1, stats: getStats(dataset1) })
}
