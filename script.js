const leMain = document.querySelector("main");

// Loop de Creation des cartes
let collectionIndex = 0;
for (let elem of collection) {
  // Creation des Element js pour html + Creation et Ajout de .class
  let newSection = document.createElement("section");
  newSection.setAttribute("class", "carte");

  let newDivImage = document.createElement("div");
  newDivImage.setAttribute("class", "image");
  let newDivInfos = document.createElement("div");
  newDivInfos.setAttribute("class", "infos");
  let newDivFlex = document.createElement("div");
  newDivFlex.setAttribute("class", "flex");
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
  newImage.setAttribute(
    "alt",
    `image_pochette_${collection[collectionIndex].album}`
  );

  // Creation TextNodes pour textes des cartes
  let authorText = document.createTextNode(
    collection[collectionIndex].author[0]
  );
  let beatText = document.createTextNode(
    collection[collectionIndex].beatmaker[0]
  );
  let titleText = document.createTextNode(collection[collectionIndex].title);
  let albumText = document.createTextNode(collection[collectionIndex].album);
  let yearText = document.createTextNode(
    collection[collectionIndex].releaseYear
  );

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
  leMain.appendChild(newSection);

  collectionIndex++;
}
