import Image from 'next/image';

export const projectsData = [
    {
        id: 1,
        name: 'Information System for Dental Clinics with Geolocation Search Capability (ISSO)',
        description: "ISSO is a project developed for my thesis, representing an advanced information system for managing dental clinics. ISSO enables patients to quickly locate nearby clinics through a mobile app with a single click, displaying the closest clinics based on their current location. Additionally, patients have access to features such as searching for clinics by name and address, finding available appointments by time and date, making reservations, and viewing dental records from all the clinics they have visited. The web applications for doctors and administrators allow efficient management of clinics, users, appointments, dental records and reservations.",
        tools: ['MySQL', 'ASP.NET', 'Angular', 'React Native Expo'],
        role: 'Full-Stack Developer',
        link: 'https://github.com/MedinaFerhatovic/Informacioni-sistem-stomatoloske-ordinacije',
        image: '/projects/isso.PNG',
    },
    {
        id: 2,
        name: 'Tourist Agency - Bašta Putovanja',
        description: 'This project is a web application for a travel agency that enables users to browse and book current trips. Users can register, ask questions about trips, view details, and manage their reservations. The application supports different user roles: admins can manage users and trips and access questions, while regular users can browse offers and sign up for trips. The application also allows guest access and offers search functionality by categories.',
        tools: ['MongoDB', 'Express.js', "Angular", "Node.js", "Bootstrap"],
        role: 'Full-Stack Developer',
        link: 'https://github.com/MedinaFerhatovic/webtravel_262',
        image: '/projects/webtravel.jpg',
    },
    {
        id: 3,
        name: 'JoyOfFastDelivery',
        description: 'JoyOfFastDelivery is a mobile application that allows users in Kakanj to easily order food from various restaurants. With the option to register and log in, users can add new delivery addresses, browse and search available restaurants, and order their desired meals. Payment is made by entering the card number. The application also allows users to log out once they are done using the services.',
        tools: ['.NET MAUI', 'SQLite'],
        role: 'Mobile Developer',
        link: 'https://github.com/MedinaFerhatovic/JoyOfFastDelivery-.NET-MAUI',
        image: '/projects/joyoffastdelivery.PNG',
    },
    {
        id: 4,
        name: 'Travel Cost Calculator',
        description: "Travel Cost Calculator is a tool for calculating travel expenses, allowing users to easily track their total travel costs. The application enables fuel cost calculation based on basic entered parameters, as well as estimates for accommodation costs and additional expenses, providing a comprehensive overview of all expenses.",
        tools: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://medinaferhatovic.github.io/Travel-Cost-Calculator/TravelCalculator/',
        image: '/projects/travelcalculator.PNG',
        role: 'Frontend Developer',
    },
    {
        id: 5,
        name: 'The Store',
        description: "The Store is a final project for the PHP Web Development course I completed at LANACO, a 4-month program. This project includes user authentication with registration and login for both admin and regular users. As an admin, you have options to add, edit, and delete products, manage inventory, and oversee staff members. Both admins and users have the ability to place orders, ensuring a streamlined shopping experience for all.",
        tools: ['PHP', 'MySQL', 'HTML', 'CSS'],
        link: 'https://github.com/MedinaFerhatovic/Prodavnica',
        image: '/projects/php.PNG',
        role: 'Backend Developer',
    },
    {
        id: 6,
        name: 'Busovača-website',
        description: "The Busovača Website is a simple informational site that provides visitors with essential details about Busovača, including popular places to visit and must-see attractions. This basic version serves as a quick guide to help users explore what the town has to offer.",
        tools: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://medinaferhatovic.github.io/Busovaca-website/',
        image: '/projects/busovaca.PNG',
        role: 'Frontend Developer',
    }
];
