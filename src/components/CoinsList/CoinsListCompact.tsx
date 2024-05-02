import { CoinAPI } from "../../services/CoinService";
import { useNavigate } from 'react-router-dom';
import { ICoin } from "../../models/ICoin";
import { setCurrency, isIncrementalChange } from "../../services/CoinService";
import { useDelayedData } from "../../hooks/delay";
import Params from "../../data/params";

import {
  TableBody,
  TableRow,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import MyBadge from "../UI/MyBadge";
import RowCell from "../UI/TableComponents/RowCell";

interface Props {
	sortType: 'price' | 'change' | 'listedAt'
}

const CoinsListCompact: React.FC<Props> = ({sortType}) => {
	let navigate = useNavigate();

	const ShowMoreHandler = (coin: ICoin) => {
		navigate(`/coin/${coin.uuid}_${coin.name}`);
	}

	const params = {
		limit: 5,
		orderBy: sortType,
	};

	const { data: dataCoins, error } = CoinAPI.useFetchAllCoinsQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataCoins });

	const coins: ICoin[] | undefined = displayData?.data.coins;

	const tableBodyRows = coins && coins.map (coin => {
		const element: JSX.Element = 
		<TableRow className='row_link' key={coin.uuid} onClick={() => ShowMoreHandler(coin)}>
			<RowCell contentClasses='row'>
				<div className='square_img'><img src={coin.iconUrl} alt="" /></div>
				<div className="title">
					<div className='t-h3'>{coin.name}</div>
					<div className='t-caption'>{coin.symbol}</div>
				</div>
			</RowCell>
			<RowCell>
				<span>{setCurrency(coin.price)}</span>
				<MyBadge 
					text={`${Math.abs(Number(coin.change))}%`} 
					icon={Math.abs(Number(coin.change)) === 0 ? null : (isIncrementalChange(coin) ? <FaArrowTrendUp/> : <FaArrowTrendDown/>)} 
					classes={Math.abs(Number(coin.change)) === 0 ? 'border' : (isIncrementalChange(coin) ? 'success border' : 'danger border')}
				/>
			</RowCell>
		</TableRow>

		return element;
	})

	return (
		<section className={`panel_section table_section ${loading ? 'loading' : ''} ${error ? 'error' : ''}`}>
			<div className="header">
				<span className="t-lead">{Params.coinsSections.sortedByTitle[sortType]}</span>
			</div>

			<div className={`content ${error ? '' : 'no_padding'}`}>
					{error && <h1>Error...</h1>}
					{!error && tableBodyRows && 
						<TableContainer className='table_wrap' component={Paper}>
							<Table aria-label="simple table">
								<TableBody>
									{tableBodyRows}
								</TableBody>
							</Table>
					</TableContainer>
					}
				</div>
		</section>
	)
}

export default CoinsListCompact;