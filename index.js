document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Zabraňuje odeslání formuláře

    // Získání hodnot z formuláře
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Uložení do localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    // Heslo neukládej do localStorage, je to nezabezpečené.

    // Zobraz úspěšnou zprávu a skryj formulář
    document.getElementById("success-message").style.display = "block"; // Zobrazí úspěšnou zprávu
    document.getElementById("registration-form").style.display = "none"; // Skryje formulář
});
