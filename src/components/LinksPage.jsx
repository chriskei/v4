import { useMajorPageContext } from '../context/MajorPage';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';
import Continue from './Continue';

export default function LinksPage() {
  const { majorPage } = useMajorPageContext();

  return (
    <>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.LINKS}
        swapData={[ {
          activeCondition: true,
          text: 'this is the links page! ok!',
          width: '5px',
          height: '100px',
          'margin-bottom': '8px'
        } ]}
      />
      <Continue activeMajorPage={MAJOR_PAGES.LINKS} />
    </>
  );
}
