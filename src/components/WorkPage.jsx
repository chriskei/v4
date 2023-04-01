import { useMajorPageContext } from '../context/MajorPage';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';
import Continue from './Continue';

export default function WorkPage() {
  const { majorPage } = useMajorPageContext();

  return (
    <>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.WORK}
        swapData={[ {
          activeCondition: true,
          text: 'this is the work page! woohoo!',
          width: '50px',
          height: '70px',
          'margin-bottom': '8px'
        } ]}
      />
      <Continue activeMajorPage={MAJOR_PAGES.WORK}/>
    </>
  );
}
