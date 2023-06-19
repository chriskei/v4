import { ASSET_TYPES } from '../utils/assetTypes';
import { MAJOR_PAGES } from '../utils/majorPages';

const aboutContent = [
  {
    contentType: ASSET_TYPES.TEXT,
    text: "Hey there! I'm Chris Kei (pronounced the same way as you would <key>), a full stack software engineer at DraftKings. It's nice to e-meet you!"
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "Thanks for checking out my animated-custom-font-based personal website. There'll be a whole section that dives into the inspiration and mechanics behind this later. For now, here's a little bit about myself!"
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'The first thing you should know about me is that I love being physically active. One of my favorite days recently consisted of walking from Brighton to Fenway to get a haircut and run other small errands, taking the bus back to Brighton to shower, biking to Davis Square for dinner, and then walking back home as I called a friend.'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Of course, as a software engineer who sits at his desk 80% of the time, my days rarely involve 10+ miles of movement. Instead, I workout at home through the week with a mixture of roll ups, flutter kicks, side planks, Arnold presses, tricep kickbacks, push-ups, squats, and other fun exercises.'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Outside of those workouts, I also juggle three vastly different sports around my schedule: tennis, rock climbing, and running.'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "I've been playing tennis for as long as I can remember. As big tennis players themselves, my parents have always supported and pushed me to play. As a result, I've gone through multiple years of USTA summer camp, played in my middle and high schools' tennis teams, and founded a group of Northeastern Club Tennis rejects to play with throughout college. This summer, I'm part of a social that plays every Wednesday and it's been great having new people to play against and improve with!"
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Another sport that defines a large part of my life is rock climbing. In high school, one of my Outdoor Ed trips was going to a rock climbing gym where I got to try bouldering and loved it. When I started college a few months later, I learned that Boston is a huge rock climbing hub, so I started climbing three to four times a week with a bunch of other Northeastern kids. I still climb with a few of those friends to this day at CRG Fenway!'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'And last but not least, I am also a self-proclaimed runner. Growing up, I actually hated running and called it a <fake sport,> but when Covid hit, I had the urge to go outside and run. Now, I love getting out after work and going for a quick run along the Chestnut Hill Reservoir to clear my head. If all goes well, I may run the Boston Half later this year!'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Another large slice of my life is cooking. Both of my parents and lots of my relatives are amazing cooks, so while I barely cooked for myself growing up, I learned a lot from watching them and helping with small tasks, like cutting the tips off green beans and making oyster sauce slurries. In college, these experiences became the foundation of my cooking journey as I discovered that I love to cook. My favorite dishes to make are ones where you can throw everything in a pot, turn on the stove, and sit back while the flavors compound - think Chinese beef brisket noodle soup, steamed spareribs and taro in black bean sauce, and red wine braised short ribs over mashed potatoes.'
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "Even though I know it's a lot of hard work, I always tell my parents that one day I'm going to open my own restaurant. I truly hope that that becomes reality as I'd love to share my food and culture with others! But at a minimum, when I retire I'd love to live on a farm where I can grow my own fresh fruits and veggies to cook with everyday."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "At the end of a long day, I'm lucky to still have a few hours to myself to wind down. If my brain isn't completely spent by then, I love sitting down at my desk to read. A few years ago, I went through a phase where I read a bunch of classics like <The Grapes of Wrath> and <1984>, but in the end I learned that I loved nonfiction books, particularly autobiographies like Obama's <A Promised Land>. Now, one of my favorite spontaneous things to do is pop into Goodwill to look for books to add to my collection."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "Other times, I'll head to my living room to play the piano. Like tennis, I started playing the piano really young, but after quitting piano lessons I didn't play much until mid-college. Thankfully, I was able to retain a lot of what I learned from difficult classical piano pieces and became quite good at sight-reading music. This has been immensely helpful in navigating the vast world of anime songs, which I love to play because the piano alone can cover every single sound that normally would require multiple instruments or electronic tracks, resulting in a complete feel to pieces. If you're interested, I've actually arranged a few pieces that you can download later!"
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: "That's basically me in a nutshell! Stay tuned for a few pictures and videos, and be sure to check out some of my software engineering work in the <Work> section."
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'If you ever want to chat about any of our common hobbies or work on a project together, reach out to me in the <Links> section. Thanks again for stopping by my website, hope we talk soon! :)'
  },
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/me.webp',
    altText: 'Me',
    height: 218
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'This is me at graduation last year!'
  },
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/friends.webp',
    altText: 'Friends',
    height: 245
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'A picnic with some of my closest friends in Boston Common.'
  },
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/gala.webp',
    altText: 'Gala',
    height: 436
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'My girlfriend Jen and I at her annual dental school gala.'
  },
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/rock_climbers.webp',
    altText: 'Rock climbers',
    height: 245
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Lunch at the local udon shop with my rock climbing buddies.'
  },
  {
    contentType: ASSET_TYPES.VIDEO,
    filePath: 'src/assets/rock_climbing.mp4',
    altText: 'Rock climbing',
    height: 405
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'My first V3 after a four month break from spraining the A4 pulley on my right ring finger.'
  },
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/beef_brisket_noodle_soup.webp',
    altText: 'Beef brisket noodle soup',
    height: 267
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'My friends still call me every so often for the recipe to this beef brisket noodle soup.'
  },
  {
    contentType: ASSET_TYPES.IMAGE,
    filePath: 'src/assets/prime_rib.webp',
    altText: 'Prime rib',
    height: 436
  },
  {
    contentType: ASSET_TYPES.TEXT,
    text: 'Perfectly cooked prime rib I roasted for Christmas dinner.'
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
