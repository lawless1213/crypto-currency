import { CoinAPI } from "../../services/CoinService";
import { ICoin } from "../../models/ICoin";
import { setCurrency, isIncrementalChange } from "../../services/CoinService";

import {
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

import s from './CoinsListCompact.module.scss';


const CoinsListCompact = () => {
	const limit = 4;
	const { data: dataCoins, error, isLoading } = CoinAPI.useFetchAllCoinsQuery(limit);

	const coins: ICoin[] | undefined = dataCoins?.data.coins;

	return (
		<section className={`${s.CoinsList} ${isLoading ? 'loading' : ''} ${error ? 'error' : ''} panel_section`}>
			<div className="header">
				<span className="t-lead">Compact</span>
			</div>
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
													<div className={`${s.ChangeCell} ${Math.abs(Number(coin.change)) === 0 ? '' : (isIncrementalChange(coin) ? s.Incremental : s.Falling)}`}>
														<span>{Math.abs(Number(coin.change))}%</span>
														{Math.abs(Number(coin.change)) !== 0 && (isIncrementalChange(coin) ? <FaArrowTrendUp/> : <FaArrowTrendDown/>)}
													</div>
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
		</section>
	)
}

export default CoinsListCompact;