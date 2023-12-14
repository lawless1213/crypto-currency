import { TableCell } from "@mui/material";

type ClickHandler = (value:string) => void;

interface Props {
	item: string,
	classes?: string,
	icon?: JSX.Element,
	onclick?: ClickHandler,
}

const HeadCell: React.FC<Props> = ({item, icon, classes, onclick}) => {
	const classNames = `table_cell head_cell ${classes} ${onclick ? 'clickable' : ''}`;
	const handleClick = onclick ? () => onclick(item) : undefined;

	return(
		<TableCell onClick={handleClick} className={classNames}>
			<div className='content row'>
				<span className="caption">{item}</span>
				{	icon }
			</div>
		</TableCell>
	)
}

export default HeadCell;