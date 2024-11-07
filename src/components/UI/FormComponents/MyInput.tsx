import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment'
import MyButton from '../MyButton';
import { LuEye, LuEyeOff } from "react-icons/lu";

interface Props {
	name: string,
	type?: string,
	required?: boolean,
	label?: string,
	error?: string | null,
	success?: boolean, 
	startAdornment?: JSX.Element,
	template?: string | JSX.Element,
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MyInput = React.forwardRef<HTMLInputElement, Props>(({ name, type, required = false, label, error, success, template, onChange, ...field }, ref) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setShowPassword((show) => !show);
	};

	const successClass = success ? 'success' : '';
	const errorClass = error ? 'error' : '';
	
	return (
		<TextField 
			{...field}
			id = {name} 
			type = {template !== 'password' ? type : showPassword ? 'text' : 'password'}
			className={`form-group ${successClass} ${errorClass}`}
			required = {required}
			label = {label} 
			error = {error ? true : false}
			helperText = {error}
			variant = "standard"
			onChange={(e) => {
        onChange?.(e); 
      }}

			InputProps={{
				className: 'input-wrap',
				endAdornment: template === 'password' ? (
					<InputAdornment position="end">
						<MyButton 
							asLink={true}
							classes={error ? 'danger' : success ? 'success' : 'info'}
							icon={showPassword ? <LuEyeOff /> : <LuEye />}
							type='button'
							onClick={handleClickShowPassword}
						/>
					</InputAdornment>
				) : undefined,
			}}

			FormHelperTextProps={{
				className: 'helper-text t-caption',
			}}

			inputRef={ref}
		/>
  );
});


export default MyInput;