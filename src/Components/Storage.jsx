import Item from "./Storage/Item";

const Storage = ({ setDisplay, storage, setStorage, storeIcon }) => {
    const storegePos = !storeIcon ? '100%' : '0%';

    let [first, second, third] = [{}, {}, {}];
    let arr = Object.keys(storage);

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
            style={{height: '75%', right: storegePos, transition: 'right 0.7s ease-in-out'}} 
            className='flex flex-col size-full absolute bottom-0 items-center flex-nowrap bg-gray-200/90 bg-gradient-to-b from-slate-300/50 border-gray-600 border-double border-t-4'
        >
                <h1 className='font-black text-xl'>Calculator Storage</h1>

                <div style={{scrollbarWidth: 'thin'}} className='flex flex-row justify-center gap-2 p-2 overflow-y-auto'>
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
