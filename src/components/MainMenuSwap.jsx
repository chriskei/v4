import { createSignal } from 'solid-js';
import { getDivs } from '../font/text';
import { MOBILE_WIDTH } from '../utils/const';
import MainMenuTextSwap from './MainMenuTextSwap';

export default function MainMenuSwap() {
  const [ selectedIdx, setSelectedIdx ] = createSignal(0);
  const selectDivData = () => {
    switch (selectedIdx()) {
    case 1: return getDivs('|{', 2, MOBILE_WIDTH);
    case 2: return getDivs('||{', 2, MOBILE_WIDTH);
    case 3: return getDivs('|||{', 2, MOBILE_WIDTH);
    default: return getDivs('{', 2, MOBILE_WIDTH);
    }
  };

  const aboutDivData = () => getDivs('About', 2, MOBILE_WIDTH);
  const workDivData = () => getDivs('Work', 2, MOBILE_WIDTH);
  const linksDivData = () => getDivs('Links', 2, MOBILE_WIDTH);
  const gratitudeDivData = () => getDivs('Gratitude', 2, MOBILE_WIDTH);

  return (
    <div style={{ display: 'flex' }}>
      <MainMenuTextSwap divData={selectDivData} width='36px'/>
      <div style={{
        display: 'flex',
        'flex-direction': 'column'
      }}>
        <MainMenuTextSwap
          divData={aboutDivData}
          width='88px'
          onClick={() => setSelectedIdx(0)}
        />
        <MainMenuTextSwap
          divData={workDivData}
          width='72px'
          onClick={() => setSelectedIdx(1)}
        />
        <MainMenuTextSwap
          divData={linksDivData}
          width='90px'
          onClick={() => setSelectedIdx(2)}
        />
        <MainMenuTextSwap
          divData={gratitudeDivData}
          width='162px'
          onClick={() => setSelectedIdx(3)}
        />
      </div>
    </div>
  );
}
