import { useParams } from "react-router-dom";
import { CoinAPI } from "../../services/CoinService";
import { useDelayedData } from "../../hooks/delay";
import { ApiParams } from "../../models/IAPI";

import s from './index.module.scss';

const Coin = () => {
	let {coinSymbol } = useParams();

	let params: ApiParams = {
		'symbols[0]': coinSymbol, //todo: swap on uuid;
	};

	const { data: dataCoins, error } = CoinAPI.useFetchAllCoinsQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataCoins });
	

	return (
		<section className={`panel_section table_section ${loading ? 'loading' : ''} ${error ? 'error' : ''}`}>
			<div className="header">
				<div className="section_title t-h2">{coinSymbol}</div>
			</div>

			<div className={`content ${error ? '' : 'no_padding'}`}>
				{error && <h1>Error...</h1>}
			</div> 
		</section>
	)
} 

export default Coin;