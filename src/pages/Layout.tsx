import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Market from './Market';
import AllMarkets from './AllMarkets';
import Coin from './Coin';
import UI from './UI';
import FormUI from './FormUI';

const Layout = () => {
	
	return (
		<main className="main">
			<Routes>
				<Route path='/' element={<Home/>}></Route>
        <Route path='/market' element={<Market/>}></Route>
        <Route path='/allmarkets' element={<AllMarkets/>}></Route>
        <Route path='/coin' element={<Coin/>}></Route>
        <Route path='/ui-components' element={<UI/>}></Route>
        <Route path='/ui-form' element={<FormUI/>}></Route>
      </Routes>
			
		</main>
	)
}

export default Layout;