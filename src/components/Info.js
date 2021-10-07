import React, {Component} from 'react';

class Info extends Component{
    
    render(){
        return(
            <>
               <div className="informatiton">
                    <h2>L'espace</h2>
                    <p className="texto-info" >COLLAB EST UN ESPACE DE CO-WORKING SITUÉ AU CŒUR DE VEVEY. C’EST UN LIEU IDÉAL POUR CRÉER, INNOVER ET DÉVELOPPER VOS PROJETS À TRAVERS DES ÉCHANGES INFORMELS ET LES ÉVÈNEMENTS DU RÉSEAU. SITUÉ AU CŒUR DE LA VIEILLE VILLE, L’ESPACE S’OUVRE SUR UNE GRANDE VITRINE QUI ÉCLAIRE ET DONNE DE LA VISIBILITÉ AUX TRAVAUX EXPOSÉS. AGRÉABLE ET TRANQUILLE, MAIS AUSSI DYNAMIQUE ; TOUT EST MIS EN PLACE POUR BOOSTER NOTRE ÉTAT D’ESPRIT ET CRÉER UN ENVIRONNEMENT PROPICE AU TRAVAIL ET AUX RENCONTRE OPPORTUNES.</p>
                <div className="line linea-horizontal animate__animated animate__backInLeft">
                        <span></span>
                </div>
                    <h2>Incubateur d’indépendants</h2>
                    <p className="texto-info">NOUS SOMMES UN GROUPE D’INDIVIDUS ENTREPRENEUR ET CRÉATIF, APPRÉCIANT PARTAGER ET DÉVELOPPER DE NOUVELLES SYNERGIES. NOTRE BUT EST DE CRÉER UN INCUBATEUR D’INDÉPENDANTS QUI PEUVENT NOURRIR LE RÉSEAU ET BÉNÉFICIER DE L’EXPÉRIENCE DES MEMBRES. CE CATALYSEUR SOCIAL PERMET DE PARTAGER LES CONNAISSANCES ET CRÉER DE NOUVELLES COLLABORATIONS QUI POURRONT GÉNÉRER DES OPPORTUNITÉS DE TRAVAIL.</p>
                </div>
            </>
        )
    }
};


export default Info;

