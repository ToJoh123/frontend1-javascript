// declaring variables and attaching them to the DOM elements in the HTML for easier code readability
let fullName = document.getElementById("name");
let discord = document.getElementById("discord"); 
let github = document.getElementById("github"); 
let personalityType = document.getElementById("personalityType"); 
let favoritMat = document.getElementById("favoritmat"); 
let inriktning = document.getElementById("programmeringsInriktning"); // added inriktning
let drinkpreference = document.getElementById("drinkPreference")
let birthYear = document.getElementById("birthyear"); 
let zodiac = document.getElementById("zodiac");

fetch('./data.json') // using fetch to get data from our json file
  .then((res) => res.json()) // res = response. Sends a JSON response of the data in data.json
  .then((data) => { // we get the data unpacked with the .json.
    // we create a "for of" loop that loops through the data in data.json and this will take all the firstnames in the json file and put them as options in the datalist in the HTML file
    for (const element of data) {
      let option = document.createElement("option");
      let dataList = document.getElementById("userFirstName")
      option.value = element.firstname;
      dataList.appendChild(option);
    }  
  

    let next = document.getElementById("next"); // created variable for button "show next user" that exist within the HTML file
    let i = 0; // We declare a variable i and set it to 0 so as to start from index 0 in data.json
    next.addEventListener("click", () => { // eventlistener listening for a click on the object "next"
      i++; // increments by 1 after iterating over an index
      if (i > data.length - 1) { // if we reach the end of the array, we reset the index to 0
        i = 0;
      }
          fullName.textContent = `${data[i].firstname} ${data[i].lastname}`; // we set the textContent of the variable fullName to the firstname and lastname of the index we are currently at.
          discord.textContent = data[i].discord; // we set the textContent of the variable discord to the discord of the index we are currently at.
          github.href = `https://github.com/${data[i].github}`; // linked to each users github by using .href. Taking whatever each user inputs and displaying it on the dom as a link
          github.textContent = data[i].github;
          personalityType.textContent = data[i].personalityType;
          favoritMat.textContent = data[i].mat;
          inriktning.textContent = data[i].inriktning; // added inriktning
          drinkpreference.textContent = data[i].drinkprefer; // nocco obv
          birthYear.textContent = data[i].birthYear;
          zodiac.textContent = `${data[i].zodiac.name} ${data[i].zodiac.symbol}`;
  })


  let previous = document.getElementById("previous"); // created variable for button "Show previous user" in HTML file that lets you check prev user.
  previous.addEventListener("click", () => { // eventlistener listening to a click on previous object button
    i--; // decrements, a.k.a goes backward
    if (i < 0) { // if we are at the first index and we click previous then we go to the last index in data.json
      i = data.length - 1;
    }
          fullName.textContent = `${data[i].firstname} ${data[i].lastname}`;
          discord.textContent = data[i].discord;
          github.href = `https://github.com/${data[i].github}`;
          github.textContent = data[i].github;
          personalityType.textContent = data[i].personalityType;
          favoritMat.textContent = data[i].mat;
          inriktning.textContent = data[i].inriktning; // added inriktning
          drinkpreference.textContent = data[i].drinkprefer;
          birthYear.textContent = data[i].birthYear;
          zodiac.textContent = `${data[i].zodiac.name} ${data[i].zodiac.symbol}`;
        })

        
    let search = document.getElementById("search"); // declaring variable for search button. 
    search.addEventListener("click", () => { // Here we add an eventlistener listening for a click. 
    let searchInput = document.getElementById("searchInput").value; // declaring a variable called searchInput and set it equal to the value of the input in the field.
    /*Created a for of loop that iterates through the data in data.json this is connected to the search bar in the HTML file. And if the value of the search is equal to the firstname in data.json it will display all the data from that index. */
    for (const element of data) { 
      if (searchInput.toLowerCase() === element.firstname.toLowerCase()) {
        fullName.textContent = `${element.firstname} ${element.lastname}`;
        discord.textContent = element.discord;
        github.href = `https://github.com/${element.github}`;
        github.textContent = element.github;
        personalityType.textContent = element.personalityType;
        favoritMat.textContent = element.mat;
        inriktning.textContent = element.inriktning;
        drinkpreference.textContent = element.drinkprefer;
        birthYear.textContent = element.birthYear;
        zodiac.textContent = `${element.zodiac.name} ${element.zodiac.symbol}`;
      }
    }
  })
}).catch((err) => console.log(err));



