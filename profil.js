window.addEventListener("load", function() {
    // Načti data z localStorage
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const profilePicture = localStorage.getItem("profile_picture");

    // Zobraz údaje na stránce
    if (username) {
        document.getElementById("display-username").textContent = username;
    } else {
        document.getElementById("display-username").textContent = "Uživatelské jméno není dostupné.";
    }

    if (email) {
        document.getElementById("display-email").textContent = email;
    } else {
        document.getElementById("display-email").textContent = "E-mail není dostupný.";
    }

    // Zobraz profilový obrázek, pokud je dostupný
    if (profilePicture) {
        const displayPic = document.getElementById("profile-pic");
        displayPic.src = profilePicture;
        displayPic.style.display = "block"; // Zobrazí obrázek
    } else {
        console.log("Profilový obrázek není dostupný.");
    }
});

