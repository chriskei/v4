import { ASSET_TYPES } from '../utils/assetTypes';
import { MAJOR_PAGES } from '../utils/majorPages';

const aboutContent = [
  {
    contentType: ASSET_TYPES.TEXT,
    text: "Hey there! I'm Chris Kei (pronounced the same way as you would <key>), a full stack software engineer at DraftKings. It's nice to e-meet you!"
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "Thanks for checking out my animated-font-based personal website! There'll be a whole section that dives into the inspiration and mechanics behind this later. For now, here's a little bit about myself!"
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'One of the first things you should know about me is that I love being active. Going on a 12 mile hike with friends, seeing a beautiful sunset, chowing down on some korean BBQ, and then waking up completely sore the next morning is what I live for!'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Of course, as a software engineer who sits at his desk 80% of the time, my days rarely look like that (although I wish they did!). Instead, I workout daily with a mixture of roll ups, flutter kicks, side planks, Arnold presses, tricep kickbacks, push-ups, squats, and other fun exercises.'
  },
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/running.webp',
    altText: 'Me and Jen running',
    height: 436
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Active photo of my girlfriend Jen and I on a late afternoon run.'
  }
];

const {
  numAboutPages, assetManagerData, textManager1Data, textManager2Data
} = (() => {
  let numAboutPages = 0;
  const assetManagerData = [];
  const textManager1Data = [];
  const textManager2Data = [];

  for (let i = 0; i < aboutContent.length; i += 2) {
    const content1 = aboutContent[i];
    const paginatedContent1 = {
      activeMajorPage: MAJOR_PAGES.ABOUT,
      activeMajorPageIdx: numAboutPages,
      pixelMultiplier: 1,
      ...content1
    };

    const content2 = aboutContent[i + 1];
    const paginatedContent2 = {
      activeMajorPage: MAJOR_PAGES.ABOUT,
      activeMajorPageIdx: numAboutPages,
      pixelMultiplier: 1,
      ...content2
    };

    if (content1.contentType === ASSET_TYPES.TEXT) {
      textManager1Data.push(paginatedContent1);

      if (content2.contentType === ASSET_TYPES.TEXT) {
        textManager2Data.push(paginatedContent2);
      } else {
        assetManagerData.push(paginatedContent2);
      }
    } else {
      assetManagerData.push(paginatedContent1);
      textManager1Data.push(paginatedContent2);
    }

    numAboutPages += 1;
  }

  return {
    numAboutPages,
    assetManagerData,
    textManager1Data,
    textManager2Data
  };
})();

export {
  numAboutPages,
  assetManagerData,
  textManager1Data,
  textManager2Data
};
