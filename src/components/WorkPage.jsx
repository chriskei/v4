import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';
import Continue from './Continue';

export default function WorkPage() {
  const { majorPage } = usePageContext();

  return (
    <>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.WORK}
        swapData={[ {
          activeCondition: true,
          text: 'this is the work page! woohoo!',
          width: '50px',
          height: '70px'
        } ]}
      />
      <Continue activeMajorPage={MAJOR_PAGES.WORK}/>
    </>
  );
}
