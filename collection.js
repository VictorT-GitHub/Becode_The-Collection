const collection = [
    {
        title: "philly flingo",
        author: ["Alpha Wann"],
        beatmaker: ["3010"],
        album: "don dada mixtape vol 1",
        releaseYear: "2020",
        picture: ""
    },
    {
        title: "CONTREX",
        author: ["Alpha Wann"],
        beatmaker: ["Jay Jay", "LamaOnTheBeat"],
        album: "UNE MAIN LAVE L'AUTRE",
        releaseYear: "2018",
        picture: ""
    },
    {
        title: "I Don't : Need u / Know",
        author: ["Laylow"],
        beatmaker: ["thescam", "Laylow"],
        album: ".RAW-Z",
        releaseYear: "2018",
        picture: ""
    },
    {
        title: "VAMONOS",
        author: ["Laylow", "Alpha Wann"],
        beatmaker: ["Dioscures"],
        album: "TRINITY",
        releaseYear: "2020",
        picture: ""
    },
    {
        title: "La violence",
        author: ["La F", "Freeze corleone"],
        beatmaker: ["La F"],
        album: "The No Face 2",
        releaseYear: "2020",
        picture: ""
    },
    {
        title: "J'fais mes affaires",
        author: "DjaDja & Dinaz",
        beatmaker: "DjaDja & Dinaz",
        album: "On s'promet",
        releaseYear: "2016",
        picture: ""
    },
    {
        title: "Bande organisée",
        author: "13 Organisé",
        beatmaker: "13 Organisé",
        album: "13 Organisé",
        releaseYear: "2020",
        picture: ""
    },
    {
        title: "Salvatrucha",
        author: "Jul",
        beatmaker: "Jul",
        album: "Rien 100 Rien",
        releaseYear: "2019",
        picture: ""
    },
    {
        title: "OSMS",
        author: "Kekra",
        beatmaker: "Boumidjal WWD",
        album: "Vréalité",
        releaseYear: "2019",
        picture: ""
    },
    {
        title: "Moncler",
        author: ["Freeze corleone", "La F"],
        beatmaker: ["C2s", "Flem", "Marlex"],
        album: "LMF",
        releaseYear: "2020",
        picture: "" 
    }
]


for (let elem of collection) {
    let leMain = document.querySelector("main");

    let newSection = document.createElement("section");

    let newDivImage = document.createElement("div");
    newDivImage.setAttribute("class", "image");
    let newDivFlex = document.createElement("div");
    newDivFlex.setAttribute("class", "flex");
    let newDivCarte = document.createElement("div");
    newDivCarte.setAttribute("class", "carte");

    let newH3Author = document.createElement("h3");
    newH3Author.setAttribute("class", "Author");
    let newH3Beat = document.createElement("h3");
    newH3Beat.setAttribute("class", "Beat");
    let newH2Title = document.createElement("h2");
    newH2Title.setAttribute("class", "Title");
    let newH4Album = document.createElement("h4");
    newH4Album.setAttribute("class", "Album");
    let newH4Year = document.createElement("h4");
    newH4Year.setAttribute("class", "Year");
    
    

    newDivFlex.appendChild(newH3Author);
    newDivFlex.appendChild(newH3Beat);

    newDivCarte.appendChild(newH2Title);
    newDivCarte.appendChild(newH4Album);
    newDivCarte.appendChild(newH4Year);

    newSection.appendChild(newDivImage);
    newSection.appendChild(newDivFlex);
    newSection.appendChild(newDivCarte);

    leMain.appendChild(newSection);
}
