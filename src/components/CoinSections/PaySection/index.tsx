import { useState } from 'react';
import PurchaseCoin  from '../PayForms/purchase';
import SaleCoin from '../PayForms/sale';
import MyButton from '../../UI/MyButton';

enum PayForms {
	PURCHASE = 'PURCHASE',
	SALE = 'SALE'
}

interface Props {
	coinUUID: string, 
	coinName: string | undefined,
}

const PaySection: React.FC<Props> = ({coinUUID, coinName}) => {
	let currentForm;
	const [activeForm, setActiveForm] = useState(PayForms.PURCHASE);
	const payFormValues = Object.values(PayForms);
	

	const ActiveFormHandler = (form:PayForms) => {
		setActiveForm(form);
	}

	switch (activeForm) {
		case PayForms.PURCHASE:
			currentForm = <PurchaseCoin coinUUID={coinUUID} coinName={coinName}/>
			break;
		case PayForms.SALE:
			currentForm = <SaleCoin coinUUID={coinUUID} coinName={coinName}/>
			break;
	}

	return (
		<section className={`panel_section`}>
			<div className="header">
				<div className="actions_wrap">
					
				{payFormValues.map((form) => (
						<MyButton
							key={form}
							classes={`${activeForm === form ? 'active' : ''}`}
							text={form}
							onсlick={() => ActiveFormHandler(form)}
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