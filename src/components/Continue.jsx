import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import { numAboutPages } from '../content/about';
import { numSevenPages } from '../content/seven';
import TextManager from './TextManager';

export default function Continue() {
  const {
    majorPage, setMajorPage, majorPageIdx, setMajorPageIdx, desiredMajorPage, setDesiredMajorPage
  } = usePageContext();

  const onClick = () => {
    const nextMajorPageIdx = majorPageIdx() + 1;

    switch (majorPage()) {
    case MAJOR_PAGES.HOME:
      setMajorPage(desiredMajorPage());
      if (desiredMajorPage() === MAJOR_PAGES.WORK) {
        setDesiredMajorPage(MAJOR_PAGES.SEVEN);
      }

      break;
    case MAJOR_PAGES.ABOUT:
      if (nextMajorPageIdx === numAboutPages) {
        setMajorPage(MAJOR_PAGES.HOME);
        setMajorPageIdx(0);
      } else {
        setMajorPageIdx(nextMajorPageIdx);
      }

      break;
    case MAJOR_PAGES.WORK:
      setMajorPage(desiredMajorPage());
      break;
    case MAJOR_PAGES.SEVEN:
      if (nextMajorPageIdx === numSevenPages) {
        setMajorPage(MAJOR_PAGES.WORK);
        setMajorPageIdx(0);
      } else {
        setMajorPageIdx(nextMajorPageIdx);
      }

      break;
    default:
      setMajorPage(MAJOR_PAGES.HOME);
      setMajorPageIdx(0);
      break;
    }
  };

  return (
    <div
      id='continue'
      onClick={onClick}
      style={{
        margin: 'auto auto 1rem',
        width: '100%',
        cursor: 'pointer'
      }}
    >
      <TextManager
        data={[
          {
            activeMajorPage: majorPage(),
            activeMajorPageIdx: majorPageIdx(),
            text: '}',
            pixelMultiplier: 2
          }
        ]}
        parentDivAdditionalStyles={{
          position: 'relative',
          left: 'calc(50% - 9px)'
        }}
      />
    </div>
  );
}
