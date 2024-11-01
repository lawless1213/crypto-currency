import { CoinPriceHistoryApiParams } from "../../../models/IAPI";
import { CoinAPI } from "../../../services/CoinService";
import { useDelayedData } from "../../../hooks/delay";
import { ICoinPriceHistory } from "../../../models/ICoinDetail";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
	ScriptableContext,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);



interface Props {
	coinUUID: string 
}

const PriceHistory: React.FC<Props> = ({coinUUID}: Props) => {
	let params: CoinPriceHistoryApiParams = {
		uuid : coinUUID,
		timePeriod: '24h'
	}

	
	const { data: dataHistory, error } = CoinAPI.useFetchCoinPriceHistoryQuery(params);
	const { displayData, loading } = useDelayedData({ data: dataHistory });
	const coinHistory: ICoinPriceHistory[] | undefined = displayData?.data.history;

	let prices = coinHistory?.map((coin) => coin.price).reverse();
	let priceLabels = coinHistory?.map((coin) => {
    const date = new Date(coin.timestamp * 1000);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
	}).reverse();
	

	// if(coinHistory) console.log(new Date(coinHistory[0].timestamp * 1000));


	const data = {
		labels: priceLabels,
		datasets: [
			{
				fill: true,
				data:  prices,
				borderColor: "rgba(49, 157, 255, 1)",
				backgroundColor: (context: ScriptableContext<"line">) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 350);
					gradient.addColorStop(0, "rgba(49, 157, 255, 0.4)");
					gradient.addColorStop(1, "rgba(49, 157, 255, 0.0)");
					return gradient;
				},
				pointRadius: 2,
				pointHoverRadius: 10,
				pointBorderColor: "rgba(49, 157, 255, 0.0)",
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		tooltip: {
			mode: 'x' as 'x', // Включаем режим индекса
		},
		scales: {
			x: {
				grid: {
					display: false
				},
				ticks: {
					display: false
				},
				border: {
					display: false
				},
			},
			y: {
				grid: {
					display: false
				},
				ticks: {
					display: false
				},
				border: {
					display: false
				},
			}
		},
		plugins: {
			legend: {
				labels: {
					usePointStyle: true,
				}
			},
			tooltip: {
				displayColors: false,
				callbacks: {
					label: function(context:any) {
						let label = context.dataset.label || '';

						if (label) {
								label += ': ';
						}
						if (context.parsed.y !== null) {
								label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
						}
						return label;
					},
				},
			}
		}
	};

	return (
		<section className={`panel_section big_section  ${loading ? 'loading' : ''}`}>
			<div className={`content no_padding`}>
				<Line options={options} data={data} />
			</div>
		</section>
	)
} 

export default PriceHistory;