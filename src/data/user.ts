interface PortfolioItem {
	coin: string,
	value: number,
}

interface User {
	firstName: string,
	lastName: string,
	portfolio: PortfolioItem[]
}

export const User: User = {
	firstName: "Andrew",
	lastName: "Lototskyi",
	portfolio: [
		{
			coin: 'BTC',
			value: 0.293579
		}
	]
}