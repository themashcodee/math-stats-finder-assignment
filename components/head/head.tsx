import React from "react"
import NextHead from "next/head"

type P = {}

export const Head = () => {
	return (
		<NextHead>
			<title>Polymerize Assignment</title>
			<meta
				name="description"
				content="Mean, Median and Mode finder - Polymerize Assignment"
			/>
			<link rel="icon" href="/favicon.png" />
		</NextHead>
	)
}
