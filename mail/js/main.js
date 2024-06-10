const form = document.forms[0];
const btnSend = document.getElementById("submit");

let whitelist = ["francesco.dente@gmail.com", "d17@gmail.com", "abomba@gmail.com", "cicciopasticcio35@gmail.com"];

let validated = false;

while (!validated) {
    let email = prompt("inserisci la tua email: ");

    for (let i = 0; i < whitelist.length && validated == false; i++) {
        if (email == whitelist[i]) {
            validated = true;
            console.log("email accepted");
        } else {
            console.log("email not valid");
        }
    }
}