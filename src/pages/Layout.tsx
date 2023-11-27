import { Route, Routes } from 'react-router-dom';

import UI from './UI/UI';

const Layout = () => {
	
	return (
		<main className="main">
			<Routes>
        <Route path='/ui-components' element={<UI/>}></Route>
      </Routes>
		</main>
	)
}

export default Layout;