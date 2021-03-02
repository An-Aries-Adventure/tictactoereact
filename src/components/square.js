import React, { Component } from 'react';
import '../App.css';


function Sqaure(props) {
      
        return(
            <button className="square" 
            onClick={props.onClick()}
            >
            {props.value}
            </button>
        );
   
};



export default Sqaure
