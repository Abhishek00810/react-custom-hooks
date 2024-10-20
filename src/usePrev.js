import { useState, useEffect, useRef } from "react";

export const usePrev = (value) =>{
    const ref = useRef();

    useEffect(() => {
        console.log("Ref is updated")
        ref.current = value;
      }, [value]);
    console.log("Ref is returned");
    return ref.current;
}