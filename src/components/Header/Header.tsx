import ThemeToggler from '../ThemeToggler/ThemeToggler';
import PanelUser from '../PanelUser/PanelUser';

import s from './Header.module.scss';

const Header = () => {
	return (
		<header className={`${s.Header} header panel_section`}>
			<div className={`${s.Content} content`}>
				<div className="space" style={{flex: 1}}></div>
				<ThemeToggler width="60px"/>
				<PanelUser/>
			</div>
		</header>
	)
}

export default Header;