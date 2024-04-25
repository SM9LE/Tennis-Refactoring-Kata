var TennisGame3 = function(p1N, p2N) {
    this.p2 = 0;  // Envisager de renommer en "player2Points" pour la clarté
    this.p1 = 0;  // Envisager de renommer en "player1Points" pour la clarté

    this.p1N = p1N;  // Renommer en "player1Name"
    this.p2N = p2N;  // Renommer en "player2Name"
};

TennisGame3.prototype.getScore = function() {
    var s;  // Utiliser "let" pour la déclaration de variables locales
    if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
        var p = ["Love", "Fifteen", "Thirty", "Forty"];  // Bien organisé pour le mapping des scores
        s = p[this.p1];
        return (this.p1 == this.p2) ? s + "-All" : s + "-" + p[this.p2];
    } else {
        if (this.p1 == this.p2)
            return "Deuce";
        s = this.p1 > this.p2 ? this.p1N : this.p2N;
        // Utiliser l'opérateur d'égalité stricte === pour les comparaisons
        return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? "Advantage " + s : "Win for " + s;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    // Valider que playerName est "player1" ou "player2"
    if (playerName == "player1")
        this.p1 += 1;  // Utiliser "let" ou "const" pour la déclaration locale plutôt que "var"
    else
        this.p2 += 1;  // Utiliser "let" ou "const" pour la déclaration locale plutôt que "var"
};

// Condition pour assurer que le module est exporté seulement dans un environnement Node.js
if (typeof window === "undefined") {
    module.exports = TennisGame3;
}