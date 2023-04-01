/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { VANILLA } from './utils/const';
import { MajorPageContextProvider } from './context/MajorPage';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found, check index.html!'
  );
}

render(() => (
  <>
    <meta name='theme-color' content={VANILLA} />
    <MajorPageContextProvider>
      <App />
    </MajorPageContextProvider>
  </>),
root);
