var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;  // Considérer l'utilisation de "player1Score" pour plus de clarté
    this.m_score2 = 0;  // Considérer l'utilisation de "player2Score" pour plus de clarté
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    // Valider que playerName est soit "player1" soit "player2" pour éviter des erreurs
    if (playerName === "player1")
        this.m_score1 += 1; // Utiliser "let" ou "const" pour la déclaration locale plutôt que "var"
    else
        this.m_score2 += 1; // Utiliser "let" ou "const" pour la déclaration locale plutôt que "var"
};

TennisGame1.prototype.getScore = function() {
    var score = ""; // Utiliser "let" pour la déclaration de variables locales
    var tempScore = 0; // Utiliser "let" pour la déclaration de variables locales
    if (this.m_score1 === this.m_score2) {
        switch (this.m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce"; // Considérer la clarification de la règle "Deuce"
                break;
        }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2; // Utiliser "let"
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) { // Considérer l'élimination de la boucle pour plus de clarté
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

// Condition pour assurer que le module est exporté seulement dans un environnement Node.js
if (typeof window === "undefined") {
    module.exports = TennisGame1;
}