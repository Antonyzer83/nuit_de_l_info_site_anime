class Rules {

    constructor() {
        // Different rules
        this.rules = [
            "Sujet national",
            "5 défis au choix",
            "Travail d'équipe"
        ];
        // Count for the rule creation
        this.count = 0;
        // Select the main
        this.main = document.getElementsByTagName("main")[0];
        // The process for the setInterval
        this.process = null;

        this.showTitle();
    }

    /**
     * Show the title of the rules
     */
    showTitle() {
        let ruleTitle = document.createElement("h2");
        ruleTitle.innerHTML = "Quelles sont les règles ?";
        ruleTitle.classList.add("slideTitle");
        this.main.appendChild(ruleTitle);
        this.process = setInterval(this.showOneRule, 2000);
    }

    /**
     * Show only one rule thanks to the count
     */
    showOneRule() {
        console.log(rules.count);
        if (rules.count < 3) {
            let oneRule = document.createElement("span");
            oneRule.innerHTML = rules.rules[rules.count];
            oneRule.classList.add("rule");
            rules.main.appendChild(oneRule);
            rules.count++;
        } else {
            clearInterval(rules.process);
            setTimeout(rules.removeRules, 2500);
        }
    }

    /**
     * Remove the section rules
     */
    removeRules() {
        let rules = document.getElementsByClassName("rule");
        for (let i = 2; i >= 0; i--) {
            rules[i].remove();
        }
        document.getElementsByClassName("slideTitle")[0].remove();
    }
}