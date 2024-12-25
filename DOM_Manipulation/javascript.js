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
