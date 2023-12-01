import { useState } from "react";
import { CoinAPI } from "../../services/CoinService";
import { ICoin } from "../../models/ICoin";
import { IStats } from "../../models/IStats";
import { coinsTable } from "../../data/coins";
import { setCurrency, isIncrementalChange } from "../../services/CoinService";
import { ApiParams } from "../../models/IAPI";

import {
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
	Pagination
} from "@mui/material";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import MyBadge from "../UI/MyBadge";

import s from './CoinsList.module.scss';


const CoinsList = () => {
	const countRow: number = 10;
	const [page, setPage] = useState(1);

	console.log(page);

	let params: ApiParams = {
		limit: countRow,
		offset: page > 1 ? (countRow * (page - 1)).toString() : '0',
	};

	const pageHandler = (value: number) => {
		setPage(value);
	}

	const { data: dataCoins, error, isLoading } = CoinAPI.useFetchAllCoinsQuery(params);

	const coins: ICoin[] | undefined = dataCoins?.data.coins;
	const stats: IStats | undefined = dataCoins?.data.stats;

	const pagesTotal:number = stats?.total ? Math.ceil(stats?.total / params.limit)  : 0;
	
	
	return (
		<section className={`${s.CoinsList} ${isLoading ? 'loading' : ''} ${error ? 'error' : ''}  panel_section`}>
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
										<TableRow key={coin.uuid} className={s.TableRow}>
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
												<div className={s.Content}>
													<span>{setCurrency(coin.price)}</span>
												</div>
											</TableCell>
											<TableCell
												className={s.TableCell}
												component="th"
												scope="row"
											>
												<div className={s.Content}>
													<MyBadge 
														text={`${Math.abs(Number(coin.change))}%`} 
														icon={Math.abs(Number(coin.change)) === 0 ? null : (isIncrementalChange(coin) ? <FaArrowTrendUp/> : <FaArrowTrendDown/>)} 
														classes={Math.abs(Number(coin.change)) === 0 ? 'soft' : (isIncrementalChange(coin) ? 'success soft' : 'danger soft')}
													/>
												</div>
											</TableCell>
											<TableCell
												className={s.TableCell}
												component="th"
												scope="row"
											>
												<div className={s.Content}>
													<span>{setCurrency(coin["24hVolume"])}</span>
												</div>
											</TableCell>
											<TableCell
												className={s.TableCell}
												component="th"
												scope="row"
											>
												<div className={s.Content}>
													<span>{setCurrency(coin.marketCap)}</span>
												</div>
											</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
				</TableContainer>
			}
			{ pagesTotal 
			&& pagesTotal > 1 
			&& <Pagination 
				count={pagesTotal} 
				color="primary"
				onChange={(_, value) => {
					pageHandler(value);
				}}
			/>}
			</div>
		</section>
	)
}

export default CoinsList;