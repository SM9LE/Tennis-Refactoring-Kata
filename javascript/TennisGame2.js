var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;  // Envisager de renommer en "player1Points" pour la clarté
    this.P2point = 0;  // Envisager de renommer en "player2Points" pour la clarté

    this.P1res = "";   // L'utilisation d'une variable temporaire pourrait être évitée
    this.P2res = "";   // L'utilisation d'une variable temporaire pourrait être évitée

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    var score = "";  // Utiliser "let" pour la déclaration de variables locales
    if (this.P1point === this.P2point && this.P1point < 3) {
        if (this.P1point === 0)
            score = "Love";
        if (this.P1point === 1)
            score = "Fifteen";
        if (this.P1point === 2)
            score = "Thirty";
        score += "-All";
    }
    if (this.P1point === this.P2point && this.P1point > 2)
        score = "Deuce";

    if (this.P1point > 0 && this.P2point === 0) {
        // Utiliser des structures de données pour éviter la répétition des blocs "if"
        if (this.P1point === 1)
            this.P1res = "Fifteen";
        if (this.P1point === 2)
            this.P1res = "Thirty";
        if (this.P1point === 3)
            this.P1res = "Forty";

        this.P2res = "Love";
        score = this.P1res + "-" + this.P2res;
    }

    // Répétition du code pour P2, envisager une fonction réutilisable
    if (this.P2point > 0 && this.P1point === 0) {
        if (this.P2point === 1)
            this.P2res = "Fifteen";
        if (this.P2point === 2)
            this.P2res = "Thirty";
        if (this.P2point === 3)
            this.P2res = "Forty";

        this.P1res = "Love";
        score = this.P1res + "-" + this.P2res;
    }

    // D'autres blocs de code similaires pourraient être simplifiés
    if (this.P1point > this.P2point && this.P1point < 4) {
        if (this.P1point === 2)
            this.P1res = "Thirty";
        if (this.P1point === 3)
            this.P1res = "Forty";
        if (this.P2point === 1)
            this.P2res = "Fifteen";
        if (this.P2point === 2)
            this.P2res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }

    // Considérer la refonte de la logique pour éviter la duplication
    if (this.P2point > this.P1point && this.P2point < 4) {
        if (this.P2point === 2)
            this.P2res = "Thirty";
        if (this.P2point === 3)
            this.P2res = "Forty";
        if (this.P1point === 1)
            this.P1res = "Fifteen";
        if (this.P1point === 2)
            this.P1res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
        score = "Advantage player1";
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
        score = "Advantage player2";
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        score = "Win for player1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;  // Utiliser "let" pour la déclaration de variables dans la boucle
    for (i = 0; i < number; i++) {
        this.P1Score();  // Incrémenter directement les points pourrait être plus clair
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;  // Utiliser "let" pour la déclaration de variables dans la boucle
    for (i = 0; i < number; i++) {
        this.P2Score();  // Incrémenter directement les points pourrait être plus clair
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;  // Considérer la possibilité d'utiliser cette méthode directement dans wonPoint
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;  // Considérer la possibilité d'utiliser cette méthode directement dans wonPoint
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

// Condition pour assurer que le module est exporté seulement dans un environnement Node.js
if (typeof window === "undefined") {
    module.exports = TennisGame2;
}