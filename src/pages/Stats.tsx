import { IonPage, IonContent } from '@ionic/react';
import FitnessChart from '../components/Stats/FitnessChart';

const StatsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <FitnessChart />
      </IonContent>
    </IonPage>
  );
};
export default StatsPage;