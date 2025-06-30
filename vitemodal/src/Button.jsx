"use client";
import React from 'react';

export default function Button({onClick, children}) {
    //onclick is a function that will be called when the button is clicked
    //children is the content of the button, which can be text or other elements
    return (
       
          <button onClick={onClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style = {{ backgroundColor : "orange" , fontSize : "1.5rem" , fontFamily : "Arial, sans-serif" , color : "#500FFF" , padding : "15px 25px" , borderRadius : "55px" , border : "none" , cursor : "pointer"}}>

            {children}
          </button>
    
    );

 

}