const collection = [
    {
        picture: "images/dondada.jpg",
        title: "philly flingo",
        author: ["Alpha Wann"],
        beatmaker: ["3010"],
        album: "don dada mixtape vol 1",
        releaseYear: "2020",
    },
    {
        picture: "images/pnl-cover-dans-la-legende.jpg",
        title: "Humain",
        author: ["PNL"],
        beatmaker: ["Iksma Riddim"],
        album: "Dans la légende",
        releaseYear: "2016",
    },
    {
        picture: "images/raw-z.jpeg",
        title: "I Don't: Need u / Know",
        author: ["Laylow"],
        beatmaker: ["thescam", "Laylow"],
        album: ".RAW-Z",
        releaseYear: "2018",
    },
    {
        picture: "images/trinity.jpeg",
        title: "VAMONOS",
        author: ["Laylow", "Alpha Wann"],
        beatmaker: ["Dioscures"],
        album: "TRINITY",
        releaseYear: "2020",
    },
    {
        picture: "images/669p2.jpeg",
        title: "669, Pt.2",
        author: ["669"],
        beatmaker: ["669"],
        album: "single",
        releaseYear: "2021",
    },
    {
        picture: "images/Kekra_2018_Land_cover.jpg",
        title: "Wing Chun",
        author: ["Kekra"],
        beatmaker: ["Kirill Magai"],
        album: "Land",
        releaseYear: "2018",
    },
    {
        picture: "images/gouapswitch3.jpg",
        title: "Switch 3",
        author: ["Gouap"],
        beatmaker: ["Gouap"],
        album: 'Trilogie "Switch"',
        releaseYear: "2021",
    },
    {
        picture: "images/XEU.jpg",
        title: "Chépakichui",
        author: ["VALD"],
        beatmaker: ["Seezy"],
        album: "XEU",
        releaseYear: "2018",
    },
    {
        picture: "images/vrealite.jpg",
        title: "OSMS",
        author: ["Kekra"],
        beatmaker: ["Boumidjal WWD"],
        album: "Vréalité",
        releaseYear: "2019",
    },
    {
        picture: "images/S_O_le_Flem.jpg",
        title: "Fléau",
        author: ["Django"],
        beatmaker: ["Flem KGB"],
        album: "S/O le Flem",
        releaseYear: "2020",
    },
    {
        picture: "images/UNE_MAIN_LAVE_L_AUTRE.jpg",
        title: "CONTREX",
        author: ["Alpha Wann"],
        beatmaker: ["Jay Jay", "LamaOnTheBeat"],
        album: "UNE MAIN LAVE L'AUTRE",
        releaseYear: "2018",
    },
    {
        picture: "images/Projet_Blue_Beam.jpg",
        title: "Baton Rouge",
        author: ["Freeze corleone"],
        beatmaker: ["Issa Diakhate"],
        album: "Projet Blue Beam",
        releaseYear: "2018",
    }
]
// Creation du [Element html <main>] + Creation et Ajout de #id 
let newMain = document.createElement("main")
newMain.setAttribute("id", "gallerie-flex")

// Loop de Creation des cartes
let collectionIndex = 0
for (let elem of collection) {

    // Creation des Element js pour html + Creation et Ajout de .class
    let newSection = document.createElement("section");
    newSection.setAttribute("class", "carte");

    let newDivImage = document.createElement("div");
    newDivImage.setAttribute("class", "image");
    let newDivFlex = document.createElement("div");
    newDivFlex.setAttribute("class", "flex");
    let newDivInfos = document.createElement("div");
    newDivInfos.setAttribute("class", "infos");

    let newDiv = document.createElement("div");

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

    let newImage = document.createElement("img");
    newImage.setAttribute("src", collection[collectionIndex].picture);
    newImage.setAttribute("alt", "image_pochette");
    
    // Creation TextNodes pour textes des cartes
    let authorText = document.createTextNode(collection[collectionIndex].author[0]);
    let beatText = document.createTextNode(collection[collectionIndex].beatmaker[0]);
    let titleText = document.createTextNode(collection[collectionIndex].title);
    let albumText = document.createTextNode(collection[collectionIndex].album);
    let yearText = document.createTextNode(collection[collectionIndex].releaseYear);

    // Deplacement des 5 [textNode] des cartes dans [Element h2 h3 h4] correspondant
    newH3Author.appendChild(authorText);
    newH3Beat.appendChild(beatText);
    newH2Title.appendChild(titleText);
    newH4Album.appendChild(albumText);
    newH4Year.appendChild(yearText);

    // Deplacement des 5 [Element h2 h3 h4] dans [Element div] correspondant
    newDivFlex.appendChild(newH3Author);
    newDivFlex.appendChild(newH3Beat);

    newDiv.appendChild(newH2Title);
    newDiv.appendChild(newH4Album);
    newDiv.appendChild(newH4Year);

    // Deplacement des [Element div] dans [Element div]
    newDivImage.appendChild(newImage);
    newDivInfos.appendChild(newDivFlex);
    newDivInfos.appendChild(newDiv);

    // Deplacement des [Element div] dans [Element section]
    newSection.appendChild(newDivImage);
    newSection.appendChild(newDivInfos);

    // Deplacement de [Element section] dans [Element main]
    newMain.appendChild(newSection);

    // Deplacement de [Element main] dans [<body> html]
    document.querySelector("body").insertBefore(newMain, document.querySelector("footer"))

    collectionIndex++
}
