interface Props {
	classes?: string,
	text?: string,
	icon?: JSX.Element,
}

const MyBadge = ({text, icon, classes}: Props) => {
	const classNames = `badge ${classes}`

	return (
		<div className={classNames}>
			{icon ? <i className="icon">{icon}</i> : ''}
			{text ? <span className="caption t-caption">{text}</span> : ''}
		</div>
	)
}

export default MyBadge;