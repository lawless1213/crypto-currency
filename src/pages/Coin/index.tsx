import { useParams } from "react-router-dom";
import PriceHistory from "../../components/CoinSections/PriceHistory";
import PaySection from '../../components/CoinSections/PaySection'
import {CoinDetailApiParams} from '../../models/IAPI';
import { ICoinDetail } from '../../models/ICoinDetail'
import { useDelayedData } from "hooks/delay";
import { CoinAPI } from "services/CoinService";

import s from './index.module.scss';

const Coin = () => {
	let { coinParams } = useParams<{ coinParams?: string }>();
	let coinUUID = coinParams?.split('_')[0] || '';
	
	let params: CoinDetailApiParams = {
		uuid: coinUUID
	};

	const { data: dataCoin, error } = CoinAPI.useFetchCoinDetailQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataCoin });
	const coin: ICoinDetail | undefined = displayData?.data.coin;

	return (
		<>
			{coin && <PaySection coin={coin}/>}
			{coin && <PriceHistory coin={coin}/>}
		</>
	)
} 

export default Coin;