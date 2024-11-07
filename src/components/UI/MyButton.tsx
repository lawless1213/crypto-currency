type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface Props {
	classes?: string,
	text?: string,
	icon?: JSX.Element,
	onClick?: ClickHandler,
	asLink?: boolean, 
	type?: string,
}

const MyButton: React.FC<Props> = ({text, icon, classes, onClick, asLink = false, type}) => {
	const classNames = `${!asLink ? 'button' : 'link'} ${classes}`

	return (
		<button onClick={onClick} className={classNames}>
			{icon && <i className="icon">{icon}</i>}
			{text && <span className="caption">{text}</span>}
		</button>
	)
}

export default MyButton;