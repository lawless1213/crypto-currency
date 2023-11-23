import { useAppSelector } from './hooks/redux';
import { Route, Routes } from 'react-router-dom';

import UI from './pages/UI/UI';

function App() {
	let { mode } = useAppSelector(state => state.ThemeModeReducer);

  return (
    <div className={`App ${mode}Mode`}>
      <Routes>
        <Route path='/ui' element={<UI/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
