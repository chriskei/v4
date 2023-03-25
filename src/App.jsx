import Header from './components/Header';
import MainMenuFly from './components/MainMenuFly';
import MainMenuSwap from './components/MainMenuSwap';

import styles from './App.module.css';

export default function App() {
  return (
    <div class={styles.mobile_container}>
      <Header />
      <MainMenuFly />
      <MainMenuSwap />
    </div>
  );
}
