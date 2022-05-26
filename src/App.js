import React, { useState } from 'react';
import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Veri, setVeri] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState("black")
  const [checkOn, setcheckOn] = useState(false)
  return (
    <div className="App">
      <div className='controls'>
        {/* Horizontal Length */}
        <label className='textChange'>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={Hori} onChange={(e) => setHori(e.target.value)} />
        {/* Vertical Length */}
        <label className='textChange'>Vertical Length</label>
        <input type="range" min="-200" max="200" value={Veri} onChange={(e) => setVeri(e.target.value)} />
        {/* BLur */}
        <label className='textChange'>Blur</label>
        <input type="range" min="0" max="200" value={Blur} onChange={(e) => setBlur(e.target.value)} />
        {/* Color */}
        <label className='textChange'>Color </label>
        <input type="color" value={Color} onChange={(e) => setColor(e.target.value)} />
        {/* Switch */}
          <div class="switch">
            <label className='textChange'>
              OutLine
              <input type="checkbox" checked={checkOn} onChange={() => setcheckOn(!checkOn)}/>
              <span className="lever"></span>
              Inset
            </label>
          </div>
      </div>



      {/* Output */}
      <div className='output'>
        <div className='box' style={{ boxShadow: `${checkOn?"Inset":""} ${Hori}px ${Veri}px ${Blur}px ${Color}` }}>
          <p className='textChange'>BoxShadow : {Hori}px {Veri}px {Blur}px {Color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
