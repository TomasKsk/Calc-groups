import React, { useState, useEffect } from 'react';

const Display = ({ display }) => {

    return(
        <div className='flex flex-col background w-full h-24 justify-center items-center bg-gradient-to-r border-double border-4 border-gray-200 rounded-t-xl relative'>
            <h1 className='font-bold text-lg text-right pr-2 absolute top-2 right-2'>
                {display.mem}
            </h1>
            <h2 className='font-bold text-4xl text-left pl-4 absolute bottom-2 left-0'>
                {display.sum}
            </h2>
        </div>
    )
};


export default Display;