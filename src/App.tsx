import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Layout from './pages/Layout';
import ModalLayout from './components/Modals';

import { useAppSelector } from './hooks/redux';

function App() {
  let { modalView } = useAppSelector(state => state.modals);

  return (
    <div className='App'>
      <Aside/>
      <Header/>
      <HeaderNav/>
      <Layout/>
      {modalView && <ModalLayout/>}
    </div>
    
  );
}

export default App;
