import { useAppSelector } from './hooks/redux';
import { Route, Routes } from 'react-router-dom';


import UI from './pages/UI/UI';
// import CoinsList from './components/CoinsList';

function App() {
	let { mode } = useAppSelector(state => state.ThemeModeReducer);

  return (
    <div className={`App ${mode}Mode`}>
      {/* <CoinsList/> */}
      <Routes>
        <Route path='/ui' element={<UI/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
