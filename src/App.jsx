import React, { useState, useEffect } from 'react';
import Display from './Components/Display';
import Buttons from './Components/Buttons';
import Storage from './Components/Storage';

const App = () => {
  const [display, setDisplay] = useState({
    mem: [],
    sum: ''
  });
  
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem('Calc_save')) || [] // get the storage item or make a new array
  );
  const [storeIcon, setStoreIcon] = useState(false);

  useEffect(() => {
    localStorage.setItem('Calc_save', JSON.stringify(storage));
    console.log('saved storage')
  }, [storage]);

  return(
    <div className='flex flex-col relative size-full'>
      <Display display={display} setDisplay={setDisplay} storage={storage} setStorage={setStorage} storeIcon={storeIcon} setStoreIcon={setStoreIcon} />
      <Buttons display={display} setDisplay={setDisplay} storeIcon={storeIcon} setStoreIcon={setStoreIcon} />
      <Storage setDisplay={setDisplay} storage={storage} setStorage={setStorage} storeIcon={storeIcon} /> 
    </div>
  )
}

export default App;
