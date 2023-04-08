import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';

// PROPS:
//   desiredMajorPage - signal<int>
//   setDesiredMajorPage - func<int => null>
export default function MainMenu(props) {
  const { majorPage } = usePageContext();

  return (
    <div style={{ display: 'flex' }}>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.HOME}
        swapData={[ {
          activeCondition: props.desiredMajorPage() === MAJOR_PAGES.ABOUT,
          pixelMultiplier: 2,
          text: '{',
          width: '36px',
          'margin-bottom': '8px'
        }, {
          activeCondition: props.desiredMajorPage() === MAJOR_PAGES.WORK,
          pixelMultiplier: 2,
          text: '|{',
          width: '36px',
          'margin-bottom': '8px'
        }, {
          activeCondition: props.desiredMajorPage() === MAJOR_PAGES.LINKS,
          pixelMultiplier: 2,
          text: '||{',
          width: '36px',
          'margin-bottom': '8px'
        }, {
          activeCondition: props.desiredMajorPage() === MAJOR_PAGES.APPRECIATION,
          pixelMultiplier: 2,
          text: '|||{',
          width: '36px',
          'margin-bottom': '8px'
        } ]}
      />
      <div>
        <FlyManager
          activeCondition={majorPage() === MAJOR_PAGES.HOME}
          swapData={[ {
            activeCondition: true,
            pixelMultiplier: 2,
            text: 'About',
            width: '307px',
            height: '26px',
            'margin-bottom': '8px',
            onClick: () => props.setDesiredMajorPage(MAJOR_PAGES.ABOUT)
          } ]}
        />
        <FlyManager
          activeCondition={majorPage() === MAJOR_PAGES.HOME}
          swapData={[ {
            activeCondition: true,
            pixelMultiplier: 2,
            text: 'Work',
            width: '307px',
            height: '26px',
            'margin-bottom': '8px',
            onClick: () => props.setDesiredMajorPage(MAJOR_PAGES.WORK)
          } ]}
        />
        <FlyManager
          activeCondition={majorPage() === MAJOR_PAGES.HOME}
          swapData={[ {
            activeCondition: true,
            pixelMultiplier: 2,
            text: 'Links',
            width: '307px',
            height: '26px',
            'margin-bottom': '8px',
            onClick: () => props.setDesiredMajorPage(MAJOR_PAGES.LINKS)
          } ]}
        />
        <FlyManager
          activeCondition={majorPage() === MAJOR_PAGES.HOME}
          swapData={[ {
            activeCondition: true,
            pixelMultiplier: 2,
            text: 'Appreciation',
            width: '307px',
            height: '26px',
            'margin-bottom': '8px',
            onClick: () => props.setDesiredMajorPage(MAJOR_PAGES.APPRECIATION)
          } ]}
        />
      </div>
    </div>
  );
}
