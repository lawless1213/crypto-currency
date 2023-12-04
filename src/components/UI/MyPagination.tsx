import usePagination from '@mui/material/usePagination';
import { MdKeyboardDoubleArrowLeft, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

type changeHandler = (value:number) => void;

interface Props {
	countPages: number,
	onchange: changeHandler,
	classes?: string,
}

const MyPagination: React.FC<Props> = ({countPages, onchange, classes}) => {
	const ArrowComponents = {
		first:  <MdKeyboardDoubleArrowLeft/>,
		previous:  <MdKeyboardArrowLeft/>,
		next: <MdKeyboardArrowRight/>,
		last:  <MdKeyboardDoubleArrowRight/>,
	}

	const classNames = classes ?? 'link light';

	const { items } = usePagination({
    count: countPages,
		onChange: (e, value) => onchange(value),
  });

	const listItems = items.map(({ page, type, selected, ...item }, index) => {
		let children = null;

		if (type === 'start-ellipsis' || type === 'end-ellipsis') {
			children = (
				<button
					className={`${classNames} transparent disabled`}
					type="button"
				>
					<span className="caption">...</span>
				</button>
			);
		} else if (type === 'page') {
			children = (
				<button
					className={`${classNames} ${selected ? 'active' : ''}`}
					type="button"
					{...item}
				>
					<span className="caption">{page}</span>
				</button>
			);
		} else {
			children = (
				<button 
					className={classNames}
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
		<ul className='pagination'>{listItems}</ul>
	)
}

export default MyPagination;