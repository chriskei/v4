import {
  createSignal, createEffect, Index
} from 'solid-js';
import { getDivs } from '../font/text';
import { MOBILE_WIDTH } from '../utils/const';
import { generateHiddenTransform } from '../utils/hidden';

// PROPS:
//   swapData - array<{ activeCondition, text, width, height, margin-bottom, onClick }>
//   activeTransform - signal<boolean>
export default function SwapManager(props) {
  const [ activeSwapEle, setActiveSwapEle ] = createSignal({
    activeCondition: false,
    pixelMultiplier: 1,
    text: '',
    width: '',
    height: '',
    'margin-bottom': '',
    onClick: () => null
  });
  createEffect(() => {
    for (const swapEle of props.swapData) {
      if (swapEle.activeCondition) {
        setActiveSwapEle(swapEle);
      }
    }
  });
  const divData = () =>
    getDivs(activeSwapEle().text, activeSwapEle().pixelMultiplier || 1, MOBILE_WIDTH);
  const onClick = () => activeSwapEle().onClick ? activeSwapEle().onClick() : null;

  return (
    // Default height: 26px and margin-bottom: 8px for common one liners
    <div
      onClick={onClick}
      style={{
        width: activeSwapEle().width,
        height: activeSwapEle().height || '26px',
        'margin-bottom': activeSwapEle()['margin-bottom'] || '8px',
        ...activeSwapEle().extraStyles
      }}
    >
      <Index each={divData()}>
        {ele => {
          const hiddenTransform = generateHiddenTransform();

          return (<div
            style={{
              position: 'absolute',
              width: `${ele().width}px`,
              height: `${ele().height}px`,
              'z-index': ele()['z-index'],
              'background-color': ele()['background-color'],
              transform: props.activeTransform()
                ? `translate(${ele().left}px, ${ele().top}px)`
                : hiddenTransform,
              transition: 'transform 1s'
            }}
          />);
        }}
      </Index>
    </div>
  );
}
