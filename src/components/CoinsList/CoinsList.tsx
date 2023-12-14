import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDelayedData } from "../../hooks/delay";
import { CoinAPI, availableSort } from "../../services/CoinService";
import { ICoin } from "../../models/ICoin";
import { IStats } from "../../models/IStats";
import { useAppSelector } from '../../hooks/redux';
import { setCurrency, setAmount, isIncrementalChange } from "../../services/CoinService";
import { ApiParams } from "../../models/IAPI";
import { CoinsCharacter, TableTypes } from "../../data/coins";
import { user } from "../../data/user";
import { toggleOrder } from "../../store/reducers/tablesParamsSlice";

import {
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import { FaRegStar, FaStar, FaSortAmountDown } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import MyBadge from "../UI/MyBadge";
import MyPagination from "../UI/MyPagination";
import MySelect from "../UI/MySelect";
import MyTabs from "../UI/MyTabs";
import HeadCell from "../UI/TableComponents/HeadCell";

import s from './CoinsList.module.scss';
interface Props {
	type?: TableTypes,
	title: string,
	requiredCoins?: string[],
}

const CoinsList: React.FC<Props> = ({type, title, requiredCoins}: Props) => {
	const dispatch = useDispatch();
	const tableType = type ?? TableTypes.COIN_MAIN;
	const tableParams = useAppSelector(state => state.TablesParamsReducer.coinTables[tableType]);

	const [countRow, setCountRows] = useState(Number(tableParams.defaultValues.rows));
	const [page, setPage] = useState(1);
	const [period, setPeriod] = useState(tableParams.defaultValues && tableParams.defaultValues.period);

	let params: ApiParams = {
		limit: countRow,
		offset: page > 1 ? (countRow * (page - 1)).toString() : '0',
		timePeriod: period,
		'symbols[0]': requiredCoins ? requiredCoins.join() : undefined,
		orderBy: tableParams.defaultValues.order ?? CoinsCharacter.MARKETCAP,
	};

	const { data: dataCoins, error, isLoading } = CoinAPI.useFetchAllCoinsQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataCoins });
	
	const coins: ICoin[] | undefined = displayData?.data.coins;
	const stats: IStats | undefined = displayData?.data.stats;
	const pagesTotal: number = stats?.total && coins ? Math.ceil(stats?.total / params.limit)  : 0;
	const periodVariants: string[] = tableParams.periodValues;
	const rowsVariants: string[] | undefined = tableParams.rowsValues;
	
	const periodHandler = ( value: string) => {
		setPeriod(value);
	}

	const pageHandler = ( value: number) => {
		setPage(value);
	}

	const rowsHandler = ( value: number) => {
		setCountRows(value);
		pageHandler(1);
	}

	const orderHandler = (value: CoinsCharacter) => {
		dispatch(toggleOrder({table: tableType, order: value}));
	}

	const tableColumns: CoinsCharacter[] = Object.values(tableParams.columns)
  	.filter(column => column.show)
		.map(column => column.title as CoinsCharacter);

	const tableColumnsHead = tableColumns.map(item => {
		const isSorting: boolean = availableSort.includes(item);
		const element: JSX.Element = isSorting ? 
		<HeadCell 
			item={item} 
			icon={	tableParams.defaultValues.order === item ? <i className="icon"><FaSortAmountDown /></i> : undefined }
			onclick={() => orderHandler(item)}
		/> 
		: 
		<HeadCell item={item} />

		return element;
	})

	return (
		<section className={`${s.CoinsList} ${loading ? 'loading' : ''} ${error ? 'error' : ''}  panel_section`}>
			<div className="header">
				<div className="section_title t-h2">{title}</div>
				{
					periodVariants &&
					<MyTabs onchange = { periodHandler } value={period} items = {tableParams.periodValues} />
				}
				</div>
			
			<div className={`content ${error ? '' : 'no_padding'}`}>
				{error && <h1>Error...</h1>}
				{coins && coins?.length > 0 && 
					<TableContainer className={s.TableWrap} component={Paper}>
						<Table className={s.Table} aria-label="simple table">
							<TableHead className={s.TableHead}>
								<TableRow className={s.TableRow}>{tableColumnsHead}</TableRow>
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
											{
												tableColumns.includes(CoinsCharacter.PRICE) &&
												<TableCell
													className={s.TableCell}
													component="th"
													scope="row"
												>
													<div className={s.Content}>
														<span>{setCurrency(coin.price)}</span>
													</div>
												</TableCell>
											}
											{
												tableColumns.includes(CoinsCharacter.CHANGE) &&
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
											}
											{
												tableColumns.includes(CoinsCharacter.VOLUME24) &&
												<TableCell
													className={s.TableCell}
													component="th"
													scope="row"
												>
													<div className={s.Content}>
														<span>{setCurrency(coin["24hVolume"])}</span>
													</div>
												</TableCell>
											}
											{
												tableColumns.includes(CoinsCharacter.MARKETCAP) &&
												<TableCell
													className={s.TableCell}
													component="th"
													scope="row"
												>
													<div className={s.Content}>
														<span>{setCurrency(coin.marketCap)}</span>
													</div>
												</TableCell>
											}
											{
												tableColumns.includes(CoinsCharacter.COUNT) &&
												<TableCell
													className={s.TableCell}
													component="th"
													scope="row"
												>
													<div className={s.Content}>
														<span className="t-h5">{user.portfolio.counts[coin.symbol] ?? 0}</span>
														<span className="t-caption">{setAmount(user.portfolio.counts[coin.symbol], coin.price)}</span>
													</div>
												</TableCell>
											}
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
					</TableContainer>
				}
			</div> 
			<div className="footer">
				{
					pagesTotal > 1 && 
					<MyPagination page={page} countPages={pagesTotal} onchange={ pageHandler }/>
				}
				{
					rowsVariants  && 
					<MySelect onchange = { rowsHandler } value={countRow} items = {rowsVariants} />
				}
			</div>

			
		</section>
	)
}

export default CoinsList;