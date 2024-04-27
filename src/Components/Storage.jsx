import { useState, useEffect } from 'react';
import Item from "./Storage/Item";

const Storage = ({ setDisplay, storage, setStorage, storeIcon }) => {

    const [mediaStyle, setMediaStyle] = useState({});

    // instead of direct media queries because they werent stable
    useEffect(() => {
        console.log(window.innerWidth)
        const handleResize = () => {
            if (window.innerWidth <= 750) {
                setMediaStyle({
                    transition: 'right 0.7s',
                    height: '80%',
                    bottom: '0%',
                    position: 'absolute',
                    right: !storeIcon ? '100%' : '0%'
                });
            } else {
                setMediaStyle({});
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial call to set media style based on window width
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [storeIcon]);

    let [first, second, third] = [{}, {}, {}];
    let arr = Object.keys(storage);

    // sort incoming storage items to collumns
    arr.forEach((key, index) => {
        if (index % 3 === 0) {
            first[key] = storage[key];
        } else if (index % 3 === 1) {
            second[key] = storage[key];
        } else {
            third[key] = storage[key];
        }
    });

    return(
        <div 
        // {`flex flex-col items-center relative min-w-300 size-full p-2 max-[750px]:right-${storegePos} max-[750px]:bottom-0 max-[750px]:h-4/5 max-[750px]:absolute bg-gray-200/90 bg-gradient-to-b from-slate-300/50 border-gray-600 border-solid border-8 rounded-t-xl`}
            className={`flex flex-col items-center relative min-w-300 size-full p-2 bg-gray-200/90 bg-gradient-to-b from-slate-300/50 border-gray-600 border-solid border-8 rounded-t-xl`}
            style={mediaStyle}
        >
                <h1 className='font-black text-xl'>Calculator Storage</h1>

                <div style={{scrollbarWidth: 'thin'}} className='flex flex-row max-[350px]:flex-col justify-center gap-2 p-2 overflow-y-auto'>

                    {/* Column 1 */}
                    <div className='flex flex-col gap-2 w-auto'>
                        {
                            Object.keys(first).map((a,b) => {
                                return <Item key={a} id={a} item={storage[a]} storage={storage} setStorage={setStorage} setDisplay={setDisplay} />
                            })
                        }
                    </div>

                    {/* Column 2 */}
                    <div className='flex flex-col gap-2 w-auto'>
                        {
                            Object.keys(second).map((a,b) => {
                                return <Item key={a}  id={a} item={storage[a]} storage={storage} setStorage={setStorage} setDisplay={setDisplay} />
                            })
                        }
                    </div>

                    {/* Column 3 */}
                    <div className='flex flex-col gap-2 w-auto'>
                        {
                            Object.keys(third).map((a,b) => {
                                return <Item key={a}  id={a} item={storage[a]} storage={storage} setStorage={setStorage} setDisplay={setDisplay} />
                            })
                        }
                    </div>

                </div>
        </div>
    );
};

export default Storage;
