import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MyButton from '../../UI/MyButton';
import MyInput from '../../UI/FormComponents/MyInput';
import * as yup from 'yup';
import { useState } from 'react';
import MyBadge from 'components/UI/MyBadge';
import { addCoinToPortfolio } from 'services/UsersCoinsService';

interface Props {
	coinUUID: string, 
	coinName: string | undefined,
}

export interface PurchaseFormInteface {
  value?: number,
}

const schemaPurchase = yup.object().shape({
  value: yup
    .number()
})

const PurchaseCoin: React.FC<Props> = () => {
  const [errorText, setErrorText] = useState<string | null>(null);

  const { control, register, handleSubmit, formState: { errors, isValid } } = useForm<PurchaseFormInteface>({
    mode: "onSubmit",
    resolver: yupResolver(schemaPurchase),
    defaultValues: {}
  })

  const submit: SubmitHandler<PurchaseFormInteface> = data => {
		// addCoinToPortfolio()
  }

	return (
		<section className={`panel_section`}>
			<div className={`content`}>
				<form className='row' onSubmit={handleSubmit(submit)} noValidate autoComplete='off'>
					<Controller
						name = 'value'
						control={control}
						render={
							({field}) => <MyInput 
								{...field}
								name = 'value'
								type="number"
								label = 'Value'
								error = { errors.value?.message }
								success={!errors.value && !!field.value}
							/>
						}
					/>
					{ errorText &&<MyBadge text={errorText} classes='danger transparent'/> }
					<div className="actions_wrap center">
						<MyButton 
							classes={`primary border wide big uppercase`}
							text='purchase'
						/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default PurchaseCoin;