import { InputLabel , MenuItem, FormControl, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

type changeHandler = (value:any) => void;

interface Props {
	value: number,
	items: string[],
	classes?: string,
	onchange: changeHandler,
}

const MySelect: React.FC<Props> = ({value, items, classes, onchange}) => {
	const classNames = `testtt}`

	const handleChange = (event: SelectChangeEvent) => {
    onchange(event.target.value);
  };

	return (
		<FormControl variant="standard" className={classNames} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Rows</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value.toString()}
          onChange={handleChange}
          label="Age"
        >
          {items.map(item => <MenuItem value={Number(item)}>{item}</MenuItem>)}
        </Select>
      </FormControl>
	)
}

export default MySelect;