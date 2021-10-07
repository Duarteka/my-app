import { useEffect, useState } from 'react';

const images = [
    "./img/1.jpg",  
    "./img/2.jpg",  
    "./img/3.jpg",
]
        
export default function Slider () {
    const [index, setIndex] = useState(0);
    const next = () => {
        setIndex((i) => (i + 1) % images.length);
        
    };
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 2000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
    <div className="img-container">
        <div className="slides">
            <img src={images[index]} alt={""} />
        </div>
        <div className="line linea-horizontal animate__animated animate__backInLeft">
            <span></span>
        </div>
    </div>  
   
    
  );
}
     
    
    

 


