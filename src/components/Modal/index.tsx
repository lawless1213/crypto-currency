import MyButton from '../UI/MyButton';
import { useModalServices } from '../../services/ModalServices';
import { useAppSelector } from '../../hooks/redux';
import { ModalView } from 'models/IModals';
import Login from './Blocks/Login';
import SignUp from './Blocks/SignUp';
import Success from './Blocks/Success';
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
			case ModalView.SUCCESS:
				return <Success/>
		}
	}
	

	return (
		<div className={`modal ${s.ModalLayout}`}>
			<div className={s.Overlay} onClick={closeModalHandler}></div>
			<div className={`panel_section middle_section ${s.Popup}`}>
				<div className={`header ${s.Header}`}>
					<div className="title">{modalView}</div>
					<MyButton onClick={closeModalHandler} classes='info big' icon={<IoMdClose />} asLink={true}/>
				</div>
				<div className={`content column ${s.Content}`}>
					{getModalBlock()}
				</div>
			</div>
		</div>
	)	
}

export default ModalLayout;