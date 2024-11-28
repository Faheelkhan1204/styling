import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("#b4afaf")

  return (
    <div id="main" style={{background: color}}>
      <div id="content">
        <button style={{ background:"#e90c0c"}} onClick={()=>{
          setcolor("#e90c0c")
        }}>
Red 
        </button>
        <button style={{ background:"#FFFF00"}} onClick={()=>{
          setcolor("#FFFF00")
        }} >yellow</button>
        <button style={{ background:"#386641"}} onClick={()=>{
          setcolor("#386641")
        }} >
          Green
        </button>
        <button style={{ background:"#bc6c25"}} onClick={()=>{
          setcolor("#bc6c25")
        }}>Brown</button>
        <button style={{ background:"#8338ec"}} onClick={()=>{
          setcolor("#8338ec")
        }}>Purple</button>
      </div>
      <div>faheel</div>
    </div>
  );
  
  }

export default App
