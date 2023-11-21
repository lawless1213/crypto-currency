import { useState } from "react";
import { CoinAPI } from "../services/CoinService";
import CoinsItem from "./CoinsItem";
const CoinsList = () => {
	const [limit, setLimit] = useState(5);
	const {data: coins, error, isLoading} = CoinAPI.useFetchAllCoinsQuery(limit);
	
	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>Error...</h1>}
			{coins && coins.map(coin => 
				<CoinsItem key={coin.uuid} coin={coin}/>
			)}
		</div>
	)
}

export default CoinsList;