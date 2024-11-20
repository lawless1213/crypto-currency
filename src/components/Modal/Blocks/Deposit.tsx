import { useModalServices } from '../../../services/ModalServices';
import MyButton from '../../UI/MyButton';

const Deposit = () => {
	const { closeModalHandler } = useModalServices();

	return (
		<div className="actions_wrap center">
			<MyButton 
				classes='primary border'
				text='DEPOSIT'
				onClick={closeModalHandler}
			/>
		</div>
	)
}

export default Deposit;