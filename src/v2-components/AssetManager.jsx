import {
  createEffect, createSignal, onCleanup, Index, Show
} from 'solid-js';
import { usePageContext } from '../context/Page';
import { getAssetDivs } from '../font/asset';
import { MOBILE_WIDTH } from '../utils/const';
import { getHiddenTransform } from '../utils/hidden';
import { ASSET_TYPES } from '../utils/assetTypes';

// PROPS
// delay: number
// data: array of objects
//   activeMajorPage: number
//   activeMajorPageIdx: number
//   contentType: string
//   filePath: string
//   altText: string
//   height: number
//   pixelMultiplier: number
//   linkHref: string
// parentDivAdditionalStyles: object of style properties
export default function AssetManager(props) {
  const {
    majorPage, majorPageIdx
  } = usePageContext();
  const [ showAsset, setShowAsset ] = createSignal(false);
  const [ currentContentType, setCurrentContentType ] = createSignal('');
  const [ currentFilePath, setCurrentFilePath ] = createSignal('');
  const [ currentAltText, setCurrentAltText ] = createSignal('');
  const [ currentHeight, setCurrentHeight ] = createSignal(0);
  const [ currentPixelMultiplier, setCurrentPixelMultiplier ] = createSignal(0);
  const [ currentLinkHref, setCurrentLinkHref ] = createSignal('');
  const currentAssetOutlineDivs = () =>
    getAssetDivs(currentHeight(), currentPixelMultiplier(), MOBILE_WIDTH);

  // Swap asset whenever context changes
  createEffect(() => {
    const {
      contentType, filePath, altText, height, pixelMultiplier, linkHref
    } = props.data.find(({
      activeMajorPage, activeMajorPageIdx
    }) => activeMajorPage === majorPage() && activeMajorPageIdx === majorPageIdx())
    || {
      contentType: '',
      filePath: '',
      altText: '',
      height: 0,
      pixelMultiplier: 0,
      linkHref: ''
    };
    if (
      contentType !== currentContentType()
      || filePath !== currentFilePath()
      || altText !== currentAltText()
      || height !== currentHeight()
      || pixelMultiplier !== currentPixelMultiplier()
      || linkHref !== currentLinkHref()
    ) {
      const hideAssetTimer = setTimeout(() => setShowAsset(false), props.delay);
      const swapAssetTimer = setTimeout(() => {
        setCurrentContentType(contentType);
        setCurrentFilePath(filePath);
        setCurrentAltText(altText);
        setCurrentHeight(height);
        setCurrentPixelMultiplier(pixelMultiplier);
        setCurrentLinkHref(linkHref);
      }, props.delay + 750);

      onCleanup(() => {
        clearInterval(hideAssetTimer);
        clearInterval(swapAssetTimer);
      });
    }
  });

  // Show asset after it swaps in a separate createEffect to avoid overwriting
  createEffect(() => {
    if (!showAsset()) {
      const showAssetTimer = setTimeout(() => setShowAsset(true), props.delay + 1000);

      onCleanup(() => {
        clearInterval(showAssetTimer);
      });
    }
  });

  return (
    <div
      style={{
        height: `${currentHeight()}px`,
        ...props.parentDivAdditionalStyles
      }}
    >
      <Index each={currentAssetOutlineDivs()}>
        {(ele, idx) => {
          const hiddenTransform = getHiddenTransform(idx);

          return (<div
            style={{
              position: 'absolute',
              width: `${ele().width}px`,
              height: `${ele().height}px`,
              'z-index': ele()['z-index'],
              'background-color': ele()['background-color'],
              'will-change': 'transform',
              transform: showAsset()
                ? `translate(${ele().left}px, ${ele().top}px)`
                : hiddenTransform,
              transition: 'transform 1s ease-in-out'
            }}
          />);
        }}
      </Index>
      <div style={{
        position: 'absolute',
        'will-change': 'transform',
        transform: showAsset() ? 'translate(8px, 10px)' : getHiddenTransform(currentHeight()),
        transition: 'transform 1s cubic-bezier(0.2, 0.4, 0.3, 1)'
      }}
      >
        <Show
          when={currentContentType() === ASSET_TYPES.IMAGE}
        >
          <a href={currentLinkHref()} target='_blank'>
            <img src={currentFilePath()} alt={currentAltText()} width='327' />
          </a>
        </Show>
        <Show
          when={currentContentType() === ASSET_TYPES.VIDEO}
        >
          <video
            controls
            disablepictureinpicture
            width='327'
          >
            <source src={currentFilePath()} type='video/webm'>
              {currentAltText()}
            </source>
          </video>
        </Show>
      </div>
    </div>
  );
}

// TODO: check videos on mobile