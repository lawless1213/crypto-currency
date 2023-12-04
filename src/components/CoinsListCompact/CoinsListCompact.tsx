import { CoinAPI } from "../../services/CoinService";
import { ICoin } from "../../models/ICoin";
import { setCurrency, isIncrementalChange } from "../../services/CoinService";
import { useDelayedData } from "../../hooks/delay";

import {
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import MyBadge from "../UI/MyBadge";

import s from './CoinsListCompact.module.scss';
import Params from "../../data/params";

interface Props {
	sortType: 'price' | 'change' | 'listedAt'
}

const CoinsListCompact: React.FC<Props> = ({sortType}) => {
	const params = {
		limit: 4,
		orderBy: sortType,
	};

	const { data: dataCoins, error } = CoinAPI.useFetchAllCoinsQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataCoins });

	const coins: ICoin[] | undefined = displayData?.data.coins;

	return (
		<section className={`${s.CoinsList} ${loading ? 'loading' : ''} ${error ? 'error' : ''} panel_section`}>
			{!loading &&
				<div className="header">
					<span className="t-lead">{Params.coinsSections.sortedByTitle[sortType]}</span>
				</div>
			}

			{!loading &&
				<div className={`content ${error ? '' : 'no_padding'}`}>
					{error && <h1>Error...</h1>}
					{coins && 
						<TableContainer className={s.TableWrap} component={Paper}>
							<Table className={s.Table} aria-label="simple table">
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
													className={`${s.TableCell}`}
													component="th"
													scope="row"
												>
													<div className={s.Content}>
														<span>{setCurrency(coin.price)}</span>
														<MyBadge 
															text={`${Math.abs(Number(coin.change))}%`} 
															icon={Math.abs(Number(coin.change)) === 0 ? null : (isIncrementalChange(coin) ? <FaArrowTrendUp/> : <FaArrowTrendDown/>)} 
															classes={Math.abs(Number(coin.change)) === 0 ? 'soft' : (isIncrementalChange(coin) ? 'success soft' : 'danger soft')}
														/>
													</div>
												</TableCell>
											</TableRow>
										)
									})}
								</TableBody>
							</Table>
					</TableContainer>
				}
				</div>
			}
		</section>
	)
}

export default CoinsListCompact;