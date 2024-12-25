const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

const blueText3 = document.createElement("h3");
blueText3.style.color = "blue";
blueText3.textContent = "I'm a blue h3!";
container.appendChild(blueText3);

const divBlackBorderPinkBackground = document.createElement("div");
divBlackBorderPinkBackground.style.backgroundColor = "pink";
divBlackBorderPinkBackground.style.border = "solid black";
container.appendChild(divBlackBorderPinkBackground);

const h1InDiv = document.createElement("h1");
const pInDiv = document.createElement("p");
h1InDiv.textContent = "I'm in a div";
pInDiv.textContent = "ME TOO!";
divBlackBorderPinkBackground.appendChild(h1InDiv);
divBlackBorderPinkBackground.appendChild(pInDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "blue";
});
