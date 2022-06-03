
import './App.css';
import AppContent from './components/AppComp/AppContent';
import BodyHeadContent from './components/bodyheadcomp/BodyHeadContent';
import CityContent from './components/CityComp/CityContent';
import FooterContent from './components/FooterComponent/FooterContent';
import Linkcontent from './components/headcomp/linkcontent';
import PartnersContent from './components/PartnersComp/Partnerscontent';
import TextContent from './components/TextComp/TextContent';

function App() {
  return (
    <div className="App">
      <Linkcontent />
      <BodyHeadContent />
      <PartnersContent />
      <CityContent />
      <AppContent />
      <TextContent/>
      <FooterContent/>
    </div>
  );
}

export default App;
