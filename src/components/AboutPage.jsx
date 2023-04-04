import { usePageContext } from '../context/Page';
import { MAJOR_PAGES } from '../utils/majorPages';
import Continue from './Continue';
import FlyManager from './FlyManager';

export default function AboutPage() {
  const {
    majorPage, setMajorPage, aboutPageIdx, setAboutPageIdx
  } = usePageContext();
  const continueOnClick = () => {
    if (aboutPageIdx() === 10) {
      setAboutPageIdx(0);
      setMajorPage(MAJOR_PAGES.HOME);
    } else {
      setAboutPageIdx(aboutPageIdx() + 1);
    }
  };

  return (
    <>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 0}
        swapData={[ {
          activeCondition: true,
          text: "Hey there! I'm Chris Kei (pronounced the same way as you would <key>), a full stack software engineer at DraftKings. It's nice to e-meet you!",
          height: '68px'
        } ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 0}
        swapData={[ {
          activeCondition: true,
          text: "Thanks for checking out my animated-font-based personal website! There'll be a whole section that dives into the inspiration and mechanics behind this later. For now, here's a little bit about myself!",
          width: '342px',
          height: '102px'
        } ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 1}
        swapData={[
          {
            activeCondition: true,
            text: 'One of the most prominent characteristics of me is that I love being active. Going on a 12 mile hike with friends, seeing a beautiful sunset, chowing down on some korean BBQ, and then waking up completely sore the next morning is what I live for!',
            height: '132px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 1}
        swapData={[
          {
            activeCondition: true,
            text: 'Of course, as a software engineer who sits at his desk for 80% of the day, it almost never looks like that (although I wish it did!). My daily workout usually consists of an hour long mixture of abs on my yoga mat and either arms or legs using dumbbells I got at the start of the Covid days.',
            height: '136px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 1}
        swapData={[
          {
            activeCondition: true,
            text: "Some days, I instead do a half-ab workout followed by a run. I started running 2 years ago to get outside more after Covid kept us all inside, and I quickly started to enjoy seeing my progress ramp up and challenging myself to go further distances faster. Last year, I hit my goal of running 4 miles straight under 8 min/mi, and this year I'm hoping to be able to run 10 miles straight in 90 min!",
            height: '136px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 2}
        swapData={[
          {
            activeCondition: true,
            text: "Another sport that I've been playing for a much longer time is tennis. I come from a big tennis family so I started playing young, maybe around six or seven years old; went through multiple years of USTA summer camp; played on my school's tennis team from 7th to 12th grade; and now I play every other week with college friends!",
            height: '153px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 2}
        swapData={[
          {
            activeCondition: true,
            text: "I also love rock climbing! At the start of my freshman year at Northeastern, our recreational climbing club hosted a few free climbing nights, and after those I was hooked. I started telling all my friends about climbing and built up a large group of us who would go three to four times a week, sometimes staying at the gym until midnight. We got pretty good pretty fast maxing out at a V6 in a year, but once Covid hit I decided to take a break. Back in August 2022 I started climbing again, but recently I injured the A2 pulley in my right ring finger so I'm taking it easy for a bit.",
            height: '289px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 3}
        swapData={[
          {
            activeCondition: true,
            text: "When I'm not working or being physically active, you'll probably find me in my kitchen cooking. My favorite dishes to make are ones where you can throw everything in a pot, turn on the stove, and let the flavors compound - think Chinese beef brisket noodle soup, steamed spareribs and taro in black bean sauce, and red wine braised short ribs over mashed potatoes.",
            height: '187px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 3}
        swapData={[
          {
            activeCondition: true,
            text: "While waiting for those to cook, I'm usually playing the piano. Like tennis, I started playing the piano young, maybe in kindergarten. Unlike tennis though, practicing for my piano lessons and recitals felt like a chore, so at the start of high school, I quit. A few years ago, I randomly had the urge to play the piano again and I realized that I liked to play when it was an impromptu activity rather than something forced upon me. Nowadays, I will literally sightread anything and play any piece with an intriguing title on Musescore. I also arranged two pieces that I'll provide links to later!",
            height: '285px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 4}
        swapData={[
          {
            activeCondition: true,
            text: "That's basically me in a nutshell! In the spirit of Barack Obama's <A Promised Land> and Michelle Obama's <Becoming> (my two favorite books of all time!), stay tuned for a few pictures and videos.",
            height: '102px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 4}
        swapData={[
          {
            activeCondition: true,
            text: 'After that, to read about everything work related and what problems software engineering keep me up coding until 2am, check out the Work section.',
            height: '66px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 4}
        swapData={[
          {
            activeCondition: true,
            text: 'If you want to chat about climbing, cooking, pianoing, or anything else, head over to the links page!',
            height: '51px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 4}
        swapData={[
          {
            activeCondition: true,
            text: 'Thanks again for stopping by my website, hope we talk soon! :)',
            height: '34px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 5}
        extraStyles={{
          margin: '0 auto',
          width: '327px',
          height: '436px',
          'margin-bottom': '20px'
        }}
        childrenHeight='436px'
      >
        <img
          src='src/assets/running.webp'
          alt='Me and Jen running'
          width='327'
          height='436'
          style={{
            outline: '2px solid black',
            'outline-offset': '4px'
          }}
        />
      </FlyManager>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 5}
        swapData={[
          {
            activeCondition: true,
            text: 'Active photo of my girlfriend Jen and I on a late afternoon run.',
            height: '30px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 6}
        extraStyles={{
          margin: '0 auto',
          width: '327px',
          height: '245px',
          'margin-bottom': '20px'
        }}
        childrenHeight='245px'
      >
        <img
          src='src/assets/tennis.webp'
          alt='Me and Andrew after tennis'
          width='327'
          height='245'
          style={{
            outline: '2px solid black',
            'outline-offset': '4px'
          }}
        />
      </FlyManager>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 6}
        swapData={[
          {
            activeCondition: true,
            text: 'My tennis buddy Andrew and I after our first tennis tournament together. We won our first match 6-3, lost our second match 0-6, and then sat on this sofa for the next three hours waiting for our friend Jocelyn to finish her matches.',
            height: '115px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 7}
        extraStyles={{
          margin: '0 auto',
          width: '327px',
          height: '405px',
          'margin-bottom': '20px'
        }}
        childrenHeight='405px'
      >
        <video
          controls
          disablepictureinpicture
          width='327'
          height='405'
          style={{
            outline: '2px solid black',
            'outline-offset': '4px'
          }}>
          <source src='src/assets/rock_climbing.webm' type='video/webm' />
        </video>
      </FlyManager>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 7}
        swapData={[
          {
            activeCondition: true,
            text: 'The first V3 I did after not climbing for three months to rest and go to PT. Shoutout to my awesome climbing friends!',
            height: '64px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 8}
        extraStyles={{
          margin: '0 auto',
          width: '327px',
          height: '267px',
          'margin-bottom': '20px'
        }}
        childrenHeight='267px'
      >
        <img
          src='src/assets/beef_brisket_noodle_soup.webp'
          alt='Beef brisket noodle soup'
          width='327'
          height='267'
          style={{
            outline: '2px solid black',
            'outline-offset': '4px'
          }}
        />
      </FlyManager>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 8}
        swapData={[
          {
            activeCondition: true,
            text: 'Traditional chinese beef brisket noodle soup. I always boil the broth for over three hours so that the tendons are as soft as butter!',
            height: '64px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 9}
        extraStyles={{
          margin: '0 auto',
          width: '327px',
          height: '331px',
          'margin-bottom': '20px'
        }}
        childrenHeight='331px'
      >
        <img
          src='src/assets/short_rib.webp'
          alt='Beef brisket noodle soup'
          width='327'
          height='331'
          style={{
            outline: '2px solid black',
            'outline-offset': '4px'
          }}
        />
      </FlyManager>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 9}
        swapData={[
          {
            activeCondition: true,
            text: "Short rib, this time with a white wine sauce over mashed potatoes. I'm terrible at plating, but this may have been the best meal I've ever cooked in my life!",
            height: '85px'
          }
        ]}
      />
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 10}
        extraStyles={{
          margin: '0 auto',
          width: '327px',
          height: '218px',
          'margin-bottom': '20px'
        }}
        childrenHeight='218px'
      >
        <video
          controls
          disablepictureinpicture
          width='327'
          height='218'
          style={{
            outline: '2px solid black',
            'outline-offset': '4px'
          }}>
          <source src='src/assets/piano.webm' type='video/webm' />
        </video>
      </FlyManager>
      <FlyManager
        activeCondition={majorPage() === MAJOR_PAGES.ABOUT && aboutPageIdx() === 10}
        swapData={[
          {
            activeCondition: true,
            text: '11 year old me playing the piano at a recital practice. Yes, they spelled my name wrong, and yes, I was a very chubby child.',
            height: '68px'
          }
        ]}
      />
      <Continue
        activeMajorPage={MAJOR_PAGES.ABOUT}
        onClick={continueOnClick}
      />
    </>
  );
}
