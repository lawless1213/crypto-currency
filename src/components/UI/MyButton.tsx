type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface Props {
	classes?: string,
	text?: string,
	icon?: JSX.Element,
	onClick?: ClickHandler,
	asLink?: boolean, 
	type?: string,
	successUpdate?: boolean,
}

const MyButton: React.FC<Props> = ({text, icon, classes, onClick, asLink = false, type, successUpdate}) => {
	const classNames = `${!asLink ? 'button' : 'link'} ${ successUpdate ? 'successUpdate' : '' } ${classes}`

	return (
		<button onClick={onClick} className={classNames}>
			{icon && <i className="icon">{icon}</i>}
			{text && <span className="caption">{text}</span>}
			{successUpdate && 
				<div className="success-animation">
					<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
				</div>
			}
			
		</button>
	)
}

export default MyButton;