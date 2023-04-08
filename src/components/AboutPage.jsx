import { usePageContext } from '../context/Page';
import { aboutPageCopy } from '../copy/aboutPage';
import Copy from '../copy/Copy';
import { MAJOR_PAGES } from '../utils/majorPages';
import Continue from './Continue';
export default function AboutPage() {
  const {
    setMajorPage, aboutPageIdx, setAboutPageIdx
  } = usePageContext();
  const continueOnClick = () => {
    if (aboutPageIdx() === aboutPageCopy.length - 1) {
      setAboutPageIdx(0);
      setMajorPage(MAJOR_PAGES.HOME);
    } else {
      setAboutPageIdx(aboutPageIdx() + 1);
    }
  };

  return (
    <>
      <Copy
        copy={aboutPageCopy}
        activeMajorPage={MAJOR_PAGES.ABOUT}
        majorPageIdx={aboutPageIdx}
      />
      <Continue
        activeMajorPage={MAJOR_PAGES.ABOUT}
        onClick={continueOnClick}
      />
    </>
  );
}
