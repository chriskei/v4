import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Continue from './components/Continue';

import styles from './App.module.css';

export default function App() {
  return (
    <div class={styles.mobile_container}>
      <Header />
      <Menu />
      <About />
      <Continue />
    </div>
  );
}
