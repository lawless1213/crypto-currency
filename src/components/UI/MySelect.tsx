import { InputLabel , MenuItem, FormControl, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

type changeHandler = (value:number) => void;

interface Props {
	value: number,
	items: string[],
	label?: string,
	classes?: string,
	onchange: changeHandler,
}

const MySelect: React.FC<Props> = ({value, items, classes, label, onchange}) => {
	const classNames = ``;

	const handleChange = (event: SelectChangeEvent) => {
    onchange(Number(event.target.value));
  };

	const listItems = items.map(item => <MenuItem key={item} value={Number(item)}>{item}</MenuItem>);

	return (
		<FormControl variant="standard" className={classNames} sx={{ m: 1, minWidth: 120 }}>
				{label && <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value.toString()}
          onChange={handleChange}
          label="Age"
        >
          {listItems}
        </Select>
      </FormControl>
	)
}

export default MySelect;