import { TableCell } from "@mui/material";

type ClickHandler = (value:string) => void;

interface Props {
	item: string,
	classes?: string,
	contentClasses?: string,
	icon?: JSX.Element,
	onClick?: ClickHandler,
}

const HeadCell: React.FC<Props> = ({item, icon, classes, contentClasses, onClick}) => {
	const classNames = `table_cell head_cell ${classes} ${onClick ? 'clickable' : ''}`;
	const contentClassNames = `content row ${contentClasses || ''}`;
	const handleClick = onClick ? () => onClick(item) : undefined;

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