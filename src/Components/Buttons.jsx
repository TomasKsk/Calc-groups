import React, { useState } from 'react';
import Operators from './Buttons/Operators';
import Numbers from './Buttons/Numbers';

const Buttons = ({ display, setDisplay }) => {
    
    return(
        <div className='flex size-full min-w-fit flex-col p-4 border-double border-8 border-gray-800'>
            <Operators display={display} setDisplay={setDisplay} />
            <Numbers display={display} setDisplay={setDisplay} />
        </div>
    )
}

export default Buttons;