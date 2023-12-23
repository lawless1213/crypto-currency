import MySelect from '../../components/UI/FormComponents/MySelect';
import MyInput from '../../components/UI/FormComponents/MyInput';

import s from './FormUI.module.scss';

const FormUI = () => {
  const selectOptions = [
    {value: '1', label: "first"}, 
    {value: '2', label: "second"},
    {value: '3', label: "third"}
  ];

  return (
    <div className={s.FormUI}>
      <div className="panel_section">
        <div className="header">
          <div className="t-h2">MY SELECT</div>
        </div>
        <div className="content">
          <MySelect options={selectOptions} defaultValue={selectOptions[0]} onchange={(value) => console.log(value)}/>
        </div>
      </div>
      <div className="panel_section">
        <div className="header">
          <div className="t-h2">MY INPUT</div>
        </div>
        <div className="content">
          <MyInput/>
        </div>
      </div>
    </div>
  )
}

export default FormUI;