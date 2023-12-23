import Select, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';

type changeHandler = (value:number) => void;
type OptionType = { value: string; label: string };

interface Props {
	options: OptionType[],
	search?: boolean,
	onchange: changeHandler,
}


const MySelect: React.FC<Props> = ({options, search, onchange}) => {
    const animatedComponents = makeAnimated();
    const isSearchable = search || false;
    const defaultValue: OptionType | null = { value: '1', label: '1' };

    const toggleLanguageHandler = (
        newValue: any, // or ValueType<OptionType>
        actionMeta: ActionMeta<OptionType>
    ) => {
        if (newValue && 'value' in newValue) {
            const { value } = newValue as OptionType;
            console.log(value);
        }
    };

    return (
        <Select
            className="select select-language"
            classNamePrefix="select"
            isSearchable={isSearchable}
            options={options}
            defaultValue={defaultValue}
            onChange={toggleLanguageHandler}
            components={animatedComponents}
        />
    );
};

export default MySelect;