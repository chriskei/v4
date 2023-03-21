import {
  createSignal, Index
} from 'solid-js';

import { getDivs } from './font/text';
import { exampleWorkTexts } from './copy/words';

import styles from './App.module.css';

const MOBILE_WIDTH = 343;

function App() {
  const [ workTextIdx, setWorkTextIdx ] = createSignal(0);
  const workText = () => exampleWorkTexts[workTextIdx()];
  const divData = () => getDivs(workText(), 1, MOBILE_WIDTH);

  const headerData = () => getDivs('Chris Kei', 2, MOBILE_WIDTH);

  return (
    <div class={styles.App}>
      <div
        style={{
          width: '158px',
          height: '26px'
        }}
        onClick={() => console.log('link to home')}
      >
        <Index each={headerData()}>
          {ele => <div
            style={{
              position: 'absolute',
              width: `${ele().width}px`,
              height: `${ele().height}px`,
              'z-index': ele()['z-index'],
              'background-color': ele()['background-color'],
              transform: `translate(${ele().left}px, ${ele().top}px)`,
              transition: ' transform 1s'
            }}
          />}
        </Index>
      </div>
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
        margin: '0 auto'
      }}>
        <Index each={divData()}>
          {ele => <div
            style={{
              position: 'absolute',
              width: `${ele().width}px`,
              height: `${ele().height}px`,
              'z-index': ele()['z-index'],
              'background-color': ele()['background-color'],
              transform: `translate(${ele().left}px, ${ele().top}px)`,
              transition: ' transform 1s'
            }}
          />}
        </Index>
      </div>
    </div>
  );
}

export default App;
