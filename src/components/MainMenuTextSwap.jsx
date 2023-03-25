import { Index } from 'solid-js';

export default function MainMenuTextSwap(props) {
  const {
    divData, width, onClick = () => null
  // eslint-disable-next-line solid/reactivity
  } = props;

  return (
    <div
      onClick={onClick}
      style={{
        width,
        height: '26px',
        'margin-bottom': '8px'
      }}
    >
      <Index each={divData()}>
        {ele => <div
          style={{
            position: 'absolute',
            width: `${ele().width}px`,
            height: `${ele().height}px`,
            'z-index': ele()['z-index'],
            'background-color': ele()['background-color'],
            transform: `translate(${ele().left}px, ${ele().top}px)`,
            transition: 'transform 1s'
          }}
        />}
      </Index>
    </div>
  );
}
