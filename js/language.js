document.getElementById("languageToggle").addEventListener("click", function () {
    const languageSelector = document.querySelector(".language-selector-box");

    // Check if the toggle is on the English side
    if (languageSelector.classList.contains("english-active")) {
        // Move toggle to the Spanish side
        languageSelector.classList.remove("english-active");
        languageSelector.classList.add("spanish-active");
        languageSelector.style.setProperty("--toggle-position", "0");
    } else {
        // Move toggle to the English side
        languageSelector.classList.remove("spanish-active");
        languageSelector.classList.add("english-active");
        languageSelector.style.setProperty("--toggle-position", "55%");
    }
});


const translations = {
    en: {
        loading: "Loading...",
        nav_link_one: "Home",
        nav_link_two: "App",
        nav_link_three: "Features",
        nav_link_four: "Screens",
        nav_link_five: "Reviews",
        nav_link_six: "Contact",
        nav_download_button: "Download",
        hero_section_heading: "Relive, share, and build your family legacy.",
        hero_section_para: "Create a living archive of your family where memories are never lost. Turn everyday moments into lasting memories.",
        hero_section_button_one: "Learn More",
        hero_section_button_two: "Contact Us",
        about_sec_mini_heading: "About Us",
        about_sec_heading: "More than an App",
        about_sec_para: "MyTree is a bridge between generations who want to share their stories with loved ones at any time.",
        about_section_one: "Memories",
        about_section_two: "Messages",
        about_sect_readMore: "Read More",
        feature_mini_head: "Our",
        feature_head: "Main Features",
        feature_card_one_head: "Your Wall",
        feature_card_one_para: "Relive, share, and comment on the memories and experiences of your loved ones.",
        feature_card_two_head: "Calendar",
        feature_card_two_para: "Schedule your events or special dates and tag your contacts for new experiences.",
        feature_card_three_head: "Journal",
        feature_card_three_para: "Every family has a story to tell, jot down yours and create new entries in your journal.",
        feature_card_four_head: "Privacy",
        feature_card_four_para: "You can choose who to share each memory with, ensuring any sensitivities are protected.",
        feature_card_five_head: "Cloud",
        feature_card_five_para: "You’ll have your legacy available to reminisce over all your most special moments.",
        feature_card_six_head: "Responsive",
        feature_card_six_para: "It adapts to any mobile screen, including larger devices like tablets.",
        screen_shot_mini_head: "Our Interface",
        screen_shot_head: "The stories we share are the bonds that unite us.",
        screen_shot_para: "This is why we offer an intuitive and simple interface so that any generation in the family can navigate easily.",
        screen_list_one: '<i class="fa fa-check text-primary-gradient me-3"></i>Menus and navigation adapted',
        screen_list_two: '<i class="fa fa-check text-primary-gradient me-3"></i>Recognizable and visible icons',
        screen_list_three: '<i class="fa fa-check text-primary-gradient me-3"></i>Simple and quick processes',
        screen_button: "Download",
        process_min_heading: "How it Works",
        process_heading: "In 3 Simple Steps",
        step_one_heading: "Install the App",
        step_one_desc: "Open Google Play or Apple Store and search for 'MyTree'",
        step_two_heading: "Set Up Your Profile",
        step_two_desc: "Upload your photo, details, and invite all your contacts to build a shared legacy.",
        step_three_heading: "Explore Features",
        step_three_desc: "Now it’s time to create events, invite, tag, upload photos, or message your contacts.",
        download_min_heading: "Download",
        download_heading: "Download the Latest Version",
        download_para: "Install MyTree to experience the power of staying connected with your family from anywhere and building a legacy together.",
        download_button_one: "Available on",
        download_button_two: "Available on",
        testimon_mini_head: "Testimonials",
        testimon_head: "What People Say",
        testimon_one_name: "Marta Sanchez",
        testimon_one_head: "Excellent for organizing family activities!",
        testimon_one_para: "I love this app; it helps the whole family stay in sync with our tasks and events. The reminders are super useful, and the shared lists feature is perfect for organizing shopping. Highly recommended for busy families!",
        testimon_two_name: "Francisco Perez",
        testimon_two_head: "Very useful, but could improve",
        testimon_two_para: "It’s a practical tool for keeping us connected and organized. However, I’d love to see more customization options, like colors for each family member or different themes. Other than that, it works very well.",
        testimon_three_name: "David Martinez",
        testimon_three_head: "Great idea, I like it",
        testimon_three_para: "The app has interesting features. For now, I’m inviting my family members, and I’m sure it’ll be a joy to stay connected since I live abroad.",
        testimon_four_name: "Nuria Rodriguez",
        testimon_four_head: "Our daily ally!",
        testimon_four_para: "Since we started using it, communication at home has greatly improved. We love the alerts for repetitive tasks and the shared calendar. Plus, it’s super easy to use, even for the grandparents. 10/10!",
        contact_mini_head: "Contact",
        contact_head: "Got Questions?",
        contact_para: "Send us a message with your suggestions or questions, and we’ll be happy to read and respond as quickly as possible. <a href='#'>Download now</a>.",
        label_one: "Your Name",
        label_two: "Your Email",
        label_three: "Message",
        contact_button: "Send Message",
        footer_heading_one: "Address",
        footer_location: '<i class="fa fa-map-marker-alt me-3"></i>Barcelona, Spain.',
        footer_email: '<i class="fa fa-envelope me-3"></i>hello@mytreefam.com',
        footer_insta: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="_icon_mxvnc_117 me-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7 2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"> </path> </svg>@mytreeappofficial',
        footer_heading_two: "Quick Links",
        foot_link_one: "Home",
        foot_link_two: "App",
        foot_link_three: "Features",
        foot_link_four: "Screens",
        foot_link_five: "Reviews",
        foot_link_six: "Contact",
        news_letter_heading: "Newsletter",
        news_letter_para: "Subscribe to our newsletter",
        copy_right_text: '&copy; <a class="border-bottom" href="#">My Tree</a>, All Rights Reserved.',
        newsletter_button: "Subscribe",
        terms_and_conditions: "Terms and conditions",
        news_letter_email_input: "Your Email"
    },
    es: {
        loading: "Cargando...",
        nav_link_one: "Inicio",
        nav_link_two: "Aplicación",
        nav_link_three: "Funciones",
        nav_link_four: "Pantallas",
        nav_link_five: "Reseñas",
        nav_link_six: "Contacto",
        nav_download_button: "Descargar",
        hero_section_heading: "Revive, comparte, y construye el legado de tu familia.",
        hero_section_para: "Crea un archivo vivo de tu familia donde las memorias nunca se pierden. Convierte momentos cotidianos en recuerdos eternos.",
        hero_section_button_one: "Saber más",
        hero_section_button_two: "Contact Us",
        about_sec_mini_heading: "Sobre nosotros",
        about_sec_heading: "Más que una App",
        about_sec_para: "MyTree es un puente entre generaciones que quieran compartir sus historias consus seres queridos en cualquier momento.",
        about_section_one: "Recuerdos",
        about_section_two: "Mensajes",
        about_sect_readMore: "Read More",
        feature_mini_head: "Nuestras",
        feature_head: "Funciones principales",
        feature_card_one_head: "Tu muro",
        feature_card_one_para: "Revive, comparte y comenta los recuerdos y vivencias de tus seres queridos.",
        feature_card_two_head: "Calendario",
        feature_card_two_para: "Agenda tus eventos o las fechas especiales y etiqueta a tus contactos paranuevas experiencias.",
        feature_card_three_head: "Diario",
        feature_card_three_para: "Porque cada família tiene una historia que contar, anota la tuya y escribe nuevas entradas en tu diario.",
        feature_card_four_head: "Privacidad",
        feature_card_four_para: "Vas a poder elegir con quien compartir cada uno de tus recuerdos asegurando cualquier sensibilidad.",
        feature_card_five_head: "En la nube",
        feature_card_five_para: "Tendrás todo tu legado siempre disponible para poder rememorar cada uno de tus momentos más especiales.",
        feature_card_six_head: "Responsive",
        feature_card_six_para: "Se adapta a cualquier pantalla móvil, incluyendo otros dispositivos de mayor tamaño como las tablets.",
        screen_shot_mini_head: "Nuestra interfaz",
        screen_shot_head: "Las historias que compartimos son los lazos que nos unen.",
        screen_shot_para: "Por ello, se ofrece una interfaz intuitiva y simple para que cualquier generación de la familia pueda navegar sin problemas.",
        screen_list_one: '<i class="fa fa-check text-primary-gradient me-3"></i>Menús y navegadores adaptados',
        screen_list_two: '<i class="fa fa-check text-primary-gradient me-3"></i>Iconos reconocibles y visibles',
        screen_list_three: '<i class="fa fa-check text-primary-gradient me-3"></i>Procesos simples y rápidos',
        screen_button: "Descargar",
        process_min_heading: "¿Cómo funciona?",
        process_heading: "En 3 sencillos pasos",
        step_one_heading: "Instala la App",
        step_one_desc: "Abre Google Play o Apple Store y escribe en el buscador 'MyTree'",
        step_two_heading: "Configura tu perfil",
        step_two_desc: "Sube tu foto, tus datos e invita a todos tus conocidos para crear un legado conjunto.",
        step_three_heading: "Descubre funcionalidades",
        step_three_desc: "Ahora es momento de poder crear eventos, invitar, etiquetar, subir fotos o escribir a tus conocidos por mensajes.",
        download_min_heading: "Descargar",
        download_heading: "Descarga la utlima version",
        download_para: "Instala MyTree para vivir el poder de estar conetcado con tu familia desde donde quieras para construir juntos un legado.",
        download_button_one: "Disponible en",
        download_button_two: "Disponible en",
        testimon_mini_head: "Testimonios",
        testimon_head: "Hablan de nosotros",
        testimon_one_name: "Marta Sánchez",
        testimon_one_head: "¡Excelente para organizar las actividades familiares!",
        testimon_one_para: "Me encanta esta app, nos ayuda a toda la familia a estar sincronizados con nuestras tareas y eventos. Los recordatorios son súper útiles, y la función de listas compartidas es perfecta para organizar las compras. ¡Muy recomendada para familias ocupadas!",
        testimon_two_name: "Francisco Pérez",
        testimon_two_head: "Muy útil, pero puede mejorar",
        testimon_two_para: "Es una herramienta práctica para mantenernos conectados y organizados. Sin embargo, me gustaría que agregaran más opciones de personalización, como colores para cada miembro de la familia o temas diferentes. Aparte de eso, funciona muy bien.",
        testimon_three_name: "David Martínez",
        testimon_three_head: "Buena idea, me gusta",
        testimon_three_para: "La app tiene funciones interesantes, de momento estoy invitando a mis familiares, seguro que les daré una alegría para poder estar en contacto el vivir fuera del país.",
        testimon_four_name: "Nuria Rodríguez",
        testimon_four_head: "¡Nuestra aliada diaria!",
        testimon_four_para: "Desde que la usamos, la comunicación en casa ha mejorado mucho. Nos encantan las alertas para tareas repetitivas y el calendario compartido. Además, es muy fácil de usar, incluso para los abuelos. ¡10/10!",
        contact_mini_head: "Contacto",
        contact_head: "¿Tienes dudas?",
        contact_para: "Envía un mensaje con tus propuestas, dudas y estaremos  encantados de leerte para contestar en el menor tiempo posible. <a href='#''>Descarga ahora</a>.",
        label_one: "Tu Nombre",
        label_two: "Tu Email",
        label_three: "Mensaje",
        contact_button: "Enviar Mensaje",
        footer_heading_one: "Dirección",
        footer_location: '<i class="fa fa-map-marker-alt me-3"></i>Barcelona, Spain.',
        footer_email: '<i class="fa fa-envelope me-3"></i>hola@mytreefam.com',
        footer_insta: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" lass="_icon_mxvnc_117 me-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"> </path> </svg>@mytreeappofficial',
        footer_heading_two: "Links rápidos",
        foot_link_one: "Home",
        foot_link_two: "App",
        foot_link_three: "Funciones",
        foot_link_four: "Pantallas",
        foot_link_five: "Reseñas",
        foot_link_six: "Contacto",
        news_letter_heading: "Hoja informativa",
        news_letter_para: "Subscribete a nuestro boletín de noticias",
        copy_right_text: '&copy; <a class="border-bottom" href="#">My Tree</a>, Todos los derechos reservados.',
        terms_and_conditions: "Términos y condiciones",
        news_letter_email_input: "Tu Email"

    }

};

// Function to switch language
function switchLanguage(language) {
    // Update text for navigation links
    document.getElementById("loading").textContent = translations[language].loading;
    document.getElementById("nav_link_one").textContent = translations[language].nav_link_one;
    document.getElementById("nav_link_two").textContent = translations[language].nav_link_two;
    document.getElementById("nav_link_three").textContent = translations[language].nav_link_three;
    document.getElementById("nav_link_four").textContent = translations[language].nav_link_four;
    document.getElementById("nav_link_five").textContent = translations[language].nav_link_five;
    document.getElementById("nav_link_six").textContent = translations[language].nav_link_six;
    document.getElementById("nav_download_button").textContent = translations[language].nav_download_button;

    // Update text for hero section
    document.getElementById("hero_section_heading").textContent = translations[language].hero_section_heading;
    document.getElementById("hero_section_para").textContent = translations[language].hero_section_para;
    document.getElementById("hero_section_button_one").textContent = translations[language].hero_section_button_one;
    document.getElementById("hero_section_button_two").textContent = translations[language].hero_section_button_two;

    // Update text for about section
    document.getElementById("about_sec_mini_heading").textContent = translations[language].about_sec_mini_heading;
    document.getElementById("about_sec_heading").textContent = translations[language].about_sec_heading;
    document.getElementById("about_sec_para").textContent = translations[language].about_sec_para;
    document.getElementById("about_section_one").textContent = translations[language].about_section_one;
    document.getElementById("about_section_two").textContent = translations[language].about_section_two;
    document.getElementById("about_sect_readMore").textContent = translations[language].about_sect_readMore;

    // Update text for features section
    document.getElementById("feature_mini_head").textContent = translations[language].feature_mini_head;
    document.getElementById("feature_head").textContent = translations[language].feature_head;
    document.getElementById("feature_card_one_head").textContent = translations[language].feature_card_one_head;
    document.getElementById("feature_card_one_para").textContent = translations[language].feature_card_one_para;
    document.getElementById("feature_card_two_head").textContent = translations[language].feature_card_two_head;
    document.getElementById("feature_card_two_para").textContent = translations[language].feature_card_two_para;
    document.getElementById("feature_card_three_head").textContent = translations[language].feature_card_three_head;
    document.getElementById("feature_card_three_para").textContent = translations[language].feature_card_three_para;
    document.getElementById("feature_card_four_head").textContent = translations[language].feature_card_four_head;
    document.getElementById("feature_card_four_para").textContent = translations[language].feature_card_four_para;
    document.getElementById("feature_card_five_head").textContent = translations[language].feature_card_five_head;
    document.getElementById("feature_card_five_para").textContent = translations[language].feature_card_five_para;
    document.getElementById("feature_card_six_head").textContent = translations[language].feature_card_six_head;
    document.getElementById("feature_card_six_para").textContent = translations[language].feature_card_six_para;

    // Update text for screenshot section
    document.getElementById("screen_shot_mini_head").textContent = translations[language].screen_shot_mini_head;
    document.getElementById("screen_shot_head").textContent = translations[language].screen_shot_head;
    document.getElementById("screen_shot_para").textContent = translations[language].screen_shot_para;
    document.getElementById("screen_list_one").innerHTML = translations[language].screen_list_one;
    document.getElementById("screen_list_two").innerHTML = translations[language].screen_list_two;
    document.getElementById("screen_list_three").innerHTML = translations[language].screen_list_three;
    document.getElementById("screen_button").innerHTML = translations[language].screen_button;

    // Update text for process section
    document.getElementById("process_min_heading").textContent = translations[language].process_min_heading;
    document.getElementById("process_heading").textContent = translations[language].process_heading;
    document.getElementById("step_one_heading").textContent = translations[language].step_one_heading;
    document.getElementById("step_one_desc").textContent = translations[language].step_one_desc;
    document.getElementById("step_two_heading").textContent = translations[language].step_two_heading;
    document.getElementById("step_two_desc").textContent = translations[language].step_two_desc;
    document.getElementById("step_three_heading").textContent = translations[language].step_three_heading;
    document.getElementById("step_three_desc").textContent = translations[language].step_three_desc;

    // Update text for download section
    document.getElementById("download_min_heading").textContent = translations[language].download_min_heading;
    document.getElementById("download_heading").textContent = translations[language].download_heading;
    document.getElementById("download_para").textContent = translations[language].download_para;
    document.getElementById("download_button_one").textContent = translations[language].download_button_one;
    document.getElementById("download_button_two").textContent = translations[language].download_button_two;

    // Update text for testimonials section
    document.getElementById("testimon_mini_head").textContent = translations[language].testimon_mini_head;
    document.getElementById("testimon_head").textContent = translations[language].testimon_head;
    // Update testimonial one
    document.querySelectorAll(".testimon_one_name").forEach((element) => {
        element.innerHTML = translations[language].testimon_one_name;
    });
    document.querySelectorAll(".testimon_one_head").forEach((element) => {
        element.innerHTML = translations[language].testimon_one_head;
    });
    document.querySelectorAll(".testimon_one_para").forEach((element) => {
        element.innerHTML = translations[language].testimon_one_para;
    });

    // Update testimonial two
    document.querySelectorAll(".testimon_two_name").forEach((element) => {
        element.innerHTML = translations[language].testimon_two_name;
    });
    document.querySelectorAll(".testimon_two_head").forEach((element) => {
        element.innerHTML = translations[language].testimon_two_head;
    });
    document.querySelectorAll(".testimon_two_para").forEach((element) => {
        element.innerHTML = translations[language].testimon_two_para;
    });

    // Update testimonial three
    document.querySelectorAll(".testimon_three_name").forEach((element) => {
        element.innerHTML = translations[language].testimon_three_name;
    });
    document.querySelectorAll(".testimon_three_head").forEach((element) => {
        element.innerHTML = translations[language].testimon_three_head;
    });
    document.querySelectorAll(".testimon_three_para").forEach((element) => {
        element.innerHTML = translations[language].testimon_three_para;
    });

    // Update testimonial four
    document.querySelectorAll(".testimon_four_name").forEach((element) => {
        element.innerHTML = translations[language].testimon_four_name;
    });
    document.querySelectorAll(".testimon_four_head").forEach((element) => {
        element.innerHTML = translations[language].testimon_four_head;
    });
    document.querySelectorAll(".testimon_four_para").forEach((element) => {
        element.innerHTML = translations[language].testimon_four_para;
    });


    // Update text for contact section
    document.getElementById("contact_mini_head").textContent = translations[language].contact_mini_head;
    document.getElementById("contact_head").textContent = translations[language].contact_head;
    document.getElementById("contact_para").innerHTML = translations[language].contact_para;
    document.getElementById("label_one").textContent = translations[language].label_one;
    document.getElementById("label_two").textContent = translations[language].label_two;
    document.getElementById("label_three").textContent = translations[language].label_three;
    document.getElementById("contact_button").textContent = translations[language].contact_button;

    // Update footer section
    document.getElementById("footer_heading_one").textContent = translations[language].footer_heading_one;
    document.getElementById("footer_location").innerHTML = translations[language].footer_location;
    document.getElementById("footer_email").innerHTML = translations[language].footer_email;
    document.getElementById("footer_insta").innerHTML = translations[language].footer_insta;
    document.getElementById("footer_heading_two").textContent = translations[language].footer_heading_two;
    document.getElementById("foot_link_one").textContent = translations[language].foot_link_one;
    document.getElementById("foot_link_two").textContent = translations[language].foot_link_two;
    document.getElementById("foot_link_three").textContent = translations[language].foot_link_three;
    document.getElementById("foot_link_four").textContent = translations[language].foot_link_four;
    document.getElementById("foot_link_five").textContent = translations[language].foot_link_five;
    document.getElementById("foot_link_six").textContent = translations[language].foot_link_six;

    // Update newsletter section
    document.getElementById("news_letter_heading").textContent = translations[language].news_letter_heading;
    document.getElementById("news_letter_para").textContent = translations[language].news_letter_para;
    document.getElementById("copy_right_text").innerHTML = translations[language].copy_right_text;
    document.getElementById("terms_and_conditions").innerHTML = translations[language].terms_and_conditions;
    document.getElementById("news_letter_email_input").setAttribute("placeholder", translations[language].news_letter_email_input);
}


// Add event listener to toggle language on click
document.getElementById("languageToggle").addEventListener("click", function () {
    const languageSelector = document.querySelector(".language-selector-box");

    if (languageSelector.classList.contains("spanish-active")) {
        switchLanguage('es');  // Switch to Spanish
    } else {
        switchLanguage('en');  // Switch to English
    }
});
