import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import TextManager from './TextManager';

export default function Header() {
  const {
    majorPage, setMajorPage, majorPageIdx, setMajorPageIdx
  } = usePageContext();

  return (
    <div id='header'>
      <TextManager
        delay={0}
        data={[
          {
            activeMajorPage: majorPage(),
            activeMajorPageIdx: majorPageIdx(),
            text: 'Chris Kei',
            pixelMultiplier: 2
          }
        ]}
        parentDivAdditionalStyles={{ 'margin-top': '1rem' }}
      />
      <TextManager
        delay={100}
        data={[
          {
            activeMajorPage: MAJOR_PAGES.ABOUT,
            activeMajorPageIdx: majorPageIdx(),
            text: '[ About ]',
            pixelMultiplier: 2,
            onClick() {
              setMajorPage(MAJOR_PAGES.HOME);
              setMajorPageIdx(0);
            }
          },
          {
            activeMajorPage: MAJOR_PAGES.WORK,
            activeMajorPageIdx: majorPageIdx(),
            text: '[ Work ]',
            pixelMultiplier: 2,
            onClick() {
              setMajorPage(MAJOR_PAGES.HOME);
              setMajorPageIdx(0);
            }
          },
          {
            activeMajorPage: MAJOR_PAGES.LINKS,
            activeMajorPageIdx: majorPageIdx(),
            text: '[ Links ]',
            pixelMultiplier: 2,
            onClick() {
              setMajorPage(MAJOR_PAGES.HOME);
              setMajorPageIdx(0);
            }
          },
          {
            activeMajorPage: MAJOR_PAGES.APPRECIATION,
            activeMajorPageIdx: majorPageIdx(),
            text: '[ Appreciation ]',
            pixelMultiplier: 2,
            onClick() {
              setMajorPage(MAJOR_PAGES.HOME);
              setMajorPageIdx(0);
            }
          }
        ]}
        parentDivAdditionalStyles={{ cursor: 'pointer' }}
      />
    </div>
  );
}
