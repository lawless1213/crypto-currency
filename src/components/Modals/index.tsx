import MyButton from '../UI/MyButton';
import { useModalServices } from '../../services/ModalServices'
import { useAppSelector } from '../../hooks/redux';
import { ModalView } from 'models/IModals';
import Login from './Login';
import SignUp from './SignUp';
import { IoMdClose } from "react-icons/io";

import s from './index.module.scss';

const ModalLayout = () => {
	const { closeModalHandler } = useModalServices();
  let { modalView } = useAppSelector(state => state.modals);

	const getModalBlock = () => {
		switch (modalView) {
			case ModalView.SIGNIN:
				return <Login/>
			case ModalView.SIGNUP:
				return <SignUp/>
		}
	}
	

	return (
		<div className={s.ModalLayout}>
			<div className={s.Overlay}></div>
			<div className={s.Popup}>
				<div className={s.Header}>
					<div className="title">{modalView}</div>
					<MyButton onclick={closeModalHandler} classes='info' icon={<IoMdClose />} asLink={true}/>
				</div>
				<div className={s.Content}>
					{getModalBlock()}
				</div>
			</div>
		</div>
	)	
}

export default ModalLayout;