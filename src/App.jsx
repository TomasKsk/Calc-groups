import React, { useState, useEffect } from 'react';
import Display from './Components/Display';
import Buttons from './Components/Buttons';
import Storage from './Components/Storage';

const App = () => {
  const [display, setDisplay] = useState({
    mem: [],
    sum: 0
  });
  
  const [storage, setStorage] = useState([]);

  return(
    <div className='flex flex-col'>
      <Display display={display} setDisplay={setDisplay} storage={storage} setStorage={setStorage} />
      <Buttons display={display} setDisplay={setDisplay} />
      <Storage display={display} setDisplay={setDisplay} storage={storage} setStorage={setStorage} /> 
    </div>
  )
}

export default App;
