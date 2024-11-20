import MyButton from "../UI/MyButton";
import s from './ButtonsGrid.module.scss';
import { icons } from 'components/Icons';

const ButtonsGrid = () => {
	const colorStyle = ['', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	const types = ['', 'soft', 'border', 'transparent', 'white', 'disabled'];
	const sizes = ['small', '', 'big'];

	return (

		<div className="panel_section">
			<div className="header">
				<div className="t-h2">BUTTONS</div>
			</div>
			<div className="content">
				<div className={s.ButtonsGrid}>
					{
						colorStyle.map(style => 
							<div className={s.Column}>
								{
									types.map(type => 
										<div className={s.Block}>
											{
												sizes.map(size => 
													<div className={s.formBlock}>
														<MyButton icon={ icons.PLUS } classes={`compact ${style} ${type} ${size}`}/>
														<MyButton text={style ? style : 'default'} classes={`rounded ${style} ${type} ${size}`}/>
														<MyButton text={style ? style : 'default'} icon={ icons.PLUS } classes={`${style} ${type} ${size}`}/>
													</div>											
												)
											}
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

export default ButtonsGrid;