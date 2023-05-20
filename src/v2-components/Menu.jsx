import {
  createSignal, For
} from 'solid-js';
import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import TextManager from './TextManager';

// TODO: make this swap instead of fly
export default function Menu() {
  const {
    majorPageIdx, setDesiredMajorPage
  } = usePageContext();
  const [ selectStr, setSelectStr ] = createSignal('{');

  const options = [
    {
      option: 'About',
      onClick() {
        setSelectStr('{');
        setDesiredMajorPage(MAJOR_PAGES.ABOUT);
      }
    },
    {
      option: 'Work',
      onClick() {
        setSelectStr('|{');
        setDesiredMajorPage(MAJOR_PAGES.WORK);
      }
    },
    {
      option: 'Links',
      onClick() {
        setSelectStr('||{');
        setDesiredMajorPage(MAJOR_PAGES.LINKS);
      }
    },
    {
      option: 'Appreciation',
      onClick() {
        setSelectStr('|||{');
        setDesiredMajorPage(MAJOR_PAGES.APPRECIATION);
      }
    }
  ];

  return (
    <div id='menu'>
      <div style={{
        display: 'flex',
        'margin-top': '1rem'
      }}>
        <TextManager
          delay={100}
          data={[
            {
              activeMajorPage: MAJOR_PAGES.HOME,
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
              delay={0}
              data={[
                {
                  activeMajorPage: MAJOR_PAGES.HOME,
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
