import { useMajorPageContext } from '../context/MajorPage';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';
import Continue from './Continue';

export default function AppreciationPage() {
  const { majorPage } = useMajorPageContext();

  return (
    <>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.APPRECIATION}
        swapData={[ {
          activeCondition: true,
          text: 'this is the appreciation page! thanks!',
          height: '80px',
          width: '5px'
        } ]}
      />
      <Continue activeMajorPage={MAJOR_PAGES.APPRECIATION} />
    </>
  );
}
