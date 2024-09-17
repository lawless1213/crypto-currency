import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Market from './Market';
import AllMarkets from './AllMarkets';
import Coin from './Coin';
import UI from './UI';
import FormUI from './FormUI';
import Profile from './Profile';
import Login from 'components/Modal/Blocks/Login';
import SignUp from 'components/Modal/Blocks/SignUp';

const Layout = () => {
	
	return (
		<main className="main">
			<Routes>
				<Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/market' element={<Market/>}></Route>
        <Route path='/allmarkets' element={<AllMarkets/>}></Route>
        <Route path='/coin/:coinParams' element={<Coin/>}></Route>
        <Route path='/ui-components' element={<UI/>}></Route>
        <Route path='/ui-form' element={<FormUI/>}></Route>
      </Routes>
			
		</main>
	)
}

export default Layout;