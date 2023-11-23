interface Props {
	classes?: string,
	text?: string,
	icon?: JSX.Element,
	type?: string,
	colorStyle?: string,
	form?: string,
	size?: string,
}

const MyButton = ({text, icon, type, colorStyle, form, size, classes}: Props) => {
	const classNames = `button ${colorStyle ?? ''} ${type ?? ''} ${size ?? ''} ${form ?? ''} ${classes ?? ''}`

	return (
		<div className={classNames}>
			{icon ? <i className="icon">{icon}</i> : ''}
			{text ? <span className="caption">{text}</span> : ''}
		</div>
	)
}

export default MyButton;