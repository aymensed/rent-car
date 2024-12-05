import React from 'react';
import Navbar from './Navbar'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun

const Luxury = () => {
    const cars = [{
            id: 1,
            name: 'Lamburguni Urus',
            image: require('../images/urus.png'),
            description: 'Berline élégante et spacieuse, idéale pour la conduite en ville.',
            price: 'à partir de 25€/jour',
        },
        {
            id: 2,
            name: 'Mercedes G 63',
            image: require('../images/g63.png'),
            description: 'Confort et performance pour un voyage agréable.',
            price: 'à partir de 28€/jour',
        },
        {
            id: 3,
            name: 'audi ',
            image: require('../images/audi.png'),
            description: 'Confort et performance pour un voyage agréable.',
            price: 'à partir de 28€/jour',
        },


    ];

    return ( <
        div className = "categories-container" >
        <
        Navbar / >
        <
        h1 className = "category-title" > Mini < /h1> <
        p className = "category-description" > Découvrez notre gamme de mini - cars pour des trajets pratiques et économiques. < /p> <
        div className = "categories-grid" > {
            cars.map((car) => {
                // Remplace les caractères non alphabétiques par des tirets
                const carNameSlug = car.name.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '-');

                return ( <
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
                    a href = { `/luxury/${carNameSlug}` }
                    className = "details-link" >
                    Voir les détails <
                    /a> <
                    /div>
                );
            })
        } <
        /div> <
        /div>
    );
};

export default Luxury;