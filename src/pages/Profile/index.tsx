import { useAuth } from "store/context/AuthContext";

import { usePortfolioData } from "../../hooks/usePortfolio";
import CoinsList from "../../components/CoinsList/CoinsList";
import { TableTypes } from "../../data/coins"

const Profile = () => {
	const { currentUser } = useAuth();
	const portfolio = usePortfolioData();


	return (
		<>
			<CoinsList title='Portfolio' type={TableTypes.COIN_PORTFOLIO} requiredCoins={portfolio}/>
		</>
	)
} 

export default Profile;