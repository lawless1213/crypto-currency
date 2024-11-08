import { useState, useEffect } from 'react';
import PurchaseCoin  from '../PayForms/purchase';
import SaleCoin from '../PayForms/sale';
import MyButton from '../../UI/MyButton';
import { useGetPortfolioItem } from "../../../hooks/usePortfolio";
import { setAmount, setCurrency } from 'services/CoinService';
import { ICoinDetail } from 'models/ICoinDetail';


enum PayForms {
	PURCHASE = 'PURCHASE',
	SALE = 'SALE'
}

interface Props {
	coin: ICoinDetail,
}

const PaySection: React.FC<Props> = ({coin}) => {
	let currentForm;
	const PortfolioItem = useGetPortfolioItem();
	const [value, setValue] = useState(PortfolioItem(coin.uuid));

	useEffect(() => {
		setValue(Number(PortfolioItem(coin.uuid)))
	}, [PortfolioItem(coin.uuid)])
	
	
	const [activeForm, setActiveForm] = useState(PayForms.PURCHASE);
	const payFormValues = Object.values(PayForms);
	
	const ActiveFormHandler = (form:PayForms) => {
		setActiveForm(form);
	}

	switch (activeForm) {
		case PayForms.PURCHASE:
			currentForm = <PurchaseCoin coinUUID={coin.uuid} coinName={coin.name}/>
			break;
		case PayForms.SALE:
			currentForm = <SaleCoin coinUUID={coin.uuid} coinName={coin.name}/>
			break;
	}

	return (
		<section className={`panel_section`}>
			<div className="header">
				<div>Your amount: {setCurrency(value, coin.symbol)}</div>
				<div>{setAmount(value, coin.price)}</div>
				
			</div>
			<div className="content">
				<div className="actions_wrap no_space group_buttons">
					{payFormValues.map((form) => (
						<MyButton
							key={form}
							classes={`button primary small ${activeForm === form ? 'active' : 'border'}`}
							text={form}
							onClick={() => ActiveFormHandler(form as PayForms)}
						/>
					))}
				</div>
			</div>
			<div className={`content`}>
				{currentForm}
			</div>
		</section>
	)
}

export default PaySection;