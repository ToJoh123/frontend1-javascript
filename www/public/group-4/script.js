fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    let next = document.getElementById("next"); // created button "show next user"
    let i = 0; // We start from index 0 in data.json
  
    next.addEventListener("click", () => { // eventlistener listening for a click on the object "next"
      i++; // increments by 1 after iterating over an index
      if (i > data.length - 1) { // if index is greater than the length of the data in data.json =>
        i = 0; // sets index to 0
      }
          document.getElementById("name").textContent = data[i].firstname + " " + data[i].lastname; // sets fullname to the value in json and puts it on the dom using name id
          document.getElementById("discord").textContent = data[i].discord; // using discord id to put the data from json on to the dom using .textContent
          document.getElementById("github").href = `https://github.com/${data[i].github}`; // linked to each users github by using .href. Taking whatever each user inputs and displaying it on the dom
          document.getElementById("github").textContent = data[i].github;
          document.getElementById("personalityType").textContent = data[i].personalityType;
          document.getElementById("favoritmat").textContent = data[i].mat;
          document.getElementById("birthYear").textContent = data[i].birthYear;
          document.getElementById("zodiac").textContent = data[i].zodiac.name + " " + data[i].zodiac.symbol;
  })
  let previous = document.getElementById("previous"); // created button "Show previous user" that lets you check prev user.
  previous.addEventListener("click", () => { // eventlistener listening to a click on previous object
    i--; // decrements, a.k.a goes backward
    if (i < 0) {
      i = data.length - 1;
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
  
}).catch((err) => console.log(err));
