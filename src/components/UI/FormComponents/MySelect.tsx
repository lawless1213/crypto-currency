import Select from 'react-select';
import makeAnimated from 'react-select/animated';

type changeHandler = (value:string) => void;
type OptionType = { value: string; label: string };

interface Props {
	options: OptionType[] | string[],
  defaultValue?: OptionType | string,
	search?: boolean,
  customClassName?: string,
	onchange: changeHandler,
}


const MySelect: React.FC<Props> = ({ options, defaultValue, customClassName, search, onchange }) => {
    const convertToOptionType = (value: string): OptionType => ({
      value,
      label: value,
    });
  
    const convertedOptions: OptionType[] = Array.isArray(options)
        ? (options as string[]).map(convertToOptionType)
        : (options as OptionType[]);

    const convertedDefaultValue: OptionType = typeof defaultValue === 'string'
        ? convertToOptionType(defaultValue as string)
        : defaultValue as OptionType;
        
  
    const animatedComponents = makeAnimated();
    const isSearchable = search || false;
  
    const changeHandler = (newValue: any) => {
      if (newValue && 'value' in newValue) {
        const { value } = newValue as OptionType;
        onchange(value);
      }
    };
  
    return (
      <Select
        className={customClassName ?? 'select'}
        classNamePrefix={customClassName ?? 'select'}
        isSearchable={isSearchable}
        // closeMenuOnScroll={true}
        menuPlacement={'auto'}
        options={convertedOptions}
        defaultValue={convertedDefaultValue}
        onChange={changeHandler}
        components={animatedComponents}
      />
    );
  };
  
  export default MySelect;