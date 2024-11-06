import { getAllPortfolio } from "services/UsersCoinsService";
import { useAuth } from 'store/context/AuthContext';
import { useEffect, useState } from 'react';

import CoinsList from "../../components/CoinsList/CoinsList";
import { TableTypes } from "../../data/coins"

import s from './index.module.scss';

const Home = () => {
	const { currentUser } = useAuth();
	const [ allCoins, setAllCoins ] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchPortfolio = async () => {
      const portfolio = await getAllPortfolio(currentUser);
      setAllCoins(portfolio || []);
    };

    if (currentUser) {
      fetchPortfolio();
    }
  }, [currentUser]);

	console.log(allCoins);
	

	return (
		<div className={s.Home}>
			{ 
				Object.keys(allCoins).length > 0 ? 
				<CoinsList title='Portfolio' type={TableTypes.COIN_PORTFOLIO} requiredCoins={allCoins}/> 
				: <CoinsList title="All"/> 
			}
		</div>
	)
} 

export default Home;