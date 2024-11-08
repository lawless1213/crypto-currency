import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/FormComponents/MyInput';
import { useState } from 'react';
import { IUserCoin } from "../../../models/IUser";
import { useAddPortfolioItem } from "../../../hooks/usePortfolio";

interface Props {
	coinUUID: string, 
	coinName: string | undefined,
}

interface PurchaseFormInteface {
  value?: number,
}

const SaleCoin: React.FC<Props> = ({coinUUID, coinName}) => {
  const [ errorText, setErrorText ] = useState<string | null>(null);
  const [ successUpdate, setSuccessUpdate ] = useState<boolean>(false);



  const { control, register, handleSubmit, formState: { errors, isValid }, reset } = useForm<PurchaseFormInteface>({
    mode: "onSubmit",
    defaultValues: {}
  })

	const addPortfolioItem = useAddPortfolioItem();


  const submit: SubmitHandler<PurchaseFormInteface> = data => {
		if(!coinName) return;

		if(!data.value || data.value <= 0) {
			setErrorText('Enter correct value');
			return;
		}

		const coin:IUserCoin = {
			name: coinUUID,
			value: data.value
		}
		
		// addPortfolioItem(currentUser, coin);

		setSuccessUpdate(true);
		setTimeout(() => {
			setSuccessUpdate(false)
		}, 2000)
		reset({ value: 0 }); 
  }

	return (
		<form className='row' onSubmit={handleSubmit(submit)} noValidate autoComplete='off'>
			<Controller
				name = 'value'
				control={control}
				render={
					({field}) => <MyInput 
						{...field}
						name = 'value'
						type = "number"
						label = 'Value'
						error = { errorText }
						onChange={(e) => {
							setErrorText(null); 
							field.onChange(e);
						}}
					/>
				}
			/>
			<div className="actions_wrap center">
				<MyButton 
					classes={`success wide uppercase`}
					text='SALE'
					successUpdate={successUpdate}
				/>
			</div>
		</form>
	)
}

export default SaleCoin;