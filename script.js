// CARD CREATION LOOP (for...of)
for (const elem of collection) {
  // HTML elements creation (+ CSS class)
  const newCard = document.createElement("section");
  newCard.setAttribute("class", "carte");

  const newDivImage = document.createElement("div");
  newDivImage.setAttribute("class", "image");
  const newDivInfos = document.createElement("div");
  newDivInfos.setAttribute("class", "infos");
  const newDivFlex = document.createElement("div");
  newDivFlex.setAttribute("class", "flex");
  const newDiv = document.createElement("div");

  const newH3Author = document.createElement("h3");
  newH3Author.setAttribute("class", "Author");
  const newH3Beat = document.createElement("h3");
  newH3Beat.setAttribute("class", "Beat");
  const newH2Title = document.createElement("h2");
  newH2Title.setAttribute("class", "Title");
  const newH4Album = document.createElement("h4");
  newH4Album.setAttribute("class", "Album");
  const newH4Year = document.createElement("h4");
  newH4Year.setAttribute("class", "Year");

  const newImage = document.createElement("img");
  newImage.setAttribute("src", elem.picture);
  newImage.setAttribute("alt", `image_pochette_${elem.album}`);

  // TextNodes creation
  const authorText = document.createTextNode(elem.author[0]);
  const beatText = document.createTextNode(elem.beatmaker[0]);
  const titconstext = document.createTextNode(elem.title);
  const albumText = document.createTextNode(elem.album);
  const yearText = document.createTextNode(elem.releaseYear);

  // Placement of TextNodes inside their HTML elements
  newH3Author.appendChild(authorText);
  newH3Beat.appendChild(beatText);
  newH2Title.appendChild(titconstext);
  newH4Album.appendChild(albumText);
  newH4Year.appendChild(yearText);

  // Placement of HTML elems inside each other
  newDivFlex.appendChild(newH3Author);
  newDivFlex.appendChild(newH3Beat);
  newDiv.appendChild(newH2Title);
  newDiv.appendChild(newH4Album);
  newDiv.appendChild(newH4Year);

  newDivImage.appendChild(newImage);
  newDivInfos.appendChild(newDivFlex);
  newDivInfos.appendChild(newDiv);

  newCard.appendChild(newDivImage);
  newCard.appendChild(newDivInfos);

  // Each card goes into the main (flex box)
  document.querySelector("main").appendChild(newCard);
}
