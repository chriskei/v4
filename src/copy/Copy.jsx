import { createMemo } from 'solid-js';
import { usePageContext } from '../context/Page';
import FlyManager from '../components/FlyManager';

// PROPS:
//   copy - array<array<{ type, text, filePath, altText, assetHeight, linkHref}>>
//   activeMajorPage - int
//   majorPageIdx - signal<int>
export default function Copy(props) {
  const { majorPage } = usePageContext();
  const copy = createMemo(() => (
    props.copy.flatMap((idxCopy, idx) => (
      idxCopy.map((ele, eleIdx) => {
        const key = `FlyManager-${idx}-${eleIdx}`;

        switch (ele.type) {
        case 'text':
          return <FlyManager
            activeCondition=
              {majorPage() === props.activeMajorPage && props.majorPageIdx() === idx}
            swapData={[
              {
                activeCondition: true,
                text: ele.text,
                onClick() {
                  document.getElementById(ele.linkHref)?.click();
                }
              }
            ]}
            key={key}
          >
            {ele.linkHref && (
              <a
                href={ele.linkHref}
                id={ele.linkHref}
                target='_blank'
              />
            )}
          </FlyManager>;

        case 'image':
          return <FlyManager
            activeCondition={majorPage() === props.activeMajorPage && props.majorPageIdx() === idx}
            extraStyles={{
              margin: '0 auto',
              width: '327px',
              height: `${ele.assetHeight}px`,
              'margin-bottom': '20px'
            }}
            assetHeight={`${ele.assetHeight}px`}
            assetOnClick={() => {
              document.getElementById(ele.linkHref)?.click();
            }}
          >
            <img
              src={ele.filePath}
              alt={ele.altText}
              width='327'
              height={ele.assetHeight}
              style={{
                outline: '2px solid black',
                'outline-offset': '4px'
              }}
            />
            <a
              id={ele.linkHref}
              href={ele.linkHref}
              target='_blank'
            />
          </FlyManager>;

        case 'video':
        default:
          return <FlyManager
            activeCondition={majorPage() === props.activeMajorPage && props.majorPageIdx() === idx}
            extraStyles={{
              margin: '0 auto',
              width: '327px',
              height: `${ele.assetHeight}px`,
              'margin-bottom': '20px'
            }}
            childrenHeight={`${ele.assetHeight}px`}
          >
            <video
              controls
              disablepictureinpicture
              width='327'
              height={ele.assetHeight}
              style={{
                outline: '2px solid black',
                'outline-offset': '4px'
              }}
            >
              <source
                src={ele.filePath}
                type='video/webm'
              />
              {ele.altText}
            </video>
          </FlyManager>;
        }
      })
    )
    )
  ));

  return <>
    {copy()}
  </>;
}
