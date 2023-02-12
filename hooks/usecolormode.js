import { useEffect } from "react";
import useLocalStorage from "./uselocalstorage";
export default function usecolormode(){
    const [colormode,setcolormode]= useLocalStorage('color-mode','light');

    useEffect(()=>{
        const className="dark";
        const bodyClasses= window.document.body.classList;

        colormode==='dark'?bodyClasses.add(className):bodyClasses.remove(className);
    },[colormode]);
    return [colormode,setcolormode];
}