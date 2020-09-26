import React, { useState } from 'react';
import Image from "react-image-enlarger";
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="App">
      <h2>Decode Base64 to Image</h2>
      <textarea value={input} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)} ></textarea>
      {input && <div>
        <h2>Result</h2>
        <Image
          style={{ width: "30vw", height: "auto" }}
          zoomed={zoomed}
          src={`data:image/png;base64,${input}`}
          onClick={() => setZoomed(true)}
          onRequestClose={() => setZoomed(false)}
        />
      </div>}
    </div>
  );
}

export default App;
