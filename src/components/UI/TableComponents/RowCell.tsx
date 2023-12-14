import { TableCell } from "@mui/material";

interface Props {
	classes?: string,
	contentClasses?: string,
	children: string | JSX.Element | JSX.Element[],
}

const RowCell: React.FC<Props> = ({classes, contentClasses, children}) => {
	const classNames = `table_cell row_cell ${classes}`;
	const contentClassNames = `content ${contentClasses}`;

	return(
		<TableCell className={classNames}>
			<div className={contentClassNames}>
				{children}
			</div>
		</TableCell>
	)
}

export default RowCell;