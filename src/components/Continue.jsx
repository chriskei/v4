import { useMajorPageContext } from '../context/MajorPage';
import { MAJOR_PAGES } from '../utils/majorPages';
import FlyManager from './FlyManager';

// PROPS:
//   activeMajorPage - int
//   onClick - func<null => null>
export default function Continue(props) {
  const {
    majorPage, setMajorPage
  } = useMajorPageContext();
  const defaultOnClick = () => setMajorPage(MAJOR_PAGES.HOME);

  return (
    <FlyManager
      activeCondition={majorPage() === props.activeMajorPage}
      extraStyles={{ margin: 'auto auto 1rem' }}
      swapData={[ {
        activeCondition: true,
        pixelMultiplier: 2,
        text: '}',
        width: '22px',
        'margin-bottom': '0px',
        extraStyles: { 'padding-left': '4px' },
        onClick: props.onClick || defaultOnClick
      } ]}
    />
  );
}
