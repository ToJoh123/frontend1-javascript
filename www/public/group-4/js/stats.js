fetch('data/data.json')
  .then((res) => res.json())
  .then((data) => {
    let next = document.getElementById("next");
    let i = 0;
  
    next.addEventListener("click", () => {
      i++;
      if (i > data.length - 1) {
        i = 0;
      }
          document.getElementById("name").textContent = data[i].firstname + " " + data[i].lastname;
          document.getElementById("discord").textContent = data[i].discord;
          document.getElementById("github").href = `https://github.com/${data[i].github}`;
          document.getElementById("github").textContent = data[i].github;
          document.getElementById("personalityType").textContent = data[i].personalityType;
          document.getElementById("favoritmat").textContent = data[i].mat;
          document.getElementById("birthYear").textContent = data[i].birthYear;
          document.getElementById("zodiac").textContent = data[i].zodiac.name + " " + data[i].zodiac.symbol;
  })
  let previous = document.getElementById("previous");
  previous.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = data.length - 1;
    }
        document.getElementById("name").textContent = data[i].firstname + " " + data[i].lastname;
<<<<<<< HEAD
        document.getElementById("github").href = `https://github.com/${data[i].github}`;
        document.getElementById("github").textContent = data[i].github;
=======
        document.getElementById("discord").textContent = data[i].discord;
        document.getElementById("github").href = `https://github.com/${data[i].github}`;
          document.getElementById("github").textContent = data[i].github;
>>>>>>> main
        document.getElementById("personalityType").textContent = data[i].personalityType;
        document.getElementById("favoritmat").textContent = data[i].mat;
        document.getElementById("birthYear").textContent = data[i].birthYear;
        document.getElementById("zodiac").textContent = data[i].zodiac.name + " " + data[i].zodiac.symbol;
      })
  
}).catch((err) => console.log(err));

/**
 * if personalityType is =grön then show green, if personalityType is =blå then show blue, if personalityType is =röd then show red else show black
 */
let color = document.getElementById("personalityType");
if (color.textContent === "grön") {
  color.style.color = "green";
} else if (color.textContent === "blå") {
  color.style.color = "blue";
} else if (color.textContent === "röd") {
  color.style.color = "red";
} else {
  color.style.color = "black";
}

/**
 * if zodiac is =Väduren then show red, if zodiac is =Vågen then show blue, if zodiac is =Vattumannen then show black else show green
 */
let zodiac = document.getElementById("zodiac");
if (zodiac.textContent === "Capricorn ♑ ") { 
  zodiac.style.color = "red";
} else if (zodiac.textContent === "Vågen") {
  zodiac.style.color = "blue";
} else if (zodiac.textContent === "Vattumannen") {
  zodiac.style.color = "black";
} else {
  zodiac.style.color = "green";
}

// Language: javascript
// Path: www\public\group-4\js\stats.js
// Compare this snippet from www\public\group-4\js\form.js:
// /**
//  * formulär
//  */
//  const elForm = document.querySelector('#formReg');
//  const elName = document.querySelector('#txtName');
//  const elOutput = document.querySelector('#output');
//  
//  function showName(event){
//      // Använd value