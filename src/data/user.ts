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
		list: ['BTC'],
		counts: {
			'BTC': 0.293579,
		}
	}
}