import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const carListRef = useRef(null);
    const navigate = useNavigate();

    const cars = [{
            id: 1,
            name: 'Mercedes C63',
            lien: 'C63',
            image: require('./images/c63_0.png'),
            pricePerHour: '9000da/jour',
            consumption: '10L/100km',
            rating: 5,
            transmission: 'Automatique',
            doors: 4,
            seats: 5,
        },
        {
            id: 2,
            name: 'BMW Série 3',
            lien: 'Serie3',
            image: require('./images/bmw.png'),
            pricePerHour: '8000da/jour',
            consumption: '8L/100km',
            rating: 4,
            transmission: 'Manuelle',
            doors: 4,
            seats: 5,
        },
        {
            id: 3,
            name: 'mercedes gls',
            lien: 'A4',
            image: require('./images/gls.png'),
            pricePerHour: '8500da/jour',
            consumption: '9L/100km',
            rating: 5,
            transmission: 'Automatique',
            doors: 4,
            seats: 5,
        },
        {
            id: 4,
            name: 'peageot 208',
            lien: 'Evoque',
            image: require('./images/208.png'),
            pricePerHour: '12000da/jour',
            consumption: '12L/100km',
            rating: 5,
            transmission: 'Automatique',
            doors: 5,
            seats: 5,
        },
        // Ajoutez d'autres voitures ici
    ];

    const scrollLeft = () => carListRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    const scrollRight = () => carListRef.current.scrollBy({ left: 300, behavior: 'smooth' });

    const handleCarClick = (carId) => {
        const car = cars.find((car) => car.id === carId);
        if (car) {
            navigate(`/Cars/${car.lien.toLowerCase().replace(' ', '-')}`);
        }
    };

    return ( <
        div >
        <
        nav className = "navbar" >
        <
        ul >
        <
        li > < a href = "#home" > Accueil < /a></li >
        <
        li > < a href = "#services" > Services < /a></li >
        <
        li > < a href = "#contact" > Contact < /a></li >
        <
        li > < a href = "#models" > Nos Modèles < /a></li >
        <
        li > < a href = "#reviews" > Avis < /a></li >
        <
        /ul> <
        /nav>

        <
        section id = "home"
        className = "home" >
        <
        h1 > Location de voiture à Sétif < /h1> <
        h2 > Qui sommes - nous ? < /h2> <
        p >
        AYMEN RENT CAR est une agence de location de voitures, couvrant les aéroports d 'Alger, Oran, Béjaia, Sétif, Constantine et Annaba.
        Nous proposons des véhicules pour rendre votre séjour en Algérie agréable.Notre équipe est à votre service pour répondre à toutes vos attentes. <
        /p>

        { /* Carte flottante "Visite notre showroom avec VR" */ } <
        div className = "card-flottante" >
        <
        img src = { require('./images/showroom.png') }
        alt = "Showroom"
        className = "card-image" /
        >
        <
        img src = { require('./images/VR.png') }
        alt = "Showroom VR"
        className = "card-image" /
        >
        <
        h3 > Visitez notre showroom avec VR < /h3> <
        p > Essayez une belle expérience avec notre technologie VR! < /p> <
        /div> <
        /section>

        <
        section id = "models"
        className = "car-showcase" >
        <
        h2 > Choisissez votre catégorie de voiture < /h2>

        <
        button onClick = { scrollLeft }
        className = "scroll-btn scroll-left" > ⟨ < /button> <
        button onClick = { scrollRight }
        className = "scroll-btn scroll-right" > ⟩ < /button>

        <
        div ref = { carListRef }
        className = "car-list" > {
            cars.map((car) => ( <
                div key = { car.id }
                className = "car-template"
                onClick = {
                    () => handleCarClick(car.id) } >
                <
                img src = { car.image }
                alt = { car.name }
                className = "car-image" /
                >
                <
                h3 > { car.name } < /h3> <
                p > Prix par jour: { car.pricePerHour } < /p> <
                p > Consommation: { car.consumption } < /p> <
                p > Étoiles: { "★".repeat(car.rating) } < /p> <
                p > Transmission: { car.transmission } < /p> <
                p > Portes: { car.doors } < /p> <
                p > Places: { car.seats } < /p> <
                button > Réserver < /button> <
                /div>
            ))
        } <
        /div> <
        /section> <
        /div>
    );

};

export default Home;