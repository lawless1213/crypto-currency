type ClickHandler = () => void;

interface Props {
	classes?: string,
	text?: string,
	icon?: JSX.Element,
	onclick?: ClickHandler,
}

const MyButton: React.FC<Props> = ({text, icon, classes, onclick}) => {
	const classNames = `button ${classes}`

	return (
		<div onClick={onclick} className={classNames}>
			{icon && <i className="icon">{icon}</i>}
			{text && <span className="caption">{text}</span>}
		</div>
	)
}

export default MyButton;