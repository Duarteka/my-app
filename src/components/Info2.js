import React, {Component} from 'react';

class Info2 extends Component{
    constructor(){
        super();
        this.state = {
            ObjectRow :  []
        }
    }
componentDidMount(){
       var rows = [];
        for(var i = 1; i <= 8; i++){
            rows.push({"numero": "0" + i.toString()})
        }
        console.log(rows[0].numero)
        this.setState({
            ObjectRow : rows
        })
    }
    render(){
        return(
            <>
            
             <div className="informatiton">
             <div className="line linea-horizontal animate__animated animate__backInLeft">
                <span></span>
            </div>
                        <h2>Bureal</h2>
                        <p className="texto-info">LE BUREAU EST DÉFINIT SELON PLUSIEURS ZONES DE TRAVAIL DE TAILLE ADAPTÉE ET GARANTISSANT UN CONFORT DE TRAVAIL. CHAQUE ENVIRONNEMENT POSSÈDE UN CARACTÈRE PARTICULIER AFIN DE CRÉER DES « ÎLOTS » EN OPEN SPACE QUI SE DISTINGUENT ET ACCENTUENT CETTE IDÉE DE ZONES INTERCONNECTÉE. UNE CAFÉTÉRIA, UNE CUISINE ÉQUIPÉE ET UN SALON DE DÉTENTE FERMÉ SONT À DISPOSITION POUR TOUS LES UTILISATEURS. UNE SALLE DE MEETING, BAIGNÉE DANS LA LUMIÈRE ZÉNITHALE, EST RÉSERVABLE SELON UN CALENDRIER DES UTILISATEURS. CHAQUE PLACE DE TRAVAIL DANS LE FORFAIT DE BASE CONTIENT UN BUREAU, UN CASIER, AINSI QU’UNE ÉTAGÈRE DESTINÉE AUX CLASSEURS ET AUTRES FOURNITURES.DOMICILIATION (+30.-)</p>
            </div>

            <div className="oficce-grid">
                
                <div className="col_places">
                    
                    {this.state.ObjectRow.map((item, index)=> <Places key={index} number={item.numero} />)}
                   
               </div>
               <div className="plan"><img src="./img/office.jpg" alt=""/></div>
                
               
            </div>
            <section>
                <div className="animated-text">
                    <div className="animated-text"></div>
                    <div className="animated-text-reverse"></div>
                </div>
            </section>
           
            </>
        )
    }
    
}    
const Places = (props) => {
    return(
            <>
            <a key={props.number} href="#" className="place">
                <div className="place-content">
                    <span className="place-content-number">{props.number}</span>
                    
                    <div className="flex-row">
                        <span>Prix</span>
                        <span>450</span>
                    </div>
                    <div className="btn-libre">
                        <button>Libre</button>
                    </div>
                    
                </div>
            </a>

            </>
        )

       
    
    
}




export default Info2;

