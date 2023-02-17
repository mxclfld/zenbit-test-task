import Footer from './components/Footer';
import MainSection from './components/MainSection';
import CloudBottom from './components/assets/CloudBottom';
import CloudButton from './components/assets/CloudButton';
import CloudButtonSmall from './components/assets/CloudButtonSmall';
import CloudCartoon from './components/assets/CloudCartoon';
import CloudHeader from './components/assets/CloudHeader';
import CloudMap from './components/assets/CloudMap';
import CloudMapSmall from './components/assets/CloudMapSmall';
import CloudMessage from './components/assets/CloudMessage';
import CloudName from './components/assets/CloudName';
import Map from './components/assets/Map';
import RedCartoonMap from './components/assets/RedCartoonMap';
import Sun from './components/assets/Sun';
import YellowCartoonMap from './components/assets/YellowCartoonMap';
import YellowCartoonTop from './components/assets/YellowCartoonTop';
import { Container } from './components/styles/Container.styled';

function App() {
  return (
    <Container>
      <MainSection />
      <Footer />
      <Map />
      <Sun />
      <CloudName />
      <CloudHeader />
      <CloudMessage />
      <CloudCartoon />
      <CloudBottom />
      <CloudButton />
      <CloudButtonSmall />
      <CloudMap />
      <CloudMapSmall />
      <YellowCartoonMap />
      <RedCartoonMap />
      <YellowCartoonTop />
    </Container>
  );
}

export default App;
