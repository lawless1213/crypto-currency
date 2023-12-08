import CoinsList from "../../components/CoinsList/CoinsList";
import { TableTypes } from "../../data/coins";
import { user } from "../../data/user";

import s from './Home.module.scss'

const Home = () => {
	const usersCoins: string[] = user.portfolio.list;

	return (
		<div className={s.Home}>
			<CoinsList title='Portfolio' type={TableTypes.COIN_PORTFOLIO} requiredCoins={usersCoins}/>
		</div>
	)
} 

export default Home;