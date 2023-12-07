import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Market from './Market/Market';
import AllMarkets from './AllMarkets/AllMarkets';
import UI from './UI/UI';

const Layout = () => {
	
	return (
		<main className="main">
			<Routes>
				<Route path='/' element={<Home/>}></Route>
        <Route path='/market' element={<Market/>}></Route>
        <Route path='/allmarkets' element={<AllMarkets/>}></Route>
        <Route path='/ui-components' element={<UI/>}></Route>
      </Routes>
			
		</main>
	)
}

export default Layout;