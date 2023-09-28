import { useState } from 'react';
import './App.css';
function App() {
  const [value, setvalue] = useState(0);
  
   return (
    <div className="App">
      <main>
      <div className='value'>{value}</div>
      </main>
    </div>
  );
}

export default App;
