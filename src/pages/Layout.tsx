import { Route, Routes } from 'react-router-dom';

import UI from './UI/UI';

const Layout = () => {
	
	return (
		<div className="main">
			<Routes>
        <Route path='/ui-components' element={<UI/>}></Route>
      </Routes>
		</div>
	)
}

export default Layout;