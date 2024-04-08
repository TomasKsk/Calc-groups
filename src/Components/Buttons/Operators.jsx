
const Operators = ({ display, setDisplay }) => {
    const buttons = ['+', '-', '/', 'x'];

    const handleClick = (e) => {
        const selector = e.target.textContent;
        
        const last = display.mem.slice(-1)
        
        // the main condition is to check if the calcMem is empty
        if (display.mem.length > 0) {
            // if sum is not zero
            if (display.sum !== '') {
                // add the number to the mem array
                // erase the sum
                if (isNaN(+last)) {
                    // last = operand
                    setDisplay(prev => ({
                        mem: [...prev.mem, prev.sum, selector],
                        sum: ''
                    }));
                } else {
                    console.log('isnan')
                    setDisplay(prev => ({
                        mem: [prev.sum, selector],
                        sum: ''
                    }));
                };

            } else {
                // check the last item, if its an int
                if (isNaN(+last)) {
                    // you can change the last operand
                    setDisplay(prev => ({
                        ...prev,
                        mem: [prev.mem.slice(0,-1), selector]
                    }));
                }
            }

        } else {
            // other wise check if sum has a number
            if (display.sum !== '') {
                setDisplay(prev => ({
                    mem: [prev.sum, selector],
                    sum: ''
                }));
            }
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