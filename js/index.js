// Item Count
let itemCount = 1;

// Get Elements by QuerySelector All
let cards = document.querySelectorAll(".card");
for (let card of cards) {
  card.addEventListener("click", function () {
    // Get Title and Price From This Single Card
    let title = card.querySelector("h3").innerText;
    let price = card.querySelector("span").innerText;
    // Set Card Title
    let titleContainer = document.getElementById("title-container");
    let p = document.createElement("p");
    p.innerText = itemCount + ". " + title;
    titleContainer.appendChild(p);
    itemCount++;
  });
}
