import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaLock } from "react-icons/fa6";
import MyButton from '../MyButton';
import { LuEye, LuEyeOff } from "react-icons/lu";

interface Props {
	name: string,
	type?: string,
	required?: boolean,
	label?: string,
	error?: string,
	startAdornment?: JSX.Element,
	template?: string | JSX.Element,
}

const MyInput = React.forwardRef<HTMLInputElement, Props>(({ name, type, required = false, label, error, template, ...field }, ref) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	
	return (
		<TextField 
			{...field}
			id = {name} 
			type = {template != 'password' ? type : showPassword ? 'text' : 'password'}
			required = {required}
			label = {label} 
			error = {error ? true : false}
			helperText = {error}
			variant = "standard" 
			InputProps={template === 'password' ? {
				endAdornment: (
					<InputAdornment position="end">
						<MyButton 
							asLink={true}
							classes="info small"
							icon={<LuEye />}
							type='button'
							onclick={handleClickShowPassword}
						/>
					</InputAdornment>
				),
			} : undefined}
			inputRef={ref}
		/>
  );
});


export default MyInput;