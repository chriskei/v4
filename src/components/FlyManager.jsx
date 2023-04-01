import {
  createSignal, createEffect, onCleanup
} from 'solid-js';
import SwapManager from './SwapManager';

// PROPS:
//   activeCondition - boolean
//   swapData - array<{ activeCondition, text, width, height, margin-bottom, onClick }>
export default function FlyManager(props) {
  const [ activeDisplay, setActiveDisplay ] = createSignal(false);
  const [ activeTransform, setActiveTransform ] = createSignal(false);

  createEffect(() => {
    if (props.activeCondition) {
      const activeDisplayTimer = setInterval(() => setActiveDisplay(true), 750);
      const activeTransformTimer = setInterval(() => setActiveTransform(true), 1500);
      onCleanup(() => {
        clearInterval(activeDisplayTimer);
        clearInterval(activeTransformTimer);
      });
    } else {
      const activeTransformTimer = setInterval(() => setActiveTransform(false), 0);
      const activeDisplayTimer = setInterval(() => setActiveDisplay(false), 750);
      onCleanup(() => {
        clearInterval(activeTransformTimer);
        clearInterval(activeDisplayTimer);
      });
    }
  });

  return (
    <div style={{
      display: activeDisplay() ? 'block' : 'none',
      width: 'min-content',
      ...props.extraStyles
    }}>
      <SwapManager swapData={props.swapData} activeTransform={activeTransform}/>
    </div>
  );
}
