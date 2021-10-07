import React, {Component} from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Info from './components/Info';
import Features from './components/Features';
import Info2 from './components/Info2'; 


class App extends Component{
    render(){
        return(
            <>
           
                <Header/>
                <Slider/>
                <Info/>
                <Features/>
                <Info2/>
            
            </>
        )
    }
    
}

export default App;

