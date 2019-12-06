class Base {

    constructor(number) {
        this.results = [
            [
                "welcome",
                "Du jeudi 5 décembre",
                "Au vendredi 6 décembre",
                "De 16h30",
                "A 8h03"
            ],
            [
                "stat",
                "4219 Participants",
                "583 Equipes",
                "55 sites en France",
                "110 Ecoles",
                "(Ynov Campus en particulier)",
                "50 Défis"
            ],
            [
                "bref",
                "Tous les ans",
                "Le premier jeudi du mois de décembre",
                "Compétition entre étudiants, profs et entreprises"
            ],
            [
                "planning",
                "16h30 : Début officiel de la nuit de l'informatique",
                "20h : Pizzas du BDE",
                "2h : Encas",
                "8h03 : Rendu des défis",
                "12h00 : Diffusion des résultats"
            ],
            [
                "rule",
                "Sujet national",
                "5 défis au choix",
                "Travail d'équipe"
            ],
            [
                "why",
                "Pour avoir des cernes sous les yeux !!",
                "La fatigue omniprésent",
                "Un soutien présent entre camarade  ",
                "Des tenues adéquates",
                "A manger"
            ],
            [
                "partner",
                "Des partenariat avec des grosses entreprise et des petites ! ",
                "(Il y en a beaucoup trop !)"
            ],
            [
                "waiting",
                "Le stress monte si tu vise le premier prix",
                "La peur de pas trouver le sommeil"
                "(Y en beaucoup trop !)"
            ],
            [
                "waiting",
                "Stress",
                "Peur",
                "Horreur"
            ]
        ];
        this.titles = [
            [
                "Bienvenue",
                "welcomeTitle"
            ],
            [
                "Quelques stats",
                "statsTitle"
            ],
            [
                "En bref",
                "brefTitle"
            ],
            [
                "Le Planning",
                "planningTitle"
            ],
            [
                "Quelles sont les règles ?",
                "rulesTitle"
            ],
            [
                "Pourquoi ?",
                "whyTitle"
            ],
            [
                "Les Partenaires",
                "partnersTitle"
            ],
            [
                "En attente des résultats",
                "waitingTitle"
            ]
        ];
        this.intervals = [
            2000,
            3000,
            3000,
            3000,
            3000,
            3000,
            3000,
            3000
        ];
        this.sectionId = number;
        this.process = null;
        this.count = 1;
        this.main = document.getElementsByTagName("main")[0];

        this.showTitle();
    }

    /**
     * Show the title of the section
     * Add the id section to the title
     */
    showTitle() {
        let title = document.createElement("h2");
        title.innerHTML = this.titles[this.sectionId][0];
        title.id = this.titles[this.sectionId][1];
        this.main.appendChild(title);
        this.process = setInterval(this.showOneResult, this.intervals[this.sectionId]);
    }

    /**
     * Show one result for a section
     */
    showOneResult() {
        if (base.count < base.results[base.sectionId].length) {
            let result = document.createElement("span");
            result.innerHTML = base.results[base.sectionId][base.count];
            result.classList.add(base.results[base.sectionId][0]);
            base.main.appendChild(result);
            base.count++;
        } else {
            clearInterval(base.process);
            setTimeout(base.removeResults, base.intervals[base.sectionId] / 2);
        }
    }

    /**
     * Remove all the results and the title of one section
     */
    removeResults() {
        let resultsSet = document.getElementsByClassName(base.results[base.sectionId][0]);
        for (let i = base.results[base.sectionId].length - 2; i >= 0; i--) {
            resultsSet[i].remove();
        }
        document.getElementById(base.titles[base.sectionId][1]).remove();
        base.changeSection();
    }

    /**
     * Change to a section
     */
    changeSection() {
        if (base.sectionId + 1 < base.results.length ) {
            base = new Base(base.sectionId + 1);
        }
    }
}