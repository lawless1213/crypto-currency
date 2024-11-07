import { usePortfolioData } from "../../hooks/usePortfolio";
import CoinsList from "../../components/CoinsList/CoinsList";
import { TableTypes } from "../../data/coins"

import s from './index.module.scss';

const Home = () => {
	const portfolio = usePortfolioData();
	
	return (
		<div className={s.Home}>
			{ 
				Object.keys(portfolio).length > 0 ? 
				<CoinsList title='Portfolio' type={TableTypes.COIN_PORTFOLIO} requiredCoins={portfolio}/> 
				: <CoinsList title="All"/> 
			}
		</div>
	)
} 

export default Home;