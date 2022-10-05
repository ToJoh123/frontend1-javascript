fetch('data/data.json')
  .then((res) => res.json())
  .then((data) => {
    let next = document.getElementById("next");
    let i = 0;

    for (const element of data) {
      let option = document.createElement("option");
      let dataList = document.getElementById("userFirstName")
      option.value = element.firstname;
      dataList.appendChild(option);
    }  
  
    next.addEventListener("click", () => {
      i++;
      if (i > data.length - 1) {
        i = 0;
      }
          fullName.textContent = data[i].firstname + " " + data[i].lastname;
          discord.textContent = data[i].discord;
          github.href = `https://github.com/${data[i].github}`;
          github.textContent = data[i].github;
          personalityType.textContent = data[i].personalityType;
          favoritMat.textContent = data[i].mat;
          birthYear.textContent = data[i].birthYear;
          zodiac.textContent = data[i].zodiac.name + " " + data[i].zodiac.symbol;
  })

  let previous = document.getElementById("previous");
  previous.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = data.length - 1;
    }
<<<<<<< Updated upstream
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
  
=======
          fullName.textContent = data[i].firstname + " " + data[i].lastname;
          discord.textContent = data[i].discord;
          github.href = `https://github.com/${data[i].github}`;
          github.textContent = data[i].github;
          personalityType.textContent = data[i].personalityType;
          favoritMat.textContent = data[i].mat;
          birthYear.textContent = data[i].birthYear;
          zodiac.textContent = data[i].zodiac.name + " " + data[i].zodiac.symbol;
        })

  let search = document.getElementById("search");
  search.addEventListener("click", () => {
    let searchInput = document.getElementById("searchInput").value;
    for (const element of data) {
      if (searchInput.toLowerCase() === element.firstname.toLowerCase()) {
        fullName.textContent = element.firstname + " " + element.lastname;
        discord.textContent = element.discord;
        github.href = `https://github.com/${element.github}`;
        github.textContent = element.github;
        personalityType.textContent = element.personalityType;
        favoritMat.textContent = element.mat;
        birthYear.textContent = element.birthYear;
        zodiac.textContent = element.zodiac.name + " " + element.zodiac.symbol;
      }
    }
  })
>>>>>>> Stashed changes
}).catch((err) => console.log(err));

<<<<<<< HEAD:www/public/group-4/js/stats.js
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
=======


>>>>>>> 63089eb7b459e0b0a4bda738e2fbc3c5a5cac109:www/public/group-4/script.js
