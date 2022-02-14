
import { useState } from 'react';
import './App.css';
import ColorChangeButton from './ColorChangeButton';

function App() {
  const [color, setColor] = useState('');
  return (
   <div  className={`react-root ${color}`}>
     <div className='centered'>

      <ColorChangeButton color="red" setColor={setColor}/>
      <ColorChangeButton color="yellow" setColor={setColor}/>
      <ColorChangeButton color="blue" setColor={setColor}/>

       {/* <button className="button-red" onClick={() => setColor('red')}>Red</button>
       <button className="button-yellow" onClick={() => setColor('yellow')}>Yellow</button>
       <button className="button-blue" onClick={() => setColor('blue')}>Blue</button> */}
     </div>
   </div>
  );
}

export default App;
