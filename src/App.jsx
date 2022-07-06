import './App.css';
import Kitchen from './Kitchen';
import Bedroom from './Bedroom';
import LivingRoom from './LivingRoom';
import Bath from './Bath';

function App() {

  return (
    <>
      <Bedroom bedNum={1} />
      <Kitchen  />
      <Bath size="Full" />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size="Half" />
      <Bedroom bedNum={3} />

      
    </>        

  );
}

export default App;