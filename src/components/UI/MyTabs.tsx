import { Tabs, Tab } from '@mui/material';

type changeHandler = (value:string) => void;

interface Props {
	value: string,
	items: string[],
	classes?: string,
	onchange: changeHandler,
}

const MyTabs: React.FC<Props> = ({value, items, classes, onchange}) => {
	const listItems = items.map(item => <Tab disableRipple className='link info' key={item} value={item} label={item}></Tab>);
	const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
		onchange(newValue);
	};

	return (
		<Tabs
			value={value}
			onChange={handleTabChange}
			aria-label="tabs"
		>
			{listItems}
		</Tabs>
	)
}

export default MyTabs;