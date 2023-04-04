import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';

export default function Header() {
  const {
    majorPage, setMajorPage, setAboutPageIdx
  } = usePageContext();

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
      <div style={{ display: 'flex' }}>
        <FlyManager
          activeCondition={majorPage() === MAJOR_PAGES.ABOUT}
          swapData={[ {
            activeCondition: true,
            pixelMultiplier: 2,
            text: '[ About',
            width: '124px',
            height: '26px',
            'margin-bottom': '32px'
          } ]}
        />
        <FlyManager
          activeCondition={majorPage() === MAJOR_PAGES.ABOUT}
          swapData={[ {
            activeCondition: true,
            pixelMultiplier: 2,
            text: ']',
            width: '22px',
            height: '26px',
            'margin-bottom': '32px',
            extraStyles: {
              'margin-left': '16px',
              'padding-left': '4px'
            },
            onClick() {
              setMajorPage(MAJOR_PAGES.HOME);
              setAboutPageIdx(0);
            }
          } ]}
        />
      </div>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.WORK}
        swapData={[ {
          activeCondition: true,
          pixelMultiplier: 2,
          text: '[ Work',
          width: '108px',
          height: '26px',
          'margin-bottom': '32px'
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
          'margin-bottom': '32px'
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
          'margin-bottom': '32px'
        } ]}
      />
    </>
  );
}
