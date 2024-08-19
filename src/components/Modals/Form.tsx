import { useState } from 'react';

import MyButton from '../UI/MyButton';
type ClickHandler = (email: string, password: string) => void;


interface Props {
	title: string,
	handleClick: ClickHandler,
}

const Form: React.FC<Props> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <div className="actions_wrap">
        <MyButton 
          classes='primary rounded border small'
          text={title}
          onclick={() => handleClick(email, pass)}
        />
      </div>
    </div>
  );
};

export { Form };
