import { createSignal } from 'solid-js';
import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';
import MainMenu from './MainMenu';
import Continue from './Continue';

export default function HomePage() {
  const {
    majorPage, setMajorPage
  } = usePageContext();
  const [ desiredMajorPage, setDesiredMajorPage ] = createSignal(MAJOR_PAGES.ABOUT);
  const continueOnClick = () => setMajorPage(desiredMajorPage());

  return (
    <>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.HOME}
        extraStyles={{ margin: '4rem auto' }}
        swapData={[ {
          activeCondition: true,
          pixelMultiplier: 4,
          text: 'Hello!',
          width: '204px',
          height: '52px'
        } ]}
      />
      <MainMenu
        desiredMajorPage={desiredMajorPage}
        setDesiredMajorPage={setDesiredMajorPage}
      />
      <Continue
        activeMajorPage={MAJOR_PAGES.HOME}
        onClick={continueOnClick}
      />
    </>
  );
}
