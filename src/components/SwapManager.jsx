import {
  createSignal, createEffect, Index, Show
} from 'solid-js';
import { getDivs } from '../font/text';
import {
  GOLD, MOBILE_WIDTH
} from '../utils/const';
import { generateHiddenTransform } from '../utils/hidden';

// PROPS:
//   swapData - array<{ activeCondition, text, width, height, margin-bottom, onClick }>
//   activeTransform - signal<boolean>
//   children - JSX
//   childrenHeight - string
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
  const childrenHiddenTransform = generateHiddenTransform();

  return (
    <Show
      when={props.swapData.length > 0}
      fallback={
        <div
          style={{
            position: 'relative',
            transform: props.activeTransform()
              ? 'none'
              : childrenHiddenTransform,
            transition: 'transform 1s'
          }}
        >
          <div style={{
            position: 'absolute',
            left: '-2px',
            top: '2px',
            width: '327px',
            height: props.childrenHeight,
            outline: `2px solid ${GOLD}`,
            'outline-offset': '4px',
            'z-index': -1
          }}/>
          {props.children}
        </div>
      }
    >
      <div
        onClick={onClick}
        style={{
          width: activeSwapEle().width || `${MOBILE_WIDTH}px`,
          height: activeSwapEle().height || '26px',
          'margin-bottom': activeSwapEle()['margin-bottom'] || '16px',
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
    </Show>
  );
}
