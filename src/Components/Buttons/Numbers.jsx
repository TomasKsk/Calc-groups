import { useState } from 'react';
import './StyledButtons.css';

const Numbers = ({ display, setDisplay }) => {
    let [delSw, setDelSw] = useState(false);
    const buttons = [...Array(10).keys(), '.', 'C', '='];   // CE as clear everything

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
        //handle the digit
        if (op === '.' && display.sum.length > 0) {
            handleDigit();
        }

        if (op === 'C' || op === 'CE') {
            handleDelete(op);
        }

        if (op === '=') {
            handleSum();
        }
    };

    // handle '.' button
    const handleDigit = () => {
        //firstly check if '.' exists in the sum
        const tempArr = display.sum.split('');

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

            setDelSw(prev => !prev) // change the C delete button

        } else {
            setDelSw(prev => !prev) // change the C delete button

            setDisplay(prev => ({
                ...prev,
                sum: 0
            }));

            // if calcMem has an array of nums, then change the CE to C
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

