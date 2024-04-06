import React, { useState, useEffect } from 'react';
import Display from './Components/Display';
import Buttons from './Components/Buttons';

const App = () => {
  const [display, setDisplay] = useState({
    mem: [],
    sum: 0
  });
  // const [storage, setStorage] = useState([]);

  return(
    <React.Fragment>
      <Display display={display} />
      <Buttons display={display} setDisplay={setDisplay} />
    </React.Fragment>
  )
}

export default App;
