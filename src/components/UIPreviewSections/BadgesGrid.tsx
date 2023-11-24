import MyBadge from "../UI/MyBadge";
import s from './BadgesGrid.module.scss';
import { FaPlus } from "react-icons/fa6";

const BadgesGrid = () => {
	const colorStyle = ['', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	const types = ['', 'soft', 'border'];

	return (
		<div className={s.BadgesGrid}>
			{
				colorStyle.map(style => 
					<div className={s.Column}>
						{
							types.map(type => 
								<div className={s.Block}>
									<MyBadge text={style ? style : 'default'} icon={<FaPlus/>} classes={`${style} ${type}`}/>
								</div>
							)
						}
					</div>
				)
			}
		</div>
	)
}

export default BadgesGrid;