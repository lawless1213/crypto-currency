import usePagination from '@mui/material/usePagination';
import { icons } from 'components/Icons';

type ChangeHandler = ( value: number) => void;

interface Props {
	countPages: number,
	onchange: ChangeHandler,
	page: number,
	classes? : string,
	classesBtn?: string,
}

const MyPagination: React.FC<Props> = ({countPages, onchange, page, classes, classesBtn}) => {
	const ArrowComponents = {
		first:  icons.ARROW_LEFT_DOUBLE,
		previous:  icons.ARROW_LEFT,
		next: icons.ARROW_RIGHT,
		last:  icons.ARROW_RIGHT_DOUBLE,
	}

	const classNames = `pagination ${classes}`;
	const classBtnNames = classesBtn ?? 'link info';

	const { items } = usePagination({
    count: countPages,
		page: page,
		onChange: (e, value) => onchange(value),
  });
	

	const listItems = items.map(({ page, type, selected, ...item }, index) => {
		let children = null;

		if (type === 'start-ellipsis' || type === 'end-ellipsis') {
			children = (
				<button
					className={`${classBtnNames} transparent disabled`}
					type="button"
				>
					<span className="caption">...</span>
				</button>
			);
		} else if (type === 'page') {
			children = (
				<button
					className={`${classBtnNames} ${selected && 'active'}`}
					type="button"
					{...item}
				>
					<span className="caption">{page}</span>
				</button>
			);
		} else {
			children = (
				<button 
					className={classBtnNames}
					type="button" 
					{...item}
				>
					<i className="icon">
						{ArrowComponents[type]}
					</i>
				</button>
			);
		}

		return <li key={index}>{children}</li>;
	});

	return (
		<ul className={classNames}>{listItems}</ul>
	)
}

export default MyPagination;