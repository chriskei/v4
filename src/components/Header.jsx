import { Index } from 'solid-js';
import { getDivs } from '../font/text';
import { MOBILE_WIDTH } from '../utils/const';

export default function Header() {
  const headerData = () => getDivs('Chris Kei', 2, MOBILE_WIDTH);

  return (
    <header
      style={{
        width: '158px',
        height: '26px',
        'margin-bottom': '2px'
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
            transition: 'transform 1s'
          }}
        />}
      </Index>
    </header>
  );
}
