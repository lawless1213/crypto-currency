import { TableCell } from "@mui/material";

interface Props {
	item: string,
	classes?: string,
	icon?: JSX.Element,
	children: string | JSX.Element | JSX.Element[],
}

const HeadCell: React.FC<Props> = ({item, icon, classes, children}) => {
	const classNames = `table_cell head_cell ${classes} ${onclick ? 'clickable' : ''}`;

	return(
		<TableCell className={classNames}>
			<div className='content row'>
				<span className="caption">{item}</span>
				{	icon }
			</div>
		</TableCell>
	)
}

export default HeadCell;