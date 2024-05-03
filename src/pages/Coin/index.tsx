import { useParams } from "react-router-dom";
import { CoinAPI } from "../../services/CoinService";
import { useDelayedData } from "../../hooks/delay";
import { CoinDetailApiParams } from "../../models/IAPI";
import { ICoinDetail } from "../../models/ICoinDetail";
import PriceHistory from "../../components/CoinSections/PriceHistory";

import s from './index.module.scss';

const Coin = () => {
	let { coinParams } = useParams<{ coinParams?: string }>();
	let coinUUID = coinParams?.split('_')[0] || '';
	let coinName = coinParams?.split('_')[1] || undefined;
	
	// let params: CoinDetailApiParams = {
	// 	uuid: coinUUID
	// };

	// const { data: dataCoin, error } = CoinAPI.useFetchCoinDetailQuery(params);
	// const { displayData, loading } = useDelayedData({ data: dataCoin });
	// const coin: ICoinDetail | undefined = displayData?.data.coin;

	// console.log(coin);
	

	return (
		<PriceHistory coinUUID={coinUUID}/>
	)
} 

export default Coin;