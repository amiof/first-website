import style from "./Card.module.css"
import React, { Component } from 'react';
import up from "../images/up4.svg"
import down from "../images/down1.svg"
import {Link} from "react-router-dom"

class card extends Component {
    constructor (){
        super();
        this.state = {
            counter : 0

        }
    }

clickHandlerup = ()=>{

    this.setState ((prevState)=>({
        counter : prevState.counter + 1
    }))

}
  clickHandlerDown = ()=>{
    

   (this.state.counter >= 1) && this.setState(prevState=> ({counter : prevState.counter - 1 })) 
  

    
  }

  
    

    render() {
        let {cost , model , imag, id}=this.props
        let {counter} = this.state
        return (
            <div className={style.container}>
                <img src={imag} alt="pic"/>
                <h2><Link to={`/products/${id}`}>{model}</Link></h2>
                <p>{cost} { counter ? `* ${counter}=${counter * cost.split(" ")[0]} $`: ""}</p>
                <div  className={style.arrowContent} >
                    <img  onClick={this.clickHandlerDown} src={down} alt="down" className={style.arrow} id={this.state.counter===0 ? style.downColor : ""}  />
                    <span className={style.counter}>{counter}</span>
                    <img onClick={this.clickHandlerup} src={up} alt="up" className={style.arrow}  />
                </div>
            </div>
        );
    }
}

export default card;