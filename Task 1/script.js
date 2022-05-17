/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector("form");
const log = document.getElementById("search");

form.addEventListener("submit", convert);

function convert(e) {
  e.preventDefault();
  let out = document.getElementById("output");
  let kg = e.target[0].value;
  console.log(e);
  if (isNaN(kg)) {
    out.innerText = "Įveskite skaičių";
  } else {
    out.innerText = `svarai: ${kg * 2.2046}, gramai: ${kg / 0.001}, uncijos: ${
      kg * 35.274
    }`;
  }
}
