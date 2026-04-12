document.addEventListener("DOMContentLoaded", function() {

    // Conseil du jour
    const conseils = [
        "Ne forcez jamais votre enfant à entrer dans l'eau. Respectez son rythme — chaque enfant avance à sa propre vitesse.",
        "Encouragez chaque petit progrès, même minime. Un regard confiant de votre part vaut plus que mille mots.",
        "Mettez-vous à la hauteur de votre enfant — physiquement et émotionnellement. Voyez l'eau avec ses yeux.",
        "La patience est votre meilleur outil. L'aisance aquatique se construit sur des semaines, pas en une séance.",
        "Transformez chaque séance en jeu. Un enfant qui s'amuse dans l'eau apprend sans même s'en rendre compte.",
        "Si votre enfant boit la tasse, restez calme et souriant. Votre réaction rassure — ou inquiète. C'est vous qui choisissez.",
        "Ne laissez jamais votre enfant seul dans l'eau, même quelques secondes. Votre présence est sa sécurité."
    ];

    const jourActuel = new Date().getDay();
    document.getElementById("conseil-du-jour").textContent = conseils[jourActuel];

    // Animations scroll
    const observateur = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.apparition').forEach(el => {
        observateur.observe(el);
    });

    // FAQ accordéon
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
          const reponse = question.nextElementSibling;
          const estOuvert = question.classList.contains('ouvert');

        // Fermer toutes les questions ouvertes
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('ouvert');
            q.nextElementSibling.style.maxHeight = null;
        });

        // Si la question n'était pas ouverte, l'ouvrir
        if (!estOuvert) {
            question.classList.add('ouvert');
            reponse.style.maxHeight = reponse.scrollHeight + 'px';
        }
    });
});

});

function toggleMenu() {
    const navLiens = document.querySelector('.nav-liens');
    navLiens.classList.toggle('ouvert');
}