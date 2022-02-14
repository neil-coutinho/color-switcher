
import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  return (
   <div  className={`react-root ${color}`}>
     <div className='centered'>
       <button className="button-red" onClick={() => setColor('red')}>Red</button>
       <button className="button-yellow" onClick={() => setColor('yellow')}>Yellow</button>
       <button className="button-blue" onClick={() => setColor('blue')}>Blue</button>
     </div>
   </div>
  );
}

export default App;
