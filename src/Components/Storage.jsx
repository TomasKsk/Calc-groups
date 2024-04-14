import Item from "./Storage/Item";

const Storage = ({ setDisplay, storage, setStorage, storeIcon }) => {
    const storegePos = !storeIcon ? 'full' : '0';

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
            className={`flex flex-col items-center relative min-w-300 size-full p-2 right-0 max-[750px]:right-${storegePos} max-[750px]:bottom-0 max-[750px]:h-4/5 max-[750px]:absolute bg-gray-200/90 bg-gradient-to-b from-slate-300/50 border-gray-600 border-solid border-8 rounded-t-xl`}
            style={{transition: 'right 0.7s'}}
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
