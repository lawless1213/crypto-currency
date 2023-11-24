import { useAppSelector } from './hooks/redux';

import Aside from './components/Aside/Aside';
import Layout from './pages/Layout';

function App() {
	let { mode } = useAppSelector(state => state.ThemeModeReducer);

  return (
    <div className={`App ${mode}Mode`}>
      <Aside/>
      <Layout/>
    </div>
    
  );
}

export default App;
