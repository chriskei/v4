import {
  createSignal, For
} from 'solid-js';
import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import TextManager from './TextManager';

// TODO: make this swap instead of fly
export default function Menu() {
  const { majorPageIdx } = usePageContext();
  const [ selectStr, setSelectStr ] = createSignal('{');

  const options = [
    {
      option: 'About',
      onClick: () => setSelectStr('{')
    },
    {
      option: 'Work',
      onClick: () => setSelectStr('|{')
    },
    {
      option: 'Links',
      onClick: () => setSelectStr('||{')
    },
    {
      option: 'Appreciation',
      onClick: () => setSelectStr('|||{')
    }
  ];

  return (
    <div id='menu'>
      <div style={{ display: 'flex' }}>
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
