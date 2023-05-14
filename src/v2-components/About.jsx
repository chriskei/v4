import { ASSET_TYPES } from '../utils/assetTypes';
import { MAJOR_PAGES } from '../utils/majorPages';
import AssetManager from './AssetManager';
import TextManager from './TextManager';

export default function About() {
  return (
    <div id='about'>
      <TextManager
        delay={100}
        data={[
          {
            activeMajorPage: MAJOR_PAGES.ABOUT,
            activeMajorPageIdx: 0,
            text: "Hey there! I'm Chris Kei (pronounced the same way as you would <key>), a full stack software engineer at DraftKings. It's nice to e-meet you!",
            pixelMultiplier: 1
          }
        ]}
      />
      <AssetManager
        delay={100}
        data={[
          {
            activeMajorPage: MAJOR_PAGES.ABOUT,
            activeMajorPageIdx: 0,
            type: ASSET_TYPES.IMAGE,
            filePath: 'src/assets/running.webp',
            altText: 'Me and Jen running',
            height: 436,
            pixelMultiplier: 2
          }
        ]}
      />
      {/* <TextManager
        delay={200}
        data={[
          {
            activeMajorPage: MAJOR_PAGES.ABOUT,
            activeMajorPageIdx: 0,
            text: "Thanks for checking out my animated-font-based personal website! There'll be a whole section that dives into the inspiration and mechanics behind this later. For now, here's a little bit about myself!",
            pixelMultiplier: 1
          }
        ]}
      /> */}
    </div>
  );
}
