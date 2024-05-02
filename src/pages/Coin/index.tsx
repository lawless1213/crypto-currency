import { useParams } from "react-router-dom";
import { CoinAPI } from "../../services/CoinService";
import { useDelayedData } from "../../hooks/delay";
import { CoinDetailApiParams } from "../../models/IAPI";
import { ICoinDetail } from "../../models/ICoinDetail";

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
		<section className={`panel_section table_section ${loading ? 'loading' : ''} ${error ? 'error' : ''}`}>
			<div className="header">
			<div className='square_img'><img src={coin?.iconUrl} alt="" /></div>
				<div className="section_title t-h2">{coinName || coin?.name}</div>
			</div>

			<div className={`content`}>
				{error && <h1>Error...</h1>}
				<div>{coin?.description}</div>
				<br />
				<div>{coin?.price}</div>
				<br />
				<div>{coin?.change}</div>
			</div> 
		</section>
	)
} 

export default Coin;