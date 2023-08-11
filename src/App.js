import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pakiautomaadid, setPakiautomaadid] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/parcel-machines")
      .then(res => res.json())
      .then(json => setPakiautomaadid(json));
  }, []);

  return (
    <div className="App">
      <select>
        {pakiautomaadid.map(automaat => 
            <option>
                {automaat.NAME}
            </option>)}
      </select>
    </div>
  );
}

export default App;
