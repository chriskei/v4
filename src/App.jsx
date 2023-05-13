import Header from './v2-components/Header';
import Menu from './v2-components/Menu';
import About from './v2-components/About';
import Continue from './v2-components/Continue';

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
