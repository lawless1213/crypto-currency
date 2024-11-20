import MyBadge from "../UI/MyBadge";
import s from './BadgesGrid.module.scss';
import { icons } from 'components/Icons';


const BadgesGrid = () => {
	const colorStyle = ['', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	const types = ['', 'soft', 'border', 'transparent'];

	return (
		<div className="panel_section">
			<div className="header">
				<div className="t-h2">BADGES</div>
			</div>
			<div className="content">
				<div className={s.BadgesGrid}>
					{
						colorStyle.map(style => 
							<div className={s.Column}>
								{
									types.map(type => 
										<div className={s.Block}>
											<MyBadge text={style ? style : 'default'} icon={ icons.PLUS } classes={`${style} ${type}`}/>
										</div>
									)
								}
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default BadgesGrid;