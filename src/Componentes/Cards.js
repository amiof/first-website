import styledd from "./Cards.module.css"
import React, { Component } from 'react';
import Card from "./Card"
import s22 from "../images/s22.jpg";
import s22u from "../images/s22u.jpg";
import iphonese from "../images/iphonse.jpg";
import iphonx from "../images/iphonx.jpg";
import {v4} from 'uuid'


class Cards extends Component {
    constructor(){
        super()
        this.state={
            api: [
                {model:"samsung galaxy s22", cost:"500 $", imag:s22 },
                { model:"samsung galaxy s22u", cost:"690 $", imag:s22u},
                {model:"iphonese", cost:"790 $", imag:iphonese},
                { model:"iphonx", cost:"520 $", imag:iphonx},
              
        ]
        }
    }
    render() {
        
        return (
            <div className={styledd.container}>
                <ul>
                {/* <li><Card model="s22" cost="500 $" imag={s22} /> </li>  */}
                 {this.state.api.map(item=><li key={v4()}><Card  model={item.model} cost={item.cost} imag={item.imag} /></li>)} 

                </ul>
                
            </div>
        );
    }
}

export default Cards;
