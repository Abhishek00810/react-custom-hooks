import React, { useState } from "react";
import './app.css'
import { useDebouncer } from "./useDebouncer";  // Assuming useDebouncer is in a separate file

const DebounceTest = () => {
    const [inputValue, setInputValue] = useState('');
    const { updateValue } = useDebouncer(inputValue, 200);  // 1000ms delay

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Type something..." 
            />
            <p>Debounced Value: {updateValue}</p>
        </div>
    );
};

export default DebounceTest;
