class Rules {

    constructor() {
        this.rules = [
            "Sujet national",
            "5 défis au choix",
            "Travail d'équipe"
        ];
        this.count = 0;
        this.main = document.getElementsByTagName("main")[0];
        this.process = null;

        this.showTitle();
    }

    showTitle() {
        let ruleTitle = document.createElement("h2");
        ruleTitle.innerHTML = "Quelles sont les règles ?";
        this.main.appendChild(ruleTitle);
        this.process = setInterval(this.showOneRule, 2000);
    }

    showOneRule() {
        console.log(rules.count);
        if (rules.count < 3) {
            let oneRule = document.createElement("span");
            oneRule.innerHTML = rules.rules[rules.count];
            rules.main.appendChild(oneRule);
            rules.count++;
        } else {
            clearInterval(rules.process);
        }
    }
}