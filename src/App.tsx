import { useAppSelector } from './hooks/redux';

// import CoinsList from './components/CoinsList';
import ButtonsGrid from './components/Test/ButtonsGrid';
import LinksGrid from './components/Test/LinksGrid';

// import ThemeToggler from './components/ThemeToggler/ThemeToggler';

function App() {
	let { mode } = useAppSelector(state => state.ThemeModeReducer);

  return (
    <div className={`App ${mode}Mode`}>
      {/* <CoinsList/> */}
      {/* <ThemeToggler/> */}
      <LinksGrid/>
      <ButtonsGrid/>
    </div>
    
  );
}

export default App;
