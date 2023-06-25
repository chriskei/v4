import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import TextManager from './TextManager';

export default function Header() {
  const {
    majorPage, setMajorPage, majorPageIdx, setMajorPageIdx, setDesiredMajorPage
  } = usePageContext();

  const workSubheaders = [
    {
      activeMajorPage: MAJOR_PAGES.SEVEN,
      text: '  [ 7PM ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.PONG,
      text: '  [ Pong Pong Wu ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.ACCOUNTANT,
      text: '  [ Accountant ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.PERSONAL,
      text: '  [ Personal Site ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.WORKSENSE,
      text: '  [ Worksense ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.LOOP,
      text: '  [ Loop Chocolate ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.SOLARIA,
      text: '  [ Solaria Labs ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.INTEGRITY,
      text: '  [ ISS ]'
    },
    {
      activeMajorPage: MAJOR_PAGES.DRAFTKINGS,
      text: '  [ DraftKings ]'
    }
  ];

  return (
    <div id='header'>
      <TextManager
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
            activeMajorPages: [
              MAJOR_PAGES.WORK,
              MAJOR_PAGES.SEVEN,
              MAJOR_PAGES.PONG,
              MAJOR_PAGES.ACCOUNTANT,
              MAJOR_PAGES.PERSONAL,
              MAJOR_PAGES.WORKSENSE,
              MAJOR_PAGES.LOOP,
              MAJOR_PAGES.SOLARIA,
              MAJOR_PAGES.INTEGRITY,
              MAJOR_PAGES.DRAFTKINGS
            ],
            activeMajorPageIdx: majorPageIdx(),
            text: '[ Work ]',
            pixelMultiplier: 2,
            onClick() {
              setMajorPage(MAJOR_PAGES.HOME);
              setMajorPageIdx(0);
              setDesiredMajorPage(MAJOR_PAGES.WORK);
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
      <TextManager
        data={workSubheaders.map(workSubheader => (
          {
            ...workSubheader,
            activeMajorPageIdx: majorPageIdx(),
            pixelMultiplier: 2,
            onClick() {
              setMajorPage(MAJOR_PAGES.WORK);
              setMajorPageIdx(0);
            }
          }
        ))}
        parentDivAdditionalStyles={{ cursor: 'pointer' }}
      />
    </div>
  );
}
