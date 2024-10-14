// script.js

// Funkce pro přidání mincí uživateli po úspěšné platbě
function pridatMince(pocetMincí) {
    // Kontrola, zda už mince v localStorage existují
    let aktualniMince = localStorage.getItem('mince');
    
    if (aktualniMince) {
        aktualniMince = parseInt(aktualniMince) + pocetMincí;
    } else {
        aktualniMince = pocetMincí;
    }

    // Uložíme nové množství mincí do localStorage
    localStorage.setItem('mince', aktualniMince);
    alert('Bylo přidáno ' + pocetMincí + ' mincí. Nyní máte celkem ' + aktualniMince + ' mincí.');
}

// Příklad volání funkce po úspěšné platbě (tento kód voláš po potvrzení platby v PayPal scriptu)
function potvrditPlatbu(pocetMincí) {
    pridatMince(pocetMincí);
}

// Testovací příklad (ten můžeš smazat nebo upravit):
// potvrditPlatbu(150); // Přidá uživateli 150 mincí
function odecistMinceZaZpravu() {
    let aktualniMince = localStorage.getItem('mince');
    if (aktualniMince && aktualniMince >= 30) {
        localStorage.setItem('mince', aktualniMince - 30);
        alert('Odeslána zpráva. Zbývající mince: ' + (aktualniMince - 30));
    } else {
        alert('Nemáte dostatek mincí pro odeslání zprávy.');
        // Můžeš přidat přesměrování na platební stránku, pokud mince dojdou.
        window.location.href = "platba.html";
    }
}
