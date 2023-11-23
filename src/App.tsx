import { useAppSelector } from './hooks/redux';

// import CoinsList from './components/CoinsList';
import ButtonsGrid from './components/Test/ButtonsGrid';
// import ThemeToggler from './components/ThemeToggler/ThemeToggler';

function App() {
	let { mode } = useAppSelector(state => state.ThemeModeReducer);

  return (
    <div className={`App ${mode}Mode`}>
      {/* <CoinsList/> */}
      {/* <ThemeToggler/> */}
      <ButtonsGrid/>
    </div>
    
  );
}

export default App;
