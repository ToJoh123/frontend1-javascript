let fullName = document.getElementById("name"); // declaring variable fullName and attaching it to the document object using getElementById method and then the id name
let discord = document.getElementById("discord"); // declaring variable for discord and attaching it to the document object using getElementById mmethod and then the id name
let github = document.getElementById("github"); // declaring variable for github and attaching it to the document object using getElementById method and then the id name
let personalityType = document.getElementById("personalityType"); // declaring variable for personalityType and attaching it to the document object using getElementById method and then the id name
let favoritMat = document.getElementById("favoritmat"); // declaring variable for favourite food and attaching it to the document object using getElementById method and then the id name
let birthYear = document.getElementById("birthyear"); // declaring variable for birthyear and attaching it to the document object using getElementById method and then the id name
let zodiac = document.getElementById("zodiac"); // declaring variable for zodiac and attaching it to the document object using getElementById method and then the id name

fetch('./data.json') // using fetch to get data from our json file
  .then((res) => res.json()) // res = response
  .then((data) => { // we get the data unpacked with the .json.
    let next = document.getElementById("next"); // created variable for button "show next user" that exist within the HTML file
    let i = 0; // We declare a variable i and set it to 0 so as to start from index 0 in data.json

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

  let search = document.getElementById("search"); // declaring variable for search button. 
  search.addEventListener("click", () => { // Here we add an eventlistener listening for a click. 
    let searchInput = document.getElementById("searchInput").value; // declaring a variable called searchInput and set it equal to the value of the input in the field.
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



