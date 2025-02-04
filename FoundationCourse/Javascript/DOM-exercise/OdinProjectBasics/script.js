console.log("Hey, this is Js file starting!!");
// select element who has an id of "container"
// id is prefix'ed with #
const container = document.querySelector("#container");
// red text element
const redText = document.createElement("p");
redText.classList.toggle("redText");
// console.log(redText);
redText.textContent = "Hey I'm red";
// set color of redtext to red
redText.style.color = "red";
// element with all properties and classname created, nwo append it
container.append(redText);

// h3 blue element
const h3Text =  document.createElement("h3");
h3Text.classList.toggle("h3Text");
h3Text.textContent = "I'm a blue h3!"
h3Text.style["color"] = "blue";
container.append(h3Text);

// div element
const pinkDiv = document.createElement("div");
pinkDiv.classList.toggle("pinkDiv")
pinkDiv.style["backgroundColor"] = "pink";
pinkDiv.style["borderColor"] = "black";
pinkDiv.style["borderStyle"] = "solid";
// div is emtpy, wont show anything, since no content
container.append(pinkDiv); 
// console.log(document);
// h1 element within pinkDiv
const pinkDivHeader = document.createElement("h1");
pinkDivHeader.textContent = "I'm in a div.";
pinkDiv.append(pinkDivHeader);
// p element within pinkdiv
const pinkDivPara = document.createElement("p");
pinkDivPara.textContent = "ME TOO!";
pinkDiv.append(pinkDivPara);

// btn.addEventListener("click", () => {
// 	alert("Hello!");
// })

btn.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "blue";
})
