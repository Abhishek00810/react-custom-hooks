import { useEffect, useState } from "react"
export const useDebouncer=(data, value)=>{
    const [updateValue, setupdateValue] = useState('');
    useEffect(()=>{
        const response = setTimeout(()=>{
            setupdateValue(data);
        }, value)

        return ()=>{
            clearTimeout(response);
        }
    }, [data, value]);

    return {updateValue};
}

