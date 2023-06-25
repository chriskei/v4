import { ASSET_TYPES } from '../utils/assetTypes';
import { MAJOR_PAGES } from '../utils/majorPages';

const sevenContent = [
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/seven.webp',
    altText: '7PM page',
    height: 243,
    linkHref: 'https://imgur.com/a/rRaStMD'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: '7PM was the first full stack website that I built on my own! Click on the image to see a screen recording of it!'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'In February 2020, I applied for the Capital One Software Engineering Summit. In order to be considered for the program, all applicants were given the very open-ended prompt of creating any application that used the Yelp Fusion API.'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "At the time, I was working at Solaria Labs and had a little bit of front end experience. I still didn't have a basic understanding of how projects were built and hosted though, and I knew that learning that was important, so I figured this would be a great opportunity to learn how to build a website from the ground up."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "The first thing I needed to figure out was how to host the website. Even though I probably could've just submitted my source code and had them load up the page locally, learning more about this process was what I was really going after. So during my next 1-on-1 at work with my mentor Tony, I asked him if he could give me a few pointers and he told me to check out Heroku."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'After doing a bit of exploration, I landed on a Medium guide titled <How to deploy a create-react-app with an Express backend to Heroku>. This was perfect since it went through the basics of Heroku and help set the groundwork for my Express backend to handle calls to the Yelp Fusion API in easy-to-follow language!'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "When I had that foundation in place, I was finally able to focus on interacting with the API and designing the UI. Around now was also when I committed to the idea of building an app that would help users find restaurants to go to when they didn't know what to eat."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "To emphasize this goal, I first made a button that randomly chose 5 out of the 100+ cuisines available on the API. Users could click the button multiple times to get new selections of cuisines, but I thought that this random approach would encourage them to try new cuisines they hadn't had before since they couldn't just pick and choose their favorites. Additionally, to make the search process faster, I kept the form as minimal as possible so that users only had to enter a location, price range, and distance of restaurants they would see."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'At this point, the website was spitting out relevant restaurants! It was functional and it met the requirements for the Summit application. But to be honest, it felt boring.'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "To make the website more interactive, I decided to use the Mapbox API to render a map that would plot the locations of the 10 restaurants that were returned. Upon clicking the map markers, users were able to see that restaurant's cuisine and price range as well as a link to its Yelp entry for more information."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Once the map was complete, there were just a few small finishing touches left to further enhance the website. One that I really liked working on and later playing with was the clickable restaurant tabs at the bottom of the page that would smoothly scroll the map to the clicked restaurant!'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "Overall, for my first, full stack, self-guided website, I was extremely pleased with the outcome! The website landed me a spot in the Summit where I had a great time getting exposed to lots of new technology. I wish you could visit the website and play around with it, but unfortunately Heroku chose to eliminate their free plan and it doesn't make sense for me to continue to host it on their platform or figure out how to migrate the extremely-custom build over to another hosting service, but definitely check out the video linked to the image on the first 7PM page!"
  }
];

const {
  numSevenPages, assetManagerData, textManager1Data, textManager2Data
} = (() => {
  let numSevenPages = 0;
  const assetManagerData = [];
  const textManager1Data = [];
  const textManager2Data = [];

  for (let i = 0; i < sevenContent.length; i += 2) {
    const content1 = sevenContent[i];
    const paginatedContent1 = {
      activeMajorPage: MAJOR_PAGES.SEVEN,
      activeMajorPageIdx: numSevenPages,
      pixelMultiplier: 1,
      ...content1
    };

    const content2 = sevenContent[i + 1];
    const paginatedContent2 = {
      activeMajorPage: MAJOR_PAGES.SEVEN,
      activeMajorPageIdx: numSevenPages,
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

    numSevenPages += 1;
  }

  return {
    numSevenPages,
    assetManagerData,
    textManager1Data,
    textManager2Data
  };
})();

export {
  numSevenPages,
  assetManagerData,
  textManager1Data,
  textManager2Data
};
