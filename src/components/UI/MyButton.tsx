type ClickHandler = () => void;

interface Props {
	classes?: string,
	text?: string,
	icon?: JSX.Element,
	onclick?: ClickHandler,
	asLink?: boolean, 
	type?: string,
}

const MyButton: React.FC<Props> = ({text, icon, classes, onclick, asLink = false, type}) => {
	const classNames = `${!asLink ? 'button' : 'link'} ${classes}`

	return (
		<button onClick={onclick} className={classNames}>
			{icon && <i className="icon">{icon}</i>}
			{text && <span className="caption">{text}</span>}
		</button>
	)
}

export default MyButton;