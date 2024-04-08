import React, { useState, useEffect } from 'react';
import Display from './Components/Display';
import Buttons from './Components/Buttons';
import Storage from './Components/Storage';

const App = () => {
  const [display, setDisplay] = useState({
    mem: [],
    sum: ''
  });
  
  const [storage, setStorage] = useState([]);
  const [storeIcon, setStoreIcon] = useState(false)

  return(
    <div className='flex flex-col relative size-full'>
      <Display display={display} setDisplay={setDisplay} storage={storage} setStorage={setStorage} storeIcon={storeIcon} setStoreIcon={setStoreIcon} />
      <Buttons display={display} setDisplay={setDisplay} storeIcon={storeIcon} setStoreIcon={setStoreIcon} />
      <Storage display={display} setDisplay={setDisplay} storage={storage} setStorage={setStorage} storeIcon={storeIcon} setStoreIcon={setStoreIcon} /> 
    </div>
  )
}

export default App;
