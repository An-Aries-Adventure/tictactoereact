import React, { Component } from 'react';
import '../App.css';
import Board from './board';


class Game extends Component{

    render(){
         return(
            <div className ="game">
                <div className='board'>
                    <Board/>
                </div>
                <div>
                <div>{/*status*/}</div>
                <ol>{/*todo*/}</ol>
                </div>
            </div>
        );
    };

};

export default Game; 