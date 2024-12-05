import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const carListRef = useRef(null);
    const navigate = useNavigate();

    const categories = [{
            id: 1,
            name: 'Luxury',
            lien: 'luxury',
            image: require('./images/c63_0.png'),
            description: 'Catégorie haut de gamme pour un confort ultime.',
        },
        {
            id: 2,
            name: 'Sport',
            lien: 'sport',
            image: require('./images/bmw.png'),
            description: 'Des voitures rapides et élégantes.',
        },
        {
            id: 3,
            name: 'SUV',
            lien: 'suv',
            image: require('./images/gls.png'),
            description: 'Parfait pour les familles et les aventures.',
        },
        {
            id: 4,
            name: 'Berlines',
            lien: 'berlines',
            image: require('./images/208.png'),
            description: 'Compact et pratique pour la ville.',
        },
        {
            id: 5,
            name: 'Citadine',
            lien: 'citadine',
            image: require('./images/208.png'),
            description: 'Petites voitures pour des trajets faciles.',
        },
        {
            id: 6,
            name: 'Mini',
            lien: 'mini',
            image: require('./images/fiat500.png'),
            description: 'Petites voitures pour des trajets faciles.',
        },
    ];

    const scrollLeft = () => carListRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    const scrollRight = () => carListRef.current.scrollBy({ left: 300, behavior: 'smooth' });

    const handleCategoryClick = (categoryId) => {
        const category = categories.find((cat) => cat.id === categoryId);
        if (category) {
            navigate(`/Categories/${category.lien.toLowerCase().replace(' ', '-')}`);
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
        /p> <
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
            categories.map((category) => ( <
                div key = { category.id }
                className = "car-template"
                onClick = {
                    () => handleCategoryClick(category.id) } >
                <
                img src = { category.image }
                alt = { category.name }
                className = "car-image" /
                >
                <
                h3 > { category.name } < /h3> <
                p > { category.description } < /p> <
                button > Découvrir < /button> <
                /div>
            ))
        } <
        /div> <
        /section> <
        /div>
    );
};

export default Home;