import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import './firebase/firebase';
import { AuthProvider } from 'store/context/AuthContext';
import { PortfolioProvider } from 'store/context/PortfolioContext';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter basename='/crypto-currency'>
    <Provider store={store}>
      <AuthProvider>
        <PortfolioProvider>
          <App/>
        </PortfolioProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);
