import MyButton from "../UI/MyButton";
import s from './ButtonsGrid.module.scss';
import { FaPlus } from "react-icons/fa6";

const ButtonsGrid = () => {
	const colorStyle = ['', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	const types = ['', 'soft', 'border', 'white', 'disabled'];
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
														<MyButton icon={<FaPlus/>} classes={`compact ${style} ${type} ${size}`}/>
														<MyButton text={style ? style : 'default'} classes={`rounded ${style} ${type} ${size}`}/>
														<MyButton text={style ? style : 'default'} icon={<FaPlus/>} classes={`${style} ${type} ${size}`}/>
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