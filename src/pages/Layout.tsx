import { Route, Routes } from 'react-router-dom';

import UI from './UI/UI';
import Market from './Market/Market';

const Layout = () => {
	
	return (
		<main className="main">
			<Routes>
        <Route path='/market' element={<Market/>}></Route>
        <Route path='/ui-components' element={<UI/>}></Route>
      </Routes>
		</main>
	)
}

export default Layout;