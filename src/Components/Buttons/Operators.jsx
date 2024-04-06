
const Operators = ({ display, setDisplay }) => {
    const buttons = ['+', '-', '/', 'x'];

    const handleClick = (e) => {
        const selector = e.target.textContent;
        
        // the calcmem has to have already something in to be able to push an operator
        if (display.mem.length > 0) {
            setDisplay(prev => ({
                ...prev,
                sum: [prev.sum, +selector]
            }));
        }
    };

    return(
        <div className='grid grid-cols-4'>
            {
                buttons.map(a => (
                    <button onClick={(e) => handleClick(e)} key={a} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-400 font-medium text-4xl grow aspect-square bg-gray-200 rounded">{a}</button>
                ))
            }
        </div>
    )
};

export default Operators