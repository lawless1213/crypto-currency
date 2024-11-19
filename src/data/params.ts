import logo from '../assets/images/logo.svg';

interface IParams {
	title: string;
	logo: string;
	coinsSections: {
		sortedByTitle: {
			price: string,
			change: string,
			listedAt: string,
		}
	}
}

const Params: IParams = {
	title: 'crypto currency',
	logo: logo,
	coinsSections: {
		sortedByTitle: {
			price: 'Sorted by price',
			change: 'Biggest changes',
			listedAt: 'Recently added',
		}
	}
};

export default Params;