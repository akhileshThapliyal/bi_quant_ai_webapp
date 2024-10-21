import { useEffect } from "react";
import { loadMainJS } from '../../Utils/utils'; // Import the global functions

export default function TemplatePage(){

    useEffect(() => {      
        loadMainJS();
    }, []);

    return (
        <>
         {/* The main content goes here <main>.....</main> */}
         {/** 
          * Replace <!-- with {/* 
          * Replace --> with the below
         */}
        </>
    );
}