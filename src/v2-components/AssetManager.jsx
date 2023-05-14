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
//   type: string
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
  const [ currentType, setCurrentType ] = createSignal('');
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
      type, filePath, altText, height, pixelMultiplier, linkHref
    } = props.data.find(({
      activeMajorPage, activeMajorPageIdx
    }) => activeMajorPage === majorPage() && activeMajorPageIdx === majorPageIdx())
    || {
      type: '',
      filePath: '',
      altText: '',
      height: 0,
      pixelMultiplier: 0,
      linkHref: ''
    };
    if (
      type !== currentType()
      || filePath !== currentFilePath()
      || altText !== currentAltText()
      || height !== currentHeight()
      || pixelMultiplier !== currentPixelMultiplier()
      || linkHref !== currentLinkHref()
    ) {
      const hideAssetTimer = setTimeout(() => setShowAsset(false), 0);
      const swapAssetTimer = setTimeout(() => {
        setCurrentType(type);
        setCurrentFilePath(filePath);
        setCurrentAltText(altText);
        setCurrentHeight(height);
        setCurrentPixelMultiplier(pixelMultiplier);
        setCurrentLinkHref(linkHref);
      }, props.delay + 500);

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
              transition: 'transform 1s'
            }}
          />);
        }}
      </Index>
      <div style={{
        position: 'absolute',
        'will-change': 'transform',
        transform: showAsset() ? 'translate(8px, 10px)' : getHiddenTransform(currentHeight()),
        transition: 'transform 1s'
      }}
      >
        <Show
          when={currentType() === ASSET_TYPES.IMAGE}
        >
          <img src={currentFilePath()} alt={currentAltText()} width='327' />
          <a href={currentLinkHref()} target='_blank' />
        </Show>
        <Show
          when={currentType() === ASSET_TYPES.VIDEO}
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
