// funktion för att slippa skriva document.getElementById...
let get = (name) => {
    return document.getElementById(name);
}

fetch('./data.json') // vi använder fetch för att hämta data från vår data.json fil
  .then((res) => res.json()) // res = response. vi får ett svar från fetch och omvandlar det till json format. 
  .then((data) => { // data = datan vi fick ifrån fetch och omvandlade till json format

    // vi skapar en "for of" loop som går igenom alla objekt i datan och extraherar ut förnamnen på varje objekt och lägger till som options i datalistan i vår HTML som vi sedan kommer kunna söka igenom.
    for (const element of data) {
      let option = document.createElement("option");
      let dataList = get("userFirstName")
      option.value = element.firstname;
      dataList.appendChild(option);
    }  
  
    let i = 0; // i = index. Detta kommer vi använda senare i våra funktioner för att leta bland användare.


    /* En variabel länkad till vår "Show next user" knapp i HTML. Vi kopplar denna till en event listener som håller koll på när användaren trycker på den. När detta sker kommer variabeln i öka med 1. Vilket resulterar i att vi får fram nästa objekt ifrån vår json-fil. */
    const next = get("next");
    next.addEventListener("click", () => { // väntar på klick
      i++; // ökar med 1 varje gång användaren klickar på knappen
      if (i > data.length - 1) { 
        i = 0; // om vi når slutet på vårt objekt så blir i = 0, vilket gör att vi hoppar tillbaka till första objektet i vår data.
      }
      displayData(data[i]); // displayData är en funktion som vi placerats längre ner. Den tar in ett objekt som parameter och visar datan i HTML. i är vår index-variabel som vi ökar med 1 varje gång användaren klickar på knappen.
    });
    
    // En previous-knapp som gör samma sak som next-knappen fast i motsatt riktning.
    const previous = get("previous"); 
    previous.addEventListener("click", () => {
      i--; // subtraherar värdet på i med 1 varje gång användaren klickar på knappen.
      if (i < 0) { 
        i = data.length - 1; 
      } // om vi når början av vår json-fil så blir i = data.length - 1, vilket gör att vi hoppar tillbaka till sista objektet i vår data.json.
      displayData(data[i]);
    });

    // Detta kommer låta dig söka efter användare i din data.json fil.
    get("search").addEventListener("click", () => {
      let searchValue = get("searchInput").value; 
      // tar värdet från sökfältet som skrivits in i hemsidan och sparar det i en variabel.
      let found = false;
      // en variabel som håller koll på om vi hittat en användare eller inte.
      for (const element of data) {
        if (element.firstname.toLowerCase() === searchValue.toLowerCase()) {
          displayData(element);
          found = true;
          break;
          /* En "for of" loop som går igenom vår data.json. 
          Om värdet från sökfältet matchar ett förnamn i vår data så sätter den i till det index den hittade förnamnet på. Och förvandlar found till true, så att vi slipper att else-satsen nedan körs.*/
        }
      }
      if (!found) {
        alert("No user found");
        // Vi tar hjälp av en if-sats som kollar om found är falsk eller inte. Om den är falsk så skickar den ett alert meddelande.
      }
    });
  
    // En funktion som kommer att ta datan på index i ifrån vår data.json fil och visa den i vårt HTML table.
    let displayData = data => {
      get("name").textContent = data.firstname + " " + data.lastname;
      get("discord").textContent = data.discord;
      get("github").href = "https://github.com/" + data.github;
      // lägger till en länk till github-profilen i vår HTML.
      get("github").textContent = data.github;
      get("personalityType").textContent = data.personalityType;
      get("favoritmat").textContent = data.mat;
      get("program").textContent = data.inriktning;
      get("drinkPreference").textContent = data.drinkprefer;
      get("birthyear").textContent = data.birthYear;
      get("zodiac").textContent = data.zodiac.name + " " + data.zodiac.symbol;
    }

}).catch((err) => console.log(err)); // om något går fel så skriver vi ut felet i konsolen.