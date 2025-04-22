const shops = ["Patagonia", "Matas", "Normal", "Føtex"];

const shopListElement = document.getElementById("shopList");

for (const shop of shops) {
  const listElement = document.createElement("li");
  listElement.innerText = shop;
  shopListElement.appendChild(listElement);
}