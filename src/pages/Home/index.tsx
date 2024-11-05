import { getAllPortfolio } from "services/UsersCoinsService";
import { useAuth } from 'store/context/AuthContext';
import { useEffect, useState } from 'react';

import CoinsList from "../../components/CoinsList/CoinsList";
import { TableTypes } from "../../data/coins";
import { user } from "../../data/user";

import s from './index.module.scss';

const Home = () => {
	const { currentUser } = useAuth();
	const [ allCoins, setAllCoins ] = useState<string[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const portfolio = await getAllPortfolio(currentUser);
			console.log(Object.keys(portfolio));
			
      setAllCoins(Object.keys(portfolio));
    };

    if (currentUser) {
      fetchPortfolio();
    }
  }, [currentUser]);
	
	const usersCoins: string[] = user.portfolio.list;

	return (
		<div className={s.Home}>
			<CoinsList title='Portfolio' type={TableTypes.COIN_PORTFOLIO} requiredCoins={usersCoins}/>
		</div>
	)
} 

export default Home;