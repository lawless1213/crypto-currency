import { useAppSelector } from './hooks/redux';

import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Layout from './pages/Layout';

function App() {
	let { themeMode } = useAppSelector(state => state.SettingsReducer);

  return (
    <div className={`App ${themeMode}Mode`}>
      <Aside/>
      <Header/>
      <HeaderNav/>
      <Layout/>
    </div>
    
  );
}

export default App;
