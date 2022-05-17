/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const buttonEl = document.getElementById("btn");
const divEl = document.getElementById("output");
const msg = document.getElementById("message");

buttonEl.addEventListener("click", showUsers);

async function showUsers(e) {
  console.log(e);
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  //   console.log(data);
  msg.innerText = "Users:";
  data.forEach((el) => {
    const userEl = document.createElement("p");
    userEl.textContent = `login: ${el.login}, avatar_url: ${el.avatar_url}`;
    divEl.appendChild(userEl);
  });
}
