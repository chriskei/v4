import { useMajorPageContext } from '../context/MajorPage';
import { MAJOR_PAGES } from '../utils/majorPages';
import Continue from './Continue';
import FlyManager from './FlyManager';

export default function AboutPage() {
  const { majorPage } = useMajorPageContext();

  return (
    <>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT}
        swapData={[ {
          activeCondition: true,
          text: 'this is the about page!',
          width: '50px',
          height: '70px',
          'margin-bottom': '8px'
        } ]}
      />
      <Continue activeMajorPage={MAJOR_PAGES.ABOUT}/>
    </>
  );
}
