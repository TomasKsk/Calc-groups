import './StyledButtons.css'

const Numbers = ({ display, setDisplay }) => {
    const buttons = [...Array(10).keys(), '.', 'C', '='];

    const handleClick = (e) => {
        const selector = e.target.textContent;
        
        //we split the conditions by checking if the textcontent after conversion can be a integer
        if (!isNaN(+selector)) {
           handleNumber(selector);
        } else {
            handleOperator(selector);
        };        
    };

    const handleNumber = (num) => {
        //check if the display is 0 text or int
        // and either push the new number or change the sum to the current number
        if (display.sum != 0) {
            setDisplay(prev => ({
                ...prev,
                sum: prev.sum + num
            }))
        } else {
            setDisplay(prev => ({
                ...prev,
                sum: num
            }));
        };
    };

    const handleOperator = (op) => {
        console.log('this is an operator', op)
    }

    return(
        <div className='allbuttons grid grid-cols-4 grid-flow-row-dense'>
            {
                buttons.map((_,a) => (
                    <button onClick={(e) => handleClick(e)} key={a} type="button" className={` text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-400 font-medium text-4xl aspect-square bg-gray-200 rounded`}>{buttons[a]}</button>
                ))
            }
        </div>
    )
};

export default Numbers;

