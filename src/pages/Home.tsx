import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Menu from '../components/Menu';
import Upload from '../components/Upload';
import './Home.css';

const Home: React.FC = () => {
  return (
  <IonApp>
    <IonContent className="ion-padding">
      <Upload />
    </IonContent>
  </IonApp>
  );
};

export default Home;
