// Item Count
let itemCount = 1;
let totalPrice = 0;

// Get Elements by QuerySelector All
let cards = document.querySelectorAll(".card");
for (let card of cards) {
  card.addEventListener("click", function () {
    // Get Title and Price From This Single Card
    let title = card.querySelector("h3").innerText;
    let price = card.querySelector("span").innerText;
    //  Get Only Price Without USD Symbol
    let productPrice = price.split(" ")[1];

    // Set Card Title
    let titleContainer = document.getElementById("title-container");
    let p = document.createElement("p");
    p.innerText = itemCount + ". " + title;
    titleContainer.appendChild(p);

    //  Calculate Total Price
    totalPrice += parseFloat(productPrice);
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    itemCount++;
  });
}

//  Discount
document.getElementById("apply-btn").addEventListener("click", function () {
  let cuponFiled = document.getElementById("input-field");
  let cuponFiledValue = cuponFiled.value.split(" ").join("").toUpperCase();

  if (!cuponFiledValue) {
    alert("Please Provide Promo Key :)");
  } else {
    if (cuponFiledValue == "SELL200") {
      if (totalPrice >= 200) {
        // Calculate Discount
        let discountPrice = (totalPrice * 20) / 100;
        // Set Discount Price
        elementGetByIdAndSetValue("discountPrice", discountPrice);
        // Set Total Price
        let discount = totalPrice - discountPrice;
        elementGetByIdAndSetValue("total", discount.toFixed(2));
      } else {
        alert("Please At least Purchase minimum 200$ :) ");
      }
    } else {
      alert("Please Provide Valid Promo Key");
    }
  }
});

document.getElementById("pharseseBtn").addEventListener("click", function () {
  if (totalPrice) {
    alert(`Congress...! Your Purchases ${totalPrice} Complete!`);
  } else {
    alert("Please Purchases Anything");
  }
});

// if (totalPrice >= 200) {
//   if (cuponFiledValue == "SELL200") {
//     // Calculate Discount
//     let discountPrice = (totalPrice * 20) / 100;
//     // Set Discount Price
//     elementGetByIdAndSetValue("discountPrice", discountPrice);
//     // Set Total Price
//     let discount = totalPrice - discountPrice;
//     elementGetByIdAndSetValue("total", discount.toFixed(2));
//     console.log(typeof totalPrice);
//   } else {
//   }
// } else {
//   alert("Please At least Purchase minimum 200$ :) ");
// }
