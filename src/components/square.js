import React, { Component } from 'react';
import '../App.css';


class Sqaure extends Component{
    
    
    render (){

        return(
            <button className ="square">
                {this.props.value}
            </button>

        );


    };
};



export default Sqaure
