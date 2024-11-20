import CreditCardSVG from 'components/UI/CreditCard';
import { useModalServices } from '../../../services/ModalServices';

const Deposit = () => {
	const { closeModalHandler } = useModalServices();

	return (
		<CreditCardSVG
			name="ANDREW"
			number="5344 0566 5566 5556"
			expiration="12/28"
			securityCode="123"
		/>
	)
}

export default Deposit;