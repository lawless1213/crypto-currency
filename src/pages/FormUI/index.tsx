import { useForm, Controller, SubmitHandler } from "react-hook-form"

import MyDropdown from "../../components/UI/MyDropdown";

import s from './index.module.scss';

interface IFormInput {
  iceCreamType: { label: string; value: string }
}

const selectOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]


const FormUI = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      iceCreamType: { label: "", value: "" },
    },
  })
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <div className={s.FormUI}>
      <div className="panel_section">
        <div className="header">
          <div className="t-h2">FORM EXAMPLE</div>
        </div>
        <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <MyDropdown
                {...field}
                options={selectOptions}
                onchange={(value) => field.onChange(value)}
              />
            )}
          />
          <input type="submit" />
        </form>
        </div>
      </div>
    </div>
  )
}

export default FormUI;