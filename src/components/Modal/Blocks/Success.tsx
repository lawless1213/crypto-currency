import { useModalServices } from '../../../services/ModalServices';
import MyButton from '../../UI/MyButton';

const Success = () => {
	const { closeModalHandler } = useModalServices();

	return (
		<div className="actions_wrap center">
			<MyButton 
				classes='primary rounded border'
				text='DONE'
				onclick={closeModalHandler}
			/>
		</div>
	)
}

export default Success;