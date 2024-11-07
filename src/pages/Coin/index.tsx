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
	let coinName = coinParams?.split('_')[1] || undefined;
	
	let params: CoinDetailApiParams = {
		uuid: coinUUID
	};

	const { data: dataCoin, error } = CoinAPI.useFetchCoinDetailQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataCoin });
	const coin: ICoinDetail | undefined = displayData?.data.coin;

	return (
		<>
			{/* <img src={coin?.iconUrl} alt="" /> */}
			{coin?.name}
			{coin && <PriceHistory coin={coin}/>}
			{coin && <PaySection coin={coin}/>}
		</>
	)
} 

export default Coin;