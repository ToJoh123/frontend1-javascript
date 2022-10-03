fetch('./data.json')
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
  .catch((err) => console.log(err));
});