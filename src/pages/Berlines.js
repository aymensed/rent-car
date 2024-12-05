import React from 'react';
import Navbar from './Navbar'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun

const Berlines = () => {
    const cars = [{
            id: 1,
            name: 'Peugeot 508',
            image: require('../images/208.png'),
            description: 'Berline élégante et spacieuse, idéale pour la conduite en ville.',
            price: 'à partir de 25€/jour',
        },
        {
            id: 2,
            name: 'Renault Talisman',
            image: require('../images/208.png'),
            description: 'Confort et performance pour un voyage agréable.',
            price: 'à partir de 28€/jour',
        },
        {
            id: 3,
            name: 'BMW Série 3',
            image: require('../images/bmw.png'),
            description: 'Un design sportif avec des technologies avancées.',
            price: 'à partir de 45€/jour',
        },
        {
            id: 4,
            name: 'Mercedes-Benz Classe C',
            image: require('../images/gls.png'),
            description: 'Luxe et confort ultime pour chaque trajet.',
            price: 'à partir de 50€/jour',
        },
    ];

    return ( <
        div className = "categories-container" >
        <
        Navbar / > { /* Ajouter la barre de navigation */ } <
        h1 className = "category-title" > Berlines < /h1> <
        p className = "category-description" > Découvrez notre gamme de berlines confortables et élégantes pour tous vos besoins. < /p> <
        div className = "categories-grid" > {
            cars.map((car) => ( <
                div key = { car.id }
                className = "car-card" >
                <
                img src = { car.image }
                alt = { car.name }
                className = "car-image" / >
                <
                h2 > { car.name } < /h2> <
                p > { car.description } < /p> <
                p className = "car-price" > { car.price } < /p> <
                a href = { `/berlines/${car.name.toLowerCase().replace(/\s+/g, '-')}` }
                className = "details-link" >
                Voir les détails <
                /a> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default Berlines;