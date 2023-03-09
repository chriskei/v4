import { createSignal, createMemo } from 'solid-js';

import { getDivPositions } from './font/text';
import { exampleWorkTexts } from './copy/words';
// Import { solariaDivPositions } from './copy/solaria';
// import { integrityDivPositions } from './copy/integrity';
// import { draftkingsDivPositions } from './copy/draftkings';

import styles from './App.module.css';

const MOBILE_WIDTH = 360;

function App() {
  const [workTextIdx, setWorkTextIdx] = createSignal(0);

  // METHOD 1 - slow
  const workText = () => exampleWorkTexts[workTextIdx()];

  const divPositions = createMemo(() => {
    console.log('memo calc');
    return getDivPositions(workText(), 1, MOBILE_WIDTH);
  });

  // METHOD 2 - slow
  // Const divPositions = createMemo(() => {
  //   console.log(1234)
  //   switch (workTextIdx()) {
  //     case 0:
  //       return solariaDivPositions;
  //     case 1:
  //       return integrityDivPositions;
  //     case 2:
  //       return draftkingsDivPositions
  //   }
  // })

  // METHOD 3 - ?

  const divs = [];
  for (let i = 0; i < 10000; i++) {
    divs.push(
      <div style={{
        height: '1px',
        width: '1px',
        position: 'absolute',
        left: `${divPositions()[i]?.left || 0}px`,
        top: `${divPositions()[i]?.top || 0}px`,
        'background-color': `${divPositions()[i]?.color || '#FFEAB0'}`,
        transition: 'all 1s',
      }} />,
    );
  }

  return (
    <div class={styles.App}>
      <button onClick={() => setWorkTextIdx(0)}>
        0
      </button>
      <button onClick={() => setWorkTextIdx(1)}>
        1
      </button>
      <button onClick={() => setWorkTextIdx(2)}>
        2
      </button>
      <div style={{
        width: `${MOBILE_WIDTH}px`,
        position: 'relative',
        margin: '0 auto',
      }}>
        {divs}
      </div>
    </div>
  );
}

export default App;
