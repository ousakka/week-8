const menuDatabase = [
  [
    "Papadum",
    20,
    "vegetarian",
    "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg",
  ],
  [
    "Pakora",
    50,
    "meat",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
  ],
  [
    "Tandoori Chicken",
    60,
    "meat",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
  ],
  [
    "Samosa",
    50,
    "vegetarian",
    "https://www.seriouseats.com/thmb/NtyM7QQCFXZjgTPqb0t52Hg9fgM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210909-SAMOSAS-ANDREWJANJIGIAN-86-ca872c2eae8e4e7eb4e7b47cfad8715e.jpg",
  ],
];

const menuItems = document.getElementById("menu");
const vegetarianBtn = document.getElementById("veg");
const meatBtn = document.getElementById("meat");

function displayItem(items) {
  menuItems.innerHTML = "";

  for (let item of items) {
    const listElement = document.createElement("li");
    const imageOfElement = document.createElement("img");
    const productName = document.createElement("p");
    const price = document.createElement("p");
    const cathegory = document.createElement("p");
    imageOfElement.src = item[3];
    imageOfElement.style.width = "100px";
    productName.innerHTML = item[0];
    price.innerHTML = item[2];
    cathegory.innerHTML = item[1];

    listElement.appendChild(imageOfElement);
    listElement.appendChild(productName);
    listElement.appendChild(price);
    listElement.appendChild(cathegory);
    menuItems.appendChild(listElement);
  }
}

function showAll() {
  displayItem(menuDatabase);
}

function veg() {
  const vegetarianItems = menuDatabase.filter(
    (item) => item[2] === "vegetarian"
  );

  displayItem(vegetarianItems);
}

function meat() {
  const meatItems = menuDatabase.filter((item) => item[2] === "meat");
  displayItem(meatItems);
}
