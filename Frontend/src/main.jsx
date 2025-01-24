import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserDataProvider } from './contexts/UserContext.jsx';
import { CaptainDataProvider } from './contexts/CaptainContext.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <CaptainDataProvider>
          <App />
        </CaptainDataProvider>
      </UserDataProvider>
    </BrowserRouter>
  </StrictMode>
);