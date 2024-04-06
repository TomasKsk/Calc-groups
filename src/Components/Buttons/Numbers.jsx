import { useState } from 'react';
import './StyledButtons.css';

const Numbers = ({ display, setDisplay }) => {
    // used for the C delete button to change its textContent
    let [delSw, setDelSw] = useState(false); 

    // populate the number, plus operand buttons
    const buttons = [...Array(10).keys(), '.', 'C', '='];

    // function to handle user clicks on buttons
    const handleClick = (e) => {
        const selector = e.target.textContent;

        //we split the conditions if the clicked button is a number or an operand
        if (!isNaN(+selector)) {
           handleNumber(selector);
        } else {
            handleOperator(selector);
        };        
    };

    // function to add numbers to the sum
    const handleNumber = (num) => {
        //check if the display is 0 text or int
        // and either push the new number or change the sum to the current number
        if (display.sum.length > 1) {
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

    // function to handle '.' '=' 'C' buttons and its functions
    const handleOperator = (op) => {
        //handle the digit
        if (op === '.') {
            handleDigit();
        }

        // handle delete
        if (op === 'C' || op === 'CE') {
            handleDelete(op);
        }

        // end the calculation
        if (op === '=') {
            handleSum();
        }
    };

    // handle '.' button
    const handleDigit = () => {
        //firstly check if '.' exists in the sum
        const tempSel = display.sum;
        const tempArr = display.sum.toString().split('');

        if (!tempArr.includes('.')) {
            setDisplay(prev => ({
                ...prev,
                sum: prev.sum + '.'
            }));
        }
    }

    const handleDelete = (op) => {
        if (op === 'C') {
            setDisplay({
                mem: [],
                sum: 0
            });

            if (display.mem.length > 0) {setDelSw(prev => !prev)} // change the C delete button if the calc memory is not empty

        } else {
            setDisplay(prev => ({
                ...prev,
                sum: 0
            }));

            if (display.mem.length > 0) {setDelSw(prev => !prev)} // change the C delete button if the calc memory is not empty
        };
    };

    return(
        <div className='allbuttons grid grid-cols-4 grid-flow-row-dense'>
            {
                buttons.map((a,b) => (
                    <button onClick={(e) => handleClick(e)} key={b} type="button" className={` text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-400 font-medium text-4xl aspect-square bg-gray-200 rounded`}>
                        {a === 'C' ? (delSw ? 'C' : 'CE') : a}
                    </button>
                ))
            }
        </div>
    )
};

export default Numbers;

