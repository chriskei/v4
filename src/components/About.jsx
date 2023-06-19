import AssetManager from './AssetManager';
import TextManager from './TextManager';
import {
  assetManagerData, textManager1Data, textManager2Data
} from '../content/about';

export default function About() {
  return (
    <div id='about'>
      <AssetManager
        data={assetManagerData}
        parentDivAdditionalStyles={{ margin: '1rem 0 2rem' }}
      />
      <TextManager
        data={textManager1Data}
        parentDivAdditionalStyles={{ 'margin-top': '1rem' }}
      />
      <TextManager
        data={textManager2Data}
        parentDivAdditionalStyles={{ 'margin-top': '1rem' }}
      />
    </div>
  );
}
