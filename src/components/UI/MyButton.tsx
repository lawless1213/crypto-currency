interface Props {
	classes?: string,
	text?: string,
	icon?: JSX.Element,
}

const MyButton = ({text, icon, classes}: Props) => {
	const classNames = `button ${classes}`

	return (
		<div className={classNames}>
			{icon ? <i className="icon">{icon}</i> : ''}
			{text ? <span className="caption">{text}</span> : ''}
		</div>
	)
}

export default MyButton;