import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDelayedData } from "../../hooks/delay";
import { CoinAPI, availableSort } from "../../services/CoinService";
import { ICoin } from "../../models/ICoin";
import { IStats } from "../../models/IStats";
import { useAppSelector } from '../../hooks/redux';
import { ApiParams } from "../../models/IAPI";
import { CoinsCharacter, TableTypes } from "../../data/coins";
import { toggleOrder } from "../../store/reducers/tablesParamsSlice";

import {
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import { FaSortAmountDown } from "react-icons/fa";
import MyPagination from "../UI/MyPagination";
import MyTabs from "../UI/MyTabs";
import HeadCell from "../UI/TableComponents/HeadCell";
import CoinsListTableBody from "./CoinsListTableBody";
import MySelect from "../UI/FormComponents/MySelect";

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

	const { data: dataCoins, error } = CoinAPI.useFetchAllCoinsQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataCoins });
	
	const coins: ICoin[] | undefined = displayData?.data.coins;
	const stats: IStats | undefined = displayData?.data.stats;
	const pagesTotal: number = stats?.total && coins ? Math.ceil(stats?.total / params.limit)  : 0;
	const periodVariants: string[] = tableParams.periodValues;
	const rowsVariants: string[] | undefined = tableParams.rowsValues;
	
	// Handlers
	const periodHandler = ( value: string) => {
		setPeriod(value);
	}

	const pageHandler = ( value: number) => {
		setPage(value);
	}

	const rowsHandler = ( value: string) => {
		setCountRows(Number(value));
		pageHandler(1);
	}

	const orderHandler = (value: CoinsCharacter) => {
		dispatch(toggleOrder({table: tableType, order: value}));
	}

	// Columns
	const tableColumns: CoinsCharacter[] = Object.values(tableParams.columns)
  	.filter(column => column.show)
		.map(column => column.title as CoinsCharacter);

	// Head cells
	const tableColumnsHead = tableColumns.map(item => {
		const isSorting: boolean = availableSort.includes(item);
		const element: JSX.Element = isSorting ? 
		<HeadCell 
			key={item}
			item={item} 
			icon={	tableParams.defaultValues.order === item ? <i className="icon"><FaSortAmountDown /></i> : undefined }
			onclick={() => orderHandler(item)}
		/> 
		: 
		<HeadCell item={item} />

		return element;
	})

	return (
		<section className={`panel_section table_section ${loading ? 'loading' : ''} ${error ? 'error' : ''}`}>
			<div className="header">
				<div className="section_title t-h2">{title}</div>
			</div>

			<div className={`content ${error ? '' : 'no_padding'}`}>
				{error && <h1>Error...</h1>}
				{ periodVariants && <MyTabs onchange = { periodHandler } value={period} items = {tableParams.periodValues} /> }
				{!error && coins && 
					<TableContainer className='table_wrap' component={Paper}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									{tableColumnsHead}
								</TableRow>
							</TableHead>
							<CoinsListTableBody tableColumns={tableColumns} coins={coins}/>
						</Table>
					</TableContainer>
				}
			</div> 

			<div className="footer">
				{ rowsVariants  && <MySelect options={rowsVariants} defaultValue={countRow.toString()} onchange = { rowsHandler } /> }
				{ pagesTotal > 1 && <MyPagination page={page} countPages={pagesTotal} onchange={ pageHandler }/> }
			</div>
		</section>
	)
}

export default CoinsList;