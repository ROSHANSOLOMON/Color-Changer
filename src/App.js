
import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';



function App() {
  var colors = [
    {
      value:1,
      label:"lime"
    },
    {
      value:2,
      label:"lavender"
    },
    {
      value:3,
      label:"crimson"
    },
    {
      value:4,
      label:"darkblue"
    },
    {
      value:5,
      label:"teal"
    },
    {
      value:6,
      label:"ghostwhite"
    },
    {
      value:7,
      label:"aquamarine"
    },
    {
      value:5,
      label:"aliceblue"
    }

  ];

  const[input,setinput]=useState(colors.label)
  function changeHandle(e){
    setinput(e.label)
    console.log(e.label)
  }
  return (
    <div className="dropdownbar">
          <Select options={colors} onChange={changeHandle} className="optionBut"></Select>
          
          <center><button style={{backgroundColor:`${input}`}}></button></center>
          
    </div>
  );
}

export default App;
