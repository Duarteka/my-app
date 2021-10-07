import React, {Component} from 'react';

class Header extends Component{
    
    render(){
        return(
            <>
            <div className="nav">
                <nav className="navegation">
                    <div className="nav-container">
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Collab</a></li>
                            <li><a href="#">Infos</a></li>
                        </ul>
                      </div>
                </nav>
               
            </div>
            
           
            
            <div className="header flex-row">
                <a href="#" className="left-item reveal">
                    <div className="header-item-content">
                        <h2></h2>
                        <div className="arrow-left reveal">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="307" viewBox="0 0 281 307">
                                <text id="_" data-name="􀁺" transform="translate(2 244)" fill="none" stroke="#000" stroke-width="2" font-size="254" font-family="Kailasa, SF Compact"><tspan x="0" y="0">􀁺</tspan></text>
                            </svg>
                        </div>
                       
                    </div>
                </a>
                <a className="header_item active reveal">  
                    <div className="co-working header-item-content">
                        <h1 className="item-title">coworking <br/>ávevey</h1>
                    </div>
                </a>
                <a href="#" className="right-item reveal">
                    <div className="header-item-content">
                        <h2 className="item-title"></h2>
                        <div className="arrow-right">
                       
                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="307" viewBox="0 0 281 307">
                                <text id="_" data-name="􀁺" transform="translate(279 63) rotate(180)" fill="none" stroke="#000" stroke-width="2" font-size="254" font-family="Kailasa, SF Compact"><tspan x="0" y="0">􀁺</tspan></text>
                            </svg>
                        </div>
                    </div>
                </a>
            </div>
            
            <div className="line linea-horizontal animate__animated animate__backInLeft">
                <span></span>
            </div>
            </>
        )

    }
    
    
};

export default Header;

