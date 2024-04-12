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
  }, [storage]);

  return(
    <div className='flex flex-row max-w-[1400px] min-w-[350px] items-center justify-center size-full'>
      <Storage setDisplay={setDisplay} storage={storage} setStorage={setStorage} storeIcon={storeIcon} /> 
      <div className='flex flex-col size-full overflow-auto items-center overflow-y-auto'>
        <Display display={display} setDisplay={setDisplay} storage={storage} setStorage={setStorage} storeIcon={storeIcon} setStoreIcon={setStoreIcon} />
        <Buttons display={display} setDisplay={setDisplay} storeIcon={storeIcon} setStoreIcon={setStoreIcon} />
      </div>
    </div>
  )
}

export default App;
