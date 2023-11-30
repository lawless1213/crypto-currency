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
	const limit = 5;
	const { data: dataCoins, error, isLoading } = CoinAPI.useFetchAllCoinsQuery(limit);

	const coins: ICoin[] | undefined = dataCoins?.data.coins;
	
	const isIncrementalChange = (coin: ICoin): boolean => {
    return coin.change.charAt(0) !== '-';
};

	return (
		<section className={`${s.CoinsList} ${isLoading ? 'loading' : ''} ${error ? 'error' : 'no_padding'} panel_section`}>
			<div className={`content ${error ? '' : 'no_padding'}`}>
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
									return (
										<TableRow className={s.TableRow}>
										<TableCell
											className={s.TableCell}
											component="th"
											scope="row"
										>
											<div className={s.MainCell}>
												<FaRegStar className={s.Favorite} />
												<div className={s.Image}>
													<img
														src={coin.iconUrl}
														alt=""
													/>
												</div>
												<div className="title">
													<div className={`${s.Name} t-h3`}>{coin.name}</div>
													<div className={`${s.Symbol} t-caption`}>{coin.symbol}</div>
												</div>
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
											<div className={`${s.ChangeCell} ${Math.abs(Number(coin.change)) === 0 ? '' : (isIncrementalChange(coin) ? s.Incremental : s.Falling)}`}>
												<span>{Math.abs(Number(coin.change))}%</span>
												{Math.abs(Number(coin.change)) !== 0 && (isIncrementalChange(coin) ? <FaArrowTrendUp/> : <FaArrowTrendDown/>)}
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