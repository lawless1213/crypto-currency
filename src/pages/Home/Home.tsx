import CoinsList from "../../components/CoinsList/CoinsList";
import { user } from "../../data/user";

import s from './Home.module.scss'

const Home = () => {
	const usersCoins: string[] = user.portfolio.list;

	return (
		<div className={s.Home}>
			<CoinsList type='portfolio' requiredCoins={usersCoins}/>
		</div>
	)
} 

export default Home;