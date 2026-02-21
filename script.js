// ========================================
// SCROLL PROGRESS BAR
// ========================================

function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;

    document.getElementById('progressBar').style.width = progress + '%';
}

// ========================================
// NAVBAR SHOW/HIDE
// ========================================

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

function handleNavbar() {
    const scrollTop = window.scrollY;

    if (scrollTop > 200) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }

    lastScrollTop = scrollTop;
}

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-category, .timeline-item, .experience-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// ========================================
// PROJECT MODAL
// ========================================

const projectsData = {
    1: {
        title: "Datathon Bordeaux Métropole",
        description: `
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Contexte</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Le datathon Métrodata a été organisé par Bordeaux Métropole autour du thème : « 48 heures pour transformer les données en indicateurs clés des transitions économiques ». Notre équipe, composée de 8 étudiants aux profils complémentaires (économie, data science, data engineering et développement), a travaillé sur le défi des transitions sociales au sein des entreprises. Nous avons commencé par collecter et croiser des données issues de différentes sources, notamment des données internes de Bordeaux Métropole.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">TransFair - Observatoire des transitions sociales</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                TransFair est le nom de l'observatoire que nous avons conçu pour analyser les transitions sociales au sein des entreprises. Il repose sur trois axes d'analyse principaux : les inégalités salariales, l'économie sociale et solidaire (ESS) comme modèle vertueux face aux défis des transitions, et la responsabilité sociétale des entreprises (RSE) en tant que levier de transformation. Pour chacun de ces axes, nous avons imaginé et construit plusieurs indicateurs clés, permettant d'observer et de mesurer les dynamiques de transition sociale à l'échelle de Bordeaux Métropole.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Exemples d'indicateurs produits</h3>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Comparatif des inégalités salariales femmes-hommes sur les salaires nets horaires moyens</li>
                <li>Comparatif des inégalités salariales selon le secteur d'activité</li>
                <li>Évolution du pourcentage d'établissements ESS au sein de Bordeaux Métropole</li>
                <li>Évolution du pourcentage d'emplois ESS au sein de Bordeaux Métropole</li>
                <li>Analyse sectorielle de la pérennité des établissements ESS et non-ESS entre 2018 et 2023</li>
                <li>Note globale de la RSE</li>
            </ul>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Restitution & résultats</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                En plus de la création d'un observatoire et d'un site web regroupant l'ensemble des indicateurs, chaque équipe devait présenter et pitcher son travail devant un jury et le public. Notre équipe a remporté le défi des transitions sociales et a également reçu le prix « Coup de cœur » du public.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Retour d'expérience</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Ce datathon a été une expérience intense et très enrichissante, tant sur le plan technique qu'humain. Il m'a permis de travailler dans un contexte de forte contrainte temporelle, au sein d'une équipe interdisciplinaire, et de transformer rapidement des données complexes en indicateurs concrets et exploitables.
            </p>
            <img 
                src="images/victoire.jpg" 
                style="
                    width: 60%;
                    display: block;
                    margin: 1rem auto;
                    border-radius: 12px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
                "
            >
        `,
    },
    2: {
        title: "Défi IA - Carrefour - Prédiction du réachat de produits",
        description: `
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Contexte & objectif</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Défi IA organisé en partenariat entre l'Université de Bordeaux et l'Analytics Factory de Carrefour France. L'objectif était de développer un système de recommandation capable de prédire, pour chaque client, les 10 produits les plus susceptibles d'être achetés lors de sa première transaction en 2024, à partir de son historique d'achats (2022–2023) et des informations produits. Ces recommandations alimentent le carrousel d'achats fréquents du site Carrefour, un levier clé pour améliorer l'expérience client et le taux de réachat.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Données & métrique</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 0.5rem;">Trois jeux de données étaient mis à disposition :</p>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem; padding-left: 1.5rem;">
                <li>Historique des transactions de 100 000 clients (2022–2023)</li>
                <li>Transactions de 80 000 clients (2024)</li>
                <li>Informations détaillées sur les produits</li>
            </ul>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Métrique d'évaluation : Hit Rate @10, mesurant la proportion de recommandations correctes parmi les 10 produits proposés.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Approche</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Analyse exploratoire des comportements d'achat et des déséquilibres, nettoyage des données et séparation en ensembles d'entraînement, de validation et de test. Feature engineering avancé (récence, affinité client-produit, popularité produit, temporalité, contexte magasin). Le problème a été formulé en classification supervisée.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Modélisation</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Gestion du déséquilibre via pondération de la classe minoritaire. Modèle retenu : LightGBM (LGBMClassifier) avec optimisation des hyperparamètres pour maximiser le Hit Rate @10 et l'AUC.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Résultats </h3>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>AUC : 0.847</li>
                <li>Hit Rate @10 : 0.3948 (validation interne) / 0.3803 (données masquées)</li>
                <li>+5 % de performance par rapport au modèle baseline (0.33)</li>
                <li>Classement final (en équipe) : 7ᵉ / 41</li>
            </ul>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Bilan</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Ce défi a été extrêmement formateur, tant sur le plan technique que collaboratif. Il m'a permis de travailler sur un très grand volume de données réel, d'approfondir mes compétences en feature engineering, machine learning et recommandation, mais aussi de comprendre les enjeux business liés à la personnalisation client dans le e-commerce.
            </p>
        `,
    },
    3: {
        title: "Classification d'images satellitaires",
        description: `
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Vue d'ensemble</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Ce projet a été réalisé au cours de ma deuxième année de Master. L'objectif était de concevoir et de comparer plusieurs modèles de classification d'images à partir d'images satellite afin de détecter automatiquement la présence d'éoliennes. Les données sont composées d'images couleur de taille 128 × 128 pixels, réparties en trois ensembles distincts : un jeu d'entraînement, un jeu de validation et un jeu de test. Les images contenant une ou plusieurs éoliennes sont étiquetées <em>target</em>, tandis que les autres sont étiquetées <em>other</em>.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Prétraitement & augmentation</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Avant l’entraînement des modèles, différentes étapes de prétraitement ont été appliquées afin d’améliorer la qualité des données et la capacité de généralisation des réseaux. Ces traitements incluent notamment le redimensionnement des images, leur normalisation ainsi que des techniques d’augmentation de données telles que les rotations aléatoires et des ajustements de la luminosité et du contraste.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Architectures testées & résultats</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Plusieurs architectures de deep learning ont été implémentées et comparées à l’aide de la bibliothèque PyTorch, notamment un réseau de neurones convolutionnel (CNN) ainsi que des modèles pré-entraînés comme ResNet. Pour chaque architecture, différentes combinaisons d’hyperparamètres ont été testées, par exemple la taille des batchs, afin d’optimiser les performances des modèles.
            </p>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Les meilleurs résultats ont été obtenus avec un réseau de neurones convolutionnel et un modèle ResNet pré-entraîné. Le CNN est composé de trois couches convolutionnelles et de trois couches entièrement connectées, utilisant la fonction d’activation LeakyReLU ainsi que la Batch Normalization afin d’améliorer la convergence. Entraîné sur dix époques, ce modèle atteint une précision de 96 %. Le modèle ResNet, basé sur une approche de transfer learning, obtient quant à lui une précision de 97 %. Le fine-tuning a consisté à geler l’ensemble des couches du réseau à l’exception des dernières couches.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Apports du projet</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Ce projet de computer vision a été particulièrement enrichissant et m’a permis de renforcer mes compétences en deep learning. J’ai notamment pu utiliser PyTorch de manière approfondie, concevoir et entraîner des réseaux de neurones convolutionnels, appliquer des techniques de transfer learning et analyser de manière critique les performances des modèles obtenus.
            </p>
        `,
    },
    4: {
        title: "Analyse statistique d'une enquête linguistique (enquête Bourciez)",
        description: `
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Contexte & objectif</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Dans le cadre de ce projet, nous avons réalisé une étude statistique de l'enquête linguistique menée par Édouard Bourciez à la fin du XIXᵉ siècle. Cette enquête visait à recueillir, commune par commune, la traduction mot à mot de la parabole de L'enfant prodigue dans les idiomes locaux du sud-ouest de la France. Les données couvrent 10 départements de Nouvelle-Aquitaine, représentant la région historique de la Gascogne, et permettent d'étudier les variations linguistiques, étymologiques et phonologiques entre langues romanes (occitan, français, etc.) et basque. L'objectif principal était d'identifier des structures de cohérence linguistique, sans se limiter à l'analyse mot par mot, grâce à des méthodes statistiques.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Données</h3>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Informations géographiques (département, canton, commune, coordonnées)</li>
                <li>101 mots traduits par commune (variables qualitatives)</li>
                <li>3 061 communes (1 ligne = 1 commune)</li>
            </ul>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Ma contribution principale</h3>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Construction de matrices de distance linguistique à partir des traductions : distance de Jaccard, distance de Levenshtein</li>
                <li>Agrégation des distances sur l'ensemble du texte</li>
                <li>Classification Ascendante Hiérarchique : méthode de Ward, méthode complete</li>
                <li>Comparaison avec / sans prise en compte des accents</li>
                <li>Analyse de la relation entre distance linguistique et distance géographique</li>
            </ul>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Résultats clés</h3>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Clusters linguistiques spatialement cohérents, sans utiliser l'information géographique</li>
                <li>Séparations marquées correspondant à des zones historiques (ex. Garonne)</li>
                <li>Méthode de Ward plus stable que la méthode complete</li>
                <li>Forte corrélation entre distance linguistique et distance géographique (~0,8)</li>
                <li>Relation non linéaire modélisable par une fonction logarithmique (courbe de Séguy)</li>
            </ul>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Valorisation</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Développement d'une application Shiny interactive pour explorer les clusters, distances et cartes.
            </p>
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Application Shiny</h3>
            <img 
                src="images/app_shiny.png" 
                style="
                    width: 100%;
                    border-radius: 12px;
                    margin-top: 1rem;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
                "
            >
        `,
    },
    5: {
        title: "Dashboard interactif à partir de données ouvertes de la ville de Londres",
        description: `
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Contexte</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Ce projet consistait à exploiter les données ouvertes de la ville de Londres afin d'analyser et de visualiser les dynamiques urbaines dans les domaines du logement, des transports et de la santé. Nous avons créé un dashboard interactif permettant de visualiser les tendances passées, de comparer les quartiers et de produire des prédictions.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Pourquoi Londres ?</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                La ville de Londres propose une grande variété de données accessibles et bien documentées. Sa complexité et sa diversité en font un terrain idéal pour étudier des problématiques urbaines variées comme l'accessibilité au logement et la mobilité. Les données précises permettent de comparer les quartiers entre eux, de détecter des tendances locales, et d'appliquer des méthodes avancées comme le clustering et la prédiction.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Ma contribution principale - Analyse du logement</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Je me suis principalement concentrée sur l'analyse des données liées au logement. L'un des indicateurs clés étudiés est le ratio Prix/Revenus, qui permet d'évaluer l'accessibilité au logement dans les différents quartiers depuis 1997. Pour visualiser cette évolution, nous avons combiné des courbes temporelles et des cartes interactives permettant de localiser les quartiers les plus abordables et les plus chers. Les résultats montrent une hausse continue du ratio, signe que l'immobilier devient progressivement moins accessible, avec des quartiers centraux comme Westminster ou Kensington & Chelsea particulièrement touchés, tandis que des zones périphériques comme Barking et Dagenham restent relativement accessibles. Les fluctuations temporaires après la crise financière de 2008 traduisent des périodes où les prix ont stagné ou diminué.
            </p>

            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Fonctionnalités du dashboard</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Les visualisations interactives permettent d'explorer les données par quartier et par année grâce à des menus déroulants et des sliders. Cette approche offre une compréhension claire des dynamiques du marché immobilier et permet d'identifier des zones nécessitant des interventions politiques pour améliorer l'accès au logement.
            </p>
            <h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Dashboard interactif - Londres</h3>
            <div class="image-grid">

                <img src="images/app_london1.png">
                <img src="images/app_london2.png">
                <img src="images/app_london3.png">
                <img src="images/app_london4.png">

            </div>
        `,
    }
};

// Event listeners pour les cartes de projet
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const projectData = projectsData[projectId];

    if (projectData) {
        modalBody.innerHTML = `
            <h2 style="font-family: var(--font-display); font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--text-primary);">
                ${projectData.title}
            </h2>
            ${projectData.description}
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on click outside or on close button
document.querySelector('.modal-close').addEventListener('click', closeProjectModal);
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeParcoursModal();
    }
});

// ========================================
// PARCOURS MODAL (Formation & Expériences)
// ========================================

const parcoursData = {
    'exp-1': {
        type: 'Expérience',
        date: 'Avril – Août 2025',
        title: "Stage de fin d'études - Data Science",
        company: 'Topnir Systems',
        color: 'var(--accent-tertiary)',
        description: `
            <h3 style="color: var(--accent-tertiary); margin-bottom: 1rem;">Contexte et objectifs</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                Ce stage s'inscrit dans le cadre de ma formation en CMI ISI et s'est déroulé au sein de l'entreprise Topnir Systems. L'objectif principal était d'explorer et de comparer des méthodes d'apprentissage automatique pour analyser des échantillons de produits pétroliers à partir de leurs données spectrales.
            </p>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                Les analyses des propriétés physico-chimiques en laboratoire sont parfois longues et coûteuses. <strong>L'apprche topologique de Topnir</strong> est une solution qui permet de prédire rapidement l'ensemble des propriétés en rapprochant un produit de ses voisins les plus proches pour lesquels les propriétés sont connues.
            </p>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">
                Dans ce contexte, chaque échantillon de pétrole est représenté par un point dans un espace de grande dimension, à partir de sa lecture spectrale (195 longueurs d'onde). La solution de Topnir s'appuie sur la définition d'axes de projections par des ingénieurs chimistes. Ces axes permettent de mettre en évidence des groupes de données dans l'espace projeté, puis à définir manuellement des groupes de pétroles. Les nouveaux pétroles vont être projetés puis assignés à une des classes de pétroles définie manuellement par les ingénieurs. Les propriétés des nouveaux pétroles vont ainsi être définies à partir des plus proches voisins de la même classe.
            </p>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem;">Le projet m'a permis d'étudier deux approches distinctes : une approche inspirée de la méthodologie interne de l'entreprise, combinant techniques statistiques et apprentissage automatique ; et une approche supervisée utilisant des modèles de régression, de machine learning et de deep learning pour prédire les propriétés des produits à partir des données spectrales.</p>

            <h3 style="color: var(--accent-tertiary); margin-bottom: 1rem;">Travaux réalisés</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 0.5rem;"><strong style="color:var(--text-primary)">1. Reproduction de l'approche interne avec des méthodes d'apprentissage automatique</strong></p>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem; padding-left: 1.5rem;">
                <li>Détection de valeurs aberrantes : IsolationForest, Local Outlier Factor, distance de Mahalanobis</li>
                <li>Sélection de variables : Analyse en composantes principales (ACP), importance via Random Forest</li>
                <li>Prétraitement et séparation temporelle des données</li>
                <li>Clustering non supervisé : K-Means, clustering hiérarchique, algorithmes sur graphes</li>
                <li>Méthodes de projection et approximation des axes</li>
                <li>Évaluation et analyse des résultats</li>
            </ul>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 0.5rem;"><strong style="color:var(--text-primary)">2. Apprentissage automatique supervisé</strong></p>
            <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; padding-left: 1.5rem;">
                <li>Préparation des données</li>
                <li>Modèles par propriété : Régression linéaire, PLS (Partial Least Squares), Random Forest, LightGBM, XGBoost</li>
                <li>Analyse de l'importance des variables et explicabilité des modèles</li>
                <li>Analyse multi-propriétés avec réseaux de neurones</li>
                <li>Extension et généralisation à différents types de produits et propriétés</li>
            </ul>

            <h3 style="color: var(--accent-tertiary); margin-bottom: 1rem;">Résultats</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                La seconde approche a montré une meilleure capacité de prédiction sur les données spectrales. Ce travail a donné lieu à la co-rédaction d'un article interne présentant les résultats de l'étude.
            </p>

            <h3 style="color: var(--accent-tertiary); margin-bottom: 1rem;">Conclusion</h3>
            <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem;">
                Ce stage m'a permis de mettre en application et de renforcer mes compétences en prétraitement de données, apprentissage automatique, évaluation de modèles et visualisation des résultats, tout en acquérant une expérience pratique dans l'application de méthodes d'apprentissage automatique à des données industrielles complexes.
            </p>
        `,
    },
};

document.querySelectorAll('.timeline-item.clickable').forEach(item => {
    item.addEventListener('click', () => openParcoursModal(item.getAttribute('data-parcours')));
});

function openParcoursModal(id) {
    const modal = document.getElementById('parcoursModal');
    const modalBody = document.getElementById('parcoursModalBody');
    const data = parcoursData[id];
    if (data) {
        modalBody.innerHTML = `
            <div style="margin-bottom: 1.5rem;">
                <div style="font-family: var(--font-mono); font-size: 0.8rem; color: ${data.color}; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.4rem;">
                    ${data.type} · ${data.date}
                </div>
                <h2 style="font-family: var(--font-display); font-size: 1.7rem; margin-bottom: 0.3rem; color: var(--text-primary); line-height: 1.3;">
                    ${data.title}
                </h2>
                <h3 style="font-size: 1rem; color: var(--text-muted); margin-bottom: 1.5rem; font-weight: 400;">
                    ${data.company}
                </h3>
            </div>
            ${data.description}
        `;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeParcoursModal() {
    document.getElementById('parcoursModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('parcoursModalClose').addEventListener('click', closeParcoursModal);
document.getElementById('parcoursModal').addEventListener('click', (e) => {
    if (e.target.id === 'parcoursModal') closeParcoursModal();
});

// ========================================
// EVENT LISTENERS
// ========================================

window.addEventListener('scroll', () => {
    updateProgressBar();
    handleNavbar();
});

// ========================================
// INITIALIZE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initial calls
    updateProgressBar();
    handleNavbar();

    console.log('%c✨ Portfolio de Dounia Mouchrif ✨', 'color: #00f5ff; font-size: 20px; font-weight: bold;');
    console.log('%cConçu avec passion et technologies modernes', 'color: #a855f7; font-size: 14px;');
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    updateProgressBar();
    handleNavbar();
}, 10);

window.addEventListener('scroll', debouncedScroll);
