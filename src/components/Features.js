import React, {Component} from 'react';
import {feature} from "./configs/config_features.js";


class Features extends Component{
    constructor(){
        super();
        this.state = {
            feature : feature
        }
    }
    render(){
        return(
            <>
             <div className="features">
                    {this.state.feature.map((item, index) => <Feature key={index} icono={item.ruta} feature_text={item.feature_text}/>)}
                   
            </div>
            </>
        )
    }
    
}    

const Feature = (props)=> {
    return(
        <>
        <article className="feature">
            <div className="line linea-horizontal animate__animated animate__backInLeft">
                <span></span>
            </div>
            <div className="feature_content">
                <img className="feature_icono" src={props.icono}/>
                <h4 className="feature_text_content">{props.feature_text}</h4>
            </div>
            <div className="line linea-vertical animate__animated animate__backInUp">
                <span></span>
            </div>
        </article>
        </>
    )
}

export default Features;

