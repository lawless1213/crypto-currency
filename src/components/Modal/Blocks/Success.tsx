import { useModalServices } from '../../../services/ModalServices';
import MyButton from '../../UI/MyButton';

const Success = () => {
	const { closeModalHandler } = useModalServices();

	return (
		<div className="actions_wrap center">
			<MyButton 
				classes='primary border'
				text='DONE'
				onClick={closeModalHandler}
			/>
		</div>
	)
}

export default Success;