class Why {

    constructor() {
        // Different results
        this.results = [
            "Cernes sous les yeux",
            "Fatigue",
            "Dépression",
            "Tenues adéquates",
            "A manger"
        ];
        // Select the main tag
        this.main = document.getElementsByTagName("main")[0];
        // Show the section title
        this.showTitle();
    }

    /**
     * Show the title section
     */
    showTitle() {
        let whyTitle = document.createElement("h2");
        this.main.appendChild(whyTitle);
    }
}