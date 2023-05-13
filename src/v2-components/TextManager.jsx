import {
  Index, createEffect, createSignal, onCleanup
} from 'solid-js';
import { usePageContext } from '../context/Page';
import { getDivs } from '../font/text';
import { MOBILE_WIDTH } from '../utils/const';
import { generateHiddenTransform } from '../utils/hidden';

// PROPS
// data: array of objects
//   activeMajorPage: number
//   activeMajorPageIdx: number
//   text: string
//   pixelMultiplier: number
//   onClick: null function
// parentDivAdditionalStyles: object of style properties
export default function TextManager(props) {
  const {
    majorPage, majorPageIdx
  } = usePageContext();
  const [ showText, setShowText ] = createSignal(false);
  const [ currentText, setCurrentText ] = createSignal('');
  const [ currentPixelMultiplier, setCurrentPixelMultiplier ] = createSignal(0);
  const [ currentOnClick, setCurrentOnClick ] = createSignal(() => null);
  const currentTextGetDivs = () => getDivs(currentText(), currentPixelMultiplier(), MOBILE_WIDTH);

  // Swap text whenever context changes
  createEffect(() => {
    const {
      text, pixelMultiplier, onClick
    } = props.data.find(({
      activeMajorPage, activeMajorPageIdx
    }) => activeMajorPage === majorPage() && activeMajorPageIdx === majorPageIdx())
    || {
      text: '',
      pixelMultiplier: 0,
      onClick: () => null
    };
    if (text !== currentText() || pixelMultiplier !== currentPixelMultiplier()) {
      const hideTextTimer = setTimeout(() => setShowText(false), 0);
      const swapTextTimer = setTimeout(() => {
        setCurrentText(text);
        setCurrentPixelMultiplier(pixelMultiplier);
        setCurrentOnClick(() => onClick);
      }, 1000);

      onCleanup(() => {
        clearInterval(hideTextTimer);
        clearInterval(swapTextTimer);
      });
    }
  });

  // Show text after it swaps in a separate createEffect to avoid setCurrentText overwriting
  createEffect(() => {
    if (!showText()) {
      const showTextTimer = setTimeout(() => setShowText(true), 2000);

      onCleanup(() => {
        clearInterval(showTextTimer);
      });
    }
  });

  return (
    <div
      style={{
        height: `${currentTextGetDivs().divsHeight}px`,
        ...props.parentDivAdditionalStyles
      }}
      onClick={() => currentOnClick()()}
    >
      <Index each={currentTextGetDivs().divs}>
        {ele => {
          const hiddenTransform = generateHiddenTransform();

          return (<div
            style={{
              position: 'absolute',
              width: `${ele().width}px`,
              height: `${ele().height}px`,
              'z-index': ele()['z-index'],
              'background-color': ele()['background-color'],
              transform: showText()
                ? `translate(${ele().left}px, ${ele().top}px)`
                : hiddenTransform,
              transition: 'transform 2s'
            }}
          />);
        }}
      </Index>
    </div>
  );
}
