import AssetManager from './AssetManager';
import TextManager from './TextManager';
import {
  assetManagerData, textManager1Data, textManager2Data
} from '../v2-content/about';

export default function About() {
  return (
    <div id='about'>
      <AssetManager
        delay={100}
        data={assetManagerData}
        parentDivAdditionalStyles={{ margin: '1rem 0 2rem' }}
      />
      <TextManager
        delay={100}
        data={textManager1Data}
        parentDivAdditionalStyles={{ 'margin-top': '1rem' }}
      />
      <TextManager
        delay={200}
        data={textManager2Data}
        parentDivAdditionalStyles={{ 'margin-top': '1rem' }}
      />
    </div>
  );
}
