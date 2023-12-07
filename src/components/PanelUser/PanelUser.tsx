import { user } from '../../data/user';
import s from './PanelUser.module.scss';

const PanelUser = () => {
	return (
		<div className={s.PanelUser}>
			<div className={`${s.Name} t-h5`}>{user.firstName} {user.lastName}</div>
		</div>
	)
}

export default PanelUser;