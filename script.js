// Variables globales pour les codes hexadécimaux
const colorCodes = ["#122236", "#1BA1DC", "#F8FAFC", "#ce173c", "#383838", "#bababa", "#078a77", "#999999","#fece00","#54504f"];

// Ajoute un gestionnaire d'événements à chaque bouton
for (let i = 1; i <= colorCodes.length; i++) {
    const btn = document.getElementById(`btn${i}`);
    btn.addEventListener('click', () => {
        // Copie le code hexadécimal dans le presse-papiers
        const code = colorCodes[i - 1];
        navigator.clipboard.writeText(code).then(function () {
            // Change le texte et la couleur du bouton pendant une seconde
            btn.textContent = "✓ Copied!";
            btn.style.backgroundColor = "#02bd23"; // Couleur de fond verte
            setTimeout(() => {
                // Revert to the original state after 1 second
                btn.textContent = code;
                btn.style.backgroundColor = code;
            }, 1000);
        }).catch(function (err) {
            console.error('Impossible de copier le texte : ', err);
        });
    });
}
