/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const divEl = document.getElementById("output");
const msg = document.getElementById("message");

async function processCars() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  data.forEach((carManu) => {
    const brandEl = document.createElement("p");
    const br = document.createElement("br");
    const modelsEl = document.createElement("p");
    brandEl.textContent = `Manufacturer: ${carManu.brand}`;
    modelsEl.textContent = `Models: ${carManu.models.join(", ")}`;
    divEl.appendChild(brandEl);

    divEl.appendChild(modelsEl);
    divEl.appendChild(br);
  });
}

processCars();
