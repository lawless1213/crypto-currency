import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Layout from './pages/Layout';

function App() {
  return (
    <div className='App'>
      <Aside/>
      <Header/>
      <HeaderNav/>
      <Layout/>
    </div>
    
  );
}

export default App;
