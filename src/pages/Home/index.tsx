import { useEffect } from 'react';
import { useAuth } from 'store/context/AuthContext';
import { usePortfolio } from 'store/context/PortfolioContext';
import CoinsList from "../../components/CoinsList/CoinsList";
import { TableTypes } from "../../data/coins"

import s from './index.module.scss';

const Home = () => {
	const { currentUser } = useAuth();
	const { portfolio, fetchPortfolio } = usePortfolio();

	useEffect(() => {
    fetchPortfolio(currentUser);
  }, [currentUser]);

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