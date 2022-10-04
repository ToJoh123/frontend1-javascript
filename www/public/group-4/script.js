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
    let next = document.getElementById("next"); // created variable for button "show next user" that exist within the HTML file
    let i = 0; // We start from index 0 in data.json

    for (const element of data) {
      let option = document.createElement("option");
      let dataList = document.getElementById("userFirstName")
      option.value = element.firstname;
      dataList.appendChild(option);
    }  
  
    next.addEventListener("click", () => { // eventlistener listening for a click on the object "next"
      i++; // increments by 1 after iterating over an index
      if (i > data.length - 1) { // if index is greater than the length of the data in data.json =>
        i = 0; // sets index to 0
      }
          fullName.textContent = data[i].firstname + " " + data[i].lastname; // sets fullname to the value in json and puts it on the dom using name id
          discord.textContent = data[i].discord; // using discord id to put the data from json on to the dom using .textContent
          github.href = `https://github.com/${data[i].github}`; // linked to each users github by using .href. Taking whatever each user inputs and displaying it on the dom
          github.textContent = data[i].github;
          personalityType.textContent = data[i].personalityType;
          favoritMat.textContent = data[i].mat;
          birthYear.textContent = data[i].birthYear;
          zodiac.textContent = data[i].zodiac.name + " " + data[i].zodiac.symbol;
  })

  let previous = document.getElementById("previous"); 
  // created variable for button "Show previous user" in HTML file that lets you check prev user.
  previous.addEventListener("click", () => { // eventlistener listening to a click on previous object button
    i--; // decrements, a.k.a goes backward
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



