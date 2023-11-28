import { useState } from "react";
import { CoinAPI } from "../../services/CoinService";
import { ICoin } from "../../models/ICoin";
import { coinsTable } from "../../data/coins";
import { setCurrency } from "../../services/Currency";

import {
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

import s from './CoinsList.module.scss';


const CoinsList = () => {
	const [limit, setLimit] = useState(5);
	const { data: dataCoins, error, isLoading } = CoinAPI.useFetchAllCoinsQuery(limit);

	const coins: ICoin[] | undefined = dataCoins?.data.coins;
	
	const isIncrementalChange = (coin: ICoin): boolean => {
    return coin.change.charAt(0) !== '-';
};

	return (
		<section className={`${s.CoinsList} panel_section no_padding`}>
			<div className="content no_padding">
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>Error...</h1>}
				{coins && 
					<TableContainer className={s.TableWrap} component={Paper}>
						<Table className={s.Table} aria-label="simple table">
							<TableHead className={s.TableHead}>
								<TableRow className={s.TableRow}>
									{coinsTable.columns.map((head) => (
										<TableCell
											className={s.TableCell}
											key={head}
										>
											{head}
										</TableCell>
									))}
								</TableRow>
							</TableHead>

							<TableBody className={s.TableBody}>
								{coins.map (coin => {
									const status = '';

									return (
										<TableRow className={s.TableRow}>
										<TableCell
											className={s.TableCell}
											component="th"
											scope="row"
										>
											<FaRegStar className={s.Icon} />
											<div className={s.Image}>
												<img
													src={coin.iconUrl}
													alt=""
												/>
											</div>
											<div className="title">
												<div className={s.Name}>{coin.name}</div>
												<div className={s.Symbol}>{coin.symbol}</div>
											</div>
										</TableCell>
										<TableCell
											className={s.TableCell}
											component="th"
											scope="row"
										>
											<span>{setCurrency(coin.price)}</span>
										</TableCell>
										<TableCell
											className={s.TableCell}
											component="th"
											scope="row"
										>
											<div className={`${s.Change} ${isIncrementalChange(coin) ? s.Incremental : s.Falling}}`}>
												<span>{Math.abs(Number(coin.change))}%</span>
												{isIncrementalChange(coin) ?<FaArrowTrendUp/>:<FaArrowTrendDown/>}
											</div>
										</TableCell>
										<TableCell
											className={s.TableCell}
											component="th"
											scope="row"
										>
											<span>{setCurrency(coin["24hVolume"])}</span>
										</TableCell>
										<TableCell
											className={s.TableCell}
											component="th"
											scope="row"
										>
											<span>{setCurrency(coin.marketCap)}</span>
										</TableCell>
									</TableRow>
									)
								})}
							</TableBody>
						</Table>
				</TableContainer>
			}
			</div>
		</section>
	)
}

export default CoinsList;