import React, {FC} from "react";
import { ICoin } from "../models/ICoin";

interface CoinsItemProps {
	coin: ICoin;
}

const CoinsItem: FC<CoinsItemProps> = ({coin}) => {
	return (
		<div className="coin">
			{coin.name}: {coin.price}USDT({coin.change})
		</div>
	)
}

export default CoinsItem;