import { useState } from "react";
import { CoinAPI } from "../../services/CoinService";
import { ICoin } from "../../models/ICoin";

import { makeStyles } from '@mui/styles';
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";

import s from './CoinsList.module.scss';


const CoinsList = () => {
	const [limit, setLimit] = useState(5);
	const { data: dataCoins, error, isLoading } = CoinAPI.useFetchAllCoinsQuery(limit);

	const coins: ICoin[] | undefined = dataCoins?.data.coins;

	const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const classes = useStyles();

	return (
		<section className={`${s.CoinsList} panel_section`}>
			<div className="content no_padding">
				{isLoading && <h1>Loading...</h1>}
				{error && <h1>Error...</h1>}
				{coins && 
					<TableContainer className={s.Table} component={Paper}>
						<Table aria-label="simple table">
							<TableHead>
								<TableRow>
									{["Coin", "Price", "24h Change"].map((head) => (
										<TableCell
											key={head}
										>
											{head}
										</TableCell>
									))}
								</TableRow>
							</TableHead>

							<TableBody>
								{coins.map (coin => {
									return (
										<TableRow>
										<TableCell
											component="th"
											scope="row"
										>
											<img
												src={coin.iconUrl}
												alt=""
											/>
											<span>{coin.name}</span>
										</TableCell>
										<TableCell
											component="th"
											scope="row"
										>
											<span>{coin.price}</span>
										</TableCell>
										<TableCell
											component="th"
											scope="row"
										>
											<span>{coin.change}</span>
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