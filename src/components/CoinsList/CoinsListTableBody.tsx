import { CoinsCharacter, TableTypes } from "../../data/coins";
import { ICoin } from "../../models/ICoin";
import { setCurrency, setAmount, isIncrementalChange } from "../../services/CoinService";
import { user } from "../../data/user";

import RowCell from "../UI/TableComponents/RowCell";
import MyBadge from "../UI/MyBadge";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { TableBody, TableRow } from "@mui/material";

interface Props {
	tableColumns: CoinsCharacter[],
	coins: ICoin[],
}

const CoinsListTableBody: React.FC<Props> = ({tableColumns, coins}: Props) => {
	const renderRowCell = (coin: ICoin, columnType: string) => {
		switch (columnType) {
			case CoinsCharacter.PRICE:
				return <RowCell>
					<span>{setCurrency(coin.price)}</span>
					<MyBadge
						text={`${Math.abs(Number(coin.change))}%`}
						icon={
							Math.abs(Number(coin.change)) === 0
								? null
								: isIncrementalChange(coin)
								? <FaArrowTrendUp />
								: <FaArrowTrendDown />
						}
						classes={
							Math.abs(Number(coin.change)) === 0
								? 'border'
								: isIncrementalChange(coin)
								? 'success border'
								: 'danger border'
						}
					/>
				</RowCell>;
			case CoinsCharacter.VOLUME24:
				return <RowCell><span>{setCurrency(coin["24hVolume"])}</span></RowCell>;
			case CoinsCharacter.MARKETCAP:
				return <RowCell><span>{setCurrency(coin.marketCap)}</span></RowCell>;
			case CoinsCharacter.COUNT:
				return (
					<RowCell>
						<span className="t-h5">{user.portfolio.counts[coin.symbol] ?? 0}</span>
						<span className="t-caption">{setAmount(user.portfolio.counts[coin.symbol], coin.price)}</span>
					</RowCell>
				);
			default:
				return null;
		}
	};

	const tableBodyRows = coins && coins.map(coin => (
		<TableRow key={coin.uuid}>
			<RowCell contentClasses='row'>
				<div className='square_img'><img src={coin.iconUrl} alt="" /></div>
				<div className="title">
					<div className='t-h3'>{coin.name}</div>
					<div className='t-caption'>{coin.symbol}</div>
				</div>
			</RowCell>
			{tableColumns.map(columnType =>
				renderRowCell(coin, columnType)
			)}
		</TableRow>
	));


	return (
		<TableBody>
			{tableBodyRows}
		</TableBody>
	)
}

export default CoinsListTableBody;