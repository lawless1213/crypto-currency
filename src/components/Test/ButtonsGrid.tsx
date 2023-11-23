import MyButton from "../UI/MyButton/MyButton";
import s from './ButtonsGrid.module.scss';
import { FaPlus } from "react-icons/fa6";

const ButtonsGrid = () => {
	const colorStyle = ['', 'primary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	const types = ['', 'soft', 'border', 'white', 'disabled'];
	const sizes = ['small', '', 'big'];

	return (
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
												<MyButton colorStyle={style} type={type} size={size} icon={<FaPlus/>} classes='compact'/>
												<MyButton text={style ? style : 'default'} colorStyle={style} type={type} size={size} classes='rounded'/>
												<MyButton text={style ? style : 'default'} colorStyle={style} type={type} size={size} icon={<FaPlus/>}/>
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
	)
}

export default ButtonsGrid;