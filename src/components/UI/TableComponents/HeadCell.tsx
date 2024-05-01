import { TableCell } from "@mui/material";

type ClickHandler = (value:string) => void;

interface Props {
	item: string,
	classes?: string,
	contentClasses?: string,
	icon?: JSX.Element,
	onclick?: ClickHandler,
}

const HeadCell: React.FC<Props> = ({item, icon, classes, contentClasses, onclick}) => {
	const classNames = `table_cell head_cell ${classes} ${onclick ? 'clickable' : ''}`;
	const contentClassNames = `content row ${contentClasses || ''}`;
	const handleClick = onclick ? () => onclick(item) : undefined;

	return(
		<TableCell onClick={handleClick} className={classNames}>
			<div className={contentClassNames}>
				<span className="caption">{item}</span>
				{	icon }
			</div>
		</TableCell>
	)
}

export default HeadCell;