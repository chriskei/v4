import { createSignal } from 'solid-js';

import { fnTempName } from './font/mapping';

import styles from './App.module.css';

function App() {
  const [divLocIdx, setDivLocIdx] = createSignal(0);

  const divs = [];
  for (let i = 0; i < 3000; i++) {
    divs.push(
      <div style={{
        height: '1px',
        width: '1px',
        position: 'absolute',
        left: `${fnTempName(divLocIdx())?.[i]?.left || 0}px`,
        top: `${fnTempName(divLocIdx())?.[i]?.top || 0}px`,
        'background-color': `${fnTempName(divLocIdx())?.[i]?.color || 'white'}`,
        transition: 'all 1s',
      }} />,
    );
  }

  return (
    <div class={styles.App}>
      {divs}
      <button onClick={() => setDivLocIdx(0)}>
        0
      </button>
      <button onClick={() => setDivLocIdx(1)}>
        1
      </button>
      <button onClick={() => setDivLocIdx(2)}>
        2
      </button>
    </div>
  );
}

export default App;
