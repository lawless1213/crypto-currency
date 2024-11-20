import { CoinsCharacter } from "../../data/coins";
import { useNavigate } from 'react-router-dom';
import { ICoin } from "../../models/ICoin";
import { IPortfolio } from "../../models/IUser";
import { setCurrency, setAmount, isIncrementalChange } from "../../services/CoinService";

import RowCell from "../UI/TableComponents/RowCell";
import MyBadge from "../UI/MyBadge";
import { icons } from 'components/Icons';
import { TableBody, TableRow } from "@mui/material";


interface Props {
	tableColumns: CoinsCharacter[],
	coins: ICoin[],
	portfolio?: IPortfolio, 
}

const CoinsListTableBody: React.FC<Props> = ({tableColumns, coins, portfolio}: Props) => {
	let navigate = useNavigate();

	const ShowMoreHandler = (coin: ICoin) => {
		navigate(`/coin/${coin.uuid}_${coin.symbol}`);
	}

	const renderRowCell = (coin: ICoin, columnType: string) => {
		switch (columnType) {
			case CoinsCharacter.PRICE:
				return <RowCell>
					<span>{setCurrency(coin.price)}</span>
					<MyBadge
						text={`${Math.abs(Number(coin.change))}%`}
						icon={
							Math.abs(Number(coin.change)) === 0
								? null : isIncrementalChange(coin) ? icons.TRAND_UP : icons.TRAND_DOWN
						}
						classes={
							Math.abs(Number(coin.change)) === 0
								? 'border' : isIncrementalChange(coin) ? 'success border' : 'danger border'
						}
					/>
				</RowCell>;
			case CoinsCharacter.VOLUME24:
				return <RowCell><span>{setCurrency(coin["24hVolume"])}</span></RowCell>;
			case CoinsCharacter.MARKETCAP:
				return <RowCell><span>{setCurrency(coin.marketCap)}</span></RowCell>;
			case CoinsCharacter.COUNT:
				let amount = portfolio && coin.uuid in portfolio ? portfolio[coin.uuid] : 0;
				
				return (
					<RowCell>
						<span className="t-h5">{amount}</span>
						<span className="t-caption">{setAmount(amount, coin.price)}</span>
					</RowCell>
				);
			default:
				return null;
		}
	};

	const tableBodyRows = coins && coins.map(coin => (
		<TableRow className='row_link' key={coin.uuid} onClick={() => ShowMoreHandler(coin)}>
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