import { NavLink } from "react-router-dom";
import Params from "../../../data/params";

import s from './MyLogo.module.scss'

interface Props {
	compact?: boolean,
	size?: 'big' | 'small',
	isLink?: boolean,
}

const MyLogo: React.FC<Props> = ({compact, isLink, size}: Props) => {
	return (
		<NavLink
			className={`logo ${s.Logo} ${size && s[size]}`}
			to='/'
		>
			<div className={`logo_image ${s.Image}`}>
				<img src={Params.logo} alt="" />
			</div>
			{!compact && <span className={`${s.Caption} logo_caption t-lead`}>{Params.title}</span>}
		</NavLink>
	)
}

export default MyLogo;