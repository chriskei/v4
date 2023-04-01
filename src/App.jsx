import Header from './components/Header';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import LinksPage from './components/LinksPage';
import AppreciationPage from './components/AppreciationPage';

import styles from './App.module.css';

export default function App() {
  return (
    <div class={styles.mobile_container}>
      <Header />
      <HomePage />
      <AboutPage />
      <WorkPage />
      <LinksPage />
      <AppreciationPage />
    </div>
  );
}
