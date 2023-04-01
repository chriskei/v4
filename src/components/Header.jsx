import { useMajorPageContext } from '../context/MajorPage';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';

export default function Header() {
  const { majorPage } = useMajorPageContext();

  return (
    <>
      <FlyManager
        activeCondition={true}
        extraStyles={{ 'margin-top': '1rem' }}
        swapData={[ {
          activeCondition: true,
          text: 'Chris Kei',
          pixelMultiplier: 2.5,
          width: '198px',
          height: '33px',
          'margin-bottom': '8px'
        } ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT}
        swapData={[ {
          activeCondition: true,
          pixelMultiplier: 2,
          text: '[ About',
          width: '124px',
          height: '26px',
          'margin-bottom': '24px'
        } ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.WORK}
        swapData={[ {
          activeCondition: true,
          pixelMultiplier: 2,
          text: '[ Work',
          width: '108px',
          height: '26px',
          'margin-bottom': '24px'
        } ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.LINKS}
        swapData={[ {
          activeCondition: true,
          pixelMultiplier: 2,
          text: '[ Links',
          width: '108px',
          height: '26px',
          'margin-bottom': '24px'
        } ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.APPRECIATION}
        swapData={[ {
          activeCondition: true,
          text: '[ Appreciation',
          pixelMultiplier: 2,
          width: '108px',
          height: '26px',
          'margin-bottom': '24px'
        } ]}
      />
    </>
  );
}
