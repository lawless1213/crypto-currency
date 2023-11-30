import logo from '../assets/images/logo.svg';

interface Params {
	title: string;
	logo: string;
	sortedByTitle: {
		price: string,
		change: string,
		listedAt: string,
	}
}

const Params: Params = {
	title: 'Crypto',
	logo: logo,
	sortedByTitle: {
		price: 'Sorted by price',
		change: 'Biggest changes',
		listedAt: 'Recently added',
	}
};

export default Params;