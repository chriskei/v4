import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import TextManager from './TextManager';

export default function Continue() {
  const {
    majorPage, setMajorPage, majorPageIdx
  } = usePageContext();
  const onClick = () => {
    if (majorPage() === MAJOR_PAGES.HOME) {
      setMajorPage(MAJOR_PAGES.ABOUT);
    } else {
      setMajorPage(MAJOR_PAGES.HOME);
    }
  };

  return (
    <div
      id='continue'
      style={{
        margin: 'auto auto 1rem',
        width: '34px'
      }}
    >
      <TextManager
        delay={100}
        data={[
          {
            activeMajorPage: majorPage(),
            activeMajorPageIdx: majorPageIdx(),
            text: '}',
            pixelMultiplier: 2,
            onClick
          }
        ]}
        parentDivAdditionalStyles={{
          position: 'relative',
          left: '8px',
          top: '4px',
          cursor: 'pointer'
        }}
      />
    </div>
  );
}
