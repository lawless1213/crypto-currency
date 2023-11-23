import s from './LinksGrid.module.scss';
import { FaPlus } from "react-icons/fa6";

const LinksGrid = () => {
	const colorStyle = ['', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	const sizes = ['small', '', 'big'];

	return (
		<div className={s.LinksGrid}>
			{
				colorStyle.map(style => 
					<div className={s.Column}>
						{
							sizes.map(size =>
								<div className={`link ${style} ${size}`}>
									<i className="icon"><FaPlus/></i>
									<span className="caption">{style ? style : 'default'}</span>
								</div>
							)
						}
					</div>
				)
			}
		</div>
	)
}

export default LinksGrid;