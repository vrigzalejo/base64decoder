import React, { useState, useRef } from 'react';
import Image from "react-image-enlarger";
import Button from "@material-ui/core/Button";
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [zoomed, setZoomed] = useState(false);
  const textAreaRef: any = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="App">
      <h2>Decode Base64 to Image</h2>
      <textarea
        ref={textAreaRef}
        value={input}
        onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setInput(e.target.value)
        }
      ></textarea>
      {input && (
        <div>
          <Button 
            variant="contained"
            size="large"
            color="primary" 
            onClick={() => {
              setInput("");
              if (textAreaRef.current !== null) {
                textAreaRef.current.focus();
              }
            }
          }>
            Clear
          </Button>
          <h2>Result</h2>
          <Image
            style={{ width: "30vw", height: "auto" }}
            zoomed={zoomed}
            src={`data:image/png;base64,${input}`}
            onClick={() => setZoomed(true)}
            onRequestClose={() => setZoomed(false)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
