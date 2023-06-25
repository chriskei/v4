import Header from './components/Header';
import Menu from './components/Menu';
import Work from './components/Work';
import About from './components/About';
import Seven from './components/Seven';
import Continue from './components/Continue';

import styles from './App.module.css';

export default function App() {
  return (
    <div class={styles.mobile_container}>
      <Header />
      <Menu />
      <Work />
      <About />
      <Seven />
      <Continue />
    </div>
  );
}
