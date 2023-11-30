import CoinsList from "../../components/CoinsList/CoinsList";
import CoinsListCompact from "../../components/CoinsListCompact/CoinsListCompact";

import s from './Market.module.scss'

const Market = () => {
	return (
		<div className={s.Market}>
			<div className="grid">
				<CoinsListCompact sortType="price"/>
				<CoinsListCompact sortType="change"/>
				<CoinsListCompact sortType="listedAt"/>
			</div>
			<CoinsList/>
		</div>
	)
} 

export default Market;