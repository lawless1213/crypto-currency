// import CoinsList from "../../components/CoinsList/CoinsList";
import CoinsListCompact from "../../components/CoinsList/CoinsListCompact";

import s from './index.module.scss';

const Market = () => {
	return (
		<div className={s.Market}>
			<div className="grid">
				<CoinsListCompact sortType="price"/>
				<CoinsListCompact sortType="change"/>
				<CoinsListCompact sortType="listedAt"/>
			</div>
		</div>
	)
} 

export default Market;