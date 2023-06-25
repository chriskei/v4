import {
  createSignal, For
} from 'solid-js';
import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import TextManager from './TextManager';

// TODO: make this swap instead of fly
export default function Work() {
  const {
    majorPageIdx, setDesiredMajorPage
  } = usePageContext();
  const [ selectStr, setSelectStr ] = createSignal('{');

  const options = [
    {
      option: '7PM',
      onClick() {
        setSelectStr('{');
        setDesiredMajorPage(MAJOR_PAGES.SEVEN);
      }
    },
    {
      option: 'Pong Pong Wu',
      onClick() {
        setSelectStr('|{');
        setDesiredMajorPage(MAJOR_PAGES.PONG);
      }
    },
    {
      option: 'Accountant',
      onClick() {
        setSelectStr('||{');
        setDesiredMajorPage(MAJOR_PAGES.ACCOUNTANT);
      }
    },
    {
      option: 'Personal Site',
      onClick() {
        setSelectStr('|||{');
        setDesiredMajorPage(MAJOR_PAGES.PERSONAL);
      }
    },
    {
      option: 'Worksense',
      onClick() {
        setSelectStr('||||{');
        setDesiredMajorPage(MAJOR_PAGES.WORKSENSE);
      }
    },
    {
      option: 'Loop Chocolate',
      onClick() {
        setSelectStr('|||||{');
        setDesiredMajorPage(MAJOR_PAGES.LOOP);
      }
    },
    {
      option: 'Solaria Labs',
      onClick() {
        setSelectStr('||||||{');
        setDesiredMajorPage(MAJOR_PAGES.SOLARIA);
      }
    },
    {
      option: 'ISS',
      onClick() {
        setSelectStr('|||||||{');
        setDesiredMajorPage(MAJOR_PAGES.INTEGRITY);
      }
    },
    {
      option: 'DraftKings',
      onClick() {
        setSelectStr('||||||||{');
        setDesiredMajorPage(MAJOR_PAGES.DRAFTKINGS);
      }
    }
  ];

  return (
    <div id='work'>
      <div style={{
        display: 'flex',
        position: 'relative',
        top: '1rem'
      }}>
        <TextManager
          data={[
            {
              activeMajorPage: MAJOR_PAGES.WORK,
              activeMajorPageIdx: majorPageIdx(),
              text: selectStr(),
              pixelMultiplier: 2
            }
          ]}
        />
        <div style={{
          'margin-left': '36px',
          width: '100%',
          cursor: 'pointer'
        }}>
          <For each={options}>
            {({
              option, onClick
            }) => <TextManager
              data={[
                {
                  activeMajorPage: MAJOR_PAGES.WORK,
                  activeMajorPageIdx: majorPageIdx(),
                  text: option,
                  pixelMultiplier: 2,
                  onClick
                }
              ]}
              parentDivAdditionalStyles={{ width: '100%' }}
            />}
          </For>
        </div>
      </div>
    </div>
  );
}

