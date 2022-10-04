let fullName = document.getElementById("name");
let discord = document.getElementById("discord");
let github = document.getElementById("github");
let personalityType = document.getElementById("personalityType");
let favoritMat = document.getElementById("favoritmat");
let birthYear = document.getElementById("birthyear");
let zodiac = document.getElementById("zodiac");

fetch('./data.json')
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
}).catch((err) => console.log(err));



