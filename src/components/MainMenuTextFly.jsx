import { Index } from 'solid-js';
import { generateHiddenTransform } from '../utils/hidden';

export default function MainMenuTextFly(props) {
  const {
    divData, width, onClick = () => null, show = () => true
  // eslint-disable-next-line solid/reactivity
  } = props;

  return (
    <div
      onClick={onClick}
      style={{
        width,
        height: '26px',
        'margin-bottom': '2px'
      }}
    >
      <Index each={divData()}>
        {ele => {
          const hiddenTransform = generateHiddenTransform();

          return <div
            style={{
              position: 'absolute',
              width: `${ele().width}px`,
              height: `${ele().height}px`,
              'z-index': ele()['z-index'],
              'background-color': ele()['background-color'],
              transform: show()
                ? `translate(${ele().left}px, ${ele().top}px)`
                : hiddenTransform,
              transition: 'transform 1s'
            }}
          />;
        }}
      </Index>
    </div>
  );
}
