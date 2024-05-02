interface User {
	firstName: string,
	lastName: string,
	portfolio: {
		list: string[],
		counts: {
			[key: string]: number;
		}
	}
}

export const user: User = {
	firstName: "Andrii",
	lastName: "Lototskyi",
	portfolio: {
		list: ['BTC', 'BNB', 'USDT', 'FDUSD'],
		counts: {
			'BTC': 0.00232579,
			'BNB': 0.14616301,
			'USDT': 47.3634178,
			'FDUSD': 0.011,
		}
	}
}