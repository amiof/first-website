import style from './Search.module.css'

import React, { Component } from 'react';





class Search extends Component {
    constructor(){
        super()
        this.state = {
            text : ""
        }
    }
     valueHandeler = (e)=>{
        this.setState ({
            text : e.target.value
        })

     }

    render() {
        return (
            <div className={style.container}>
            <div>
                <p>Search what you want :</p>
            </div>
            <div>
                <input value={this.state.text} onChange={this.valueHandeler}   placeholder='Search...'></input>
                <br />
                <span>{this.state.text}</span>
            </div>
            
        </div>
        );
    }
}

export default Search;




