import { createSignal } from 'solid-js';
import { getDivs } from '../font/text';
import { MOBILE_WIDTH } from '../utils/const';
import MainMenuTextFly from './MainMenuTextFly';

export default function MainMenuFly() {
  const [ selectedIdx, setSelectedIdx ] = createSignal(0);

  const aboutDivData = () => getDivs('About', 2, MOBILE_WIDTH);
  const aboutSelectDivData = () => getDivs('{', 2, MOBILE_WIDTH);
  const showAboutSelectDivData = () => selectedIdx() === 0;

  const workDivData = () => getDivs('Work', 2, MOBILE_WIDTH);
  const workSelectDivData = () => getDivs('{', 2, MOBILE_WIDTH);
  const showWorkSelectDivData = () => selectedIdx() === 1;

  const linksDivData = () => getDivs('Links', 2, MOBILE_WIDTH);
  const linksSelectDivData = () => getDivs('{', 2, MOBILE_WIDTH);
  const showLinksSelectDivData = () => selectedIdx() === 2;

  const gratitudeDivData = () => getDivs('Gratitude', 2, MOBILE_WIDTH);
  const gratitudeSelectDivData = () => getDivs('{', 2, MOBILE_WIDTH);
  const showGratitudeSelectDivData = () => selectedIdx() === 3;

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <MainMenuTextFly
          divData={aboutSelectDivData}
          width='36px'
          show={showAboutSelectDivData}
        />
        <MainMenuTextFly
          divData={aboutDivData}
          width='124px'
          onClick={() => setSelectedIdx(0)}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <MainMenuTextFly
          divData={workSelectDivData}
          width='36px'
          show={showWorkSelectDivData}
        />
        <MainMenuTextFly
          divData={workDivData}
          width='108px'
          onClick={() => setSelectedIdx(1)}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <MainMenuTextFly
          divData={linksSelectDivData}
          width='36px'
          show={showLinksSelectDivData}
        />
        <MainMenuTextFly
          divData={linksDivData}
          width='126px'
          onClick={() => setSelectedIdx(2)}
        />
      </div>
      <div style={{ display: 'flex' }}>
        <MainMenuTextFly
          divData={gratitudeSelectDivData}
          width='36px'
          show={showGratitudeSelectDivData}
        />
        <MainMenuTextFly
          divData={gratitudeDivData}
          width='198px'
          onClick={() => setSelectedIdx(3)}
        />
      </div>
    </div>
  );
}
