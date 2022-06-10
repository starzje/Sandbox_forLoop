function dajOpisZaOdabir() {
  let odabir = document.getElementById("cars").value;

  switch (odabir) {
    case "volvo":
      document.getElementById(
        "rezultatOdabira"
      ).innerHTML = `Volvo je stvarno najbolji auto`;
      break;
    case "saab":
      document.getElementById("rezultatOdabira").innerHTML = `Svedjani su ludi`;
      break;
    case "mercedes":
      document.getElementById("rezultatOdabira").innerHTML = `opa mecka?`;
      break;
    case "audi":
      document.getElementById(
        "rezultatOdabira"
      ).innerHTML = `znas sto valja :)`;
      break;
    default:
      document.getElementById(
        "rezultatOdabira"
      ).innerHTML = `Ma daj odaberite pravo auto`;
      break;
  }
}

function odbrojavaj() {
  let brojac = 10;
  while (brojac > 0) {
    document.getElementById("timer").innerHTML += `${brojac}, `;
    brojac--;
  }
  document.getElementById("timer").innerHTML += "Booom!!!";
}

const uspjesiUcenika = [
  { ocjena: 5, ime: "Ivan" },
  { ocjena: 2, ime: "Ivona" },
  { ocjena: 3, ime: "Marko" },
  { ocjena: 1, ime: "Stjepan" },
  { ocjena: 1, ime: "Antun" },
  { ocjena: 5, ime: "Franjo" },
];

function filtrirajUcenike() {
  let uceniciSOdabranomOcjenom = [];
  let trazenaOcjena = parseInt(document.getElementById("trazenaOcjena").value);

  document.getElementById("filtriraniUcenici").innerHTML = "";

  for (let brojac = 0; brojac < uspjesiUcenika.length; brojac++) {
    if (trazenaOcjena === uspjesiUcenika[brojac].ocjena) {
      uceniciSOdabranomOcjenom.push(uspjesiUcenika[brojac]);
      document.getElementById(
        "filtriraniUcenici"
      ).innerHTML += `<li>${uspjesiUcenika[brojac].ocjena} - ${uspjesiUcenika[brojac].ime} </li>`;
    }
  }
}
