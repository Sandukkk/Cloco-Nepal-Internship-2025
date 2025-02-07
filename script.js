// import { employeeData } from "./data.js";
import { Grocerylist as groceryData} from "./new_data.js";

const GrocerylistEl = document.getElementById("Grocery-list");
const uniqueGrocery = [...new Set(groceryData.map((item) => item.item_name))];

uniqueGrocery.forEach((item_name) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#" data-name="${item_name}">${item_name}</a>`;
  GrocerylistEl.appendChild(listItem);
});

document.querySelectorAll("#Grocery-list a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const item_name = this.dataset.name;
    showGroceryDetail(item_name);
  });
});

function showGroceryDetail(item_name) {
  const detailSection = document.getElementById("Grocery-detail");
  const groceryName = document.getElementById("Grocery-name");
  const groceryDataEl = document.getElementById("Grocery-data");
  const totalpurchase = document.getElementById("total-hours");

  const groceryEntries = groceryData.filter((item) => item.item_name === item_name);

  groceryName.textContent = `${item_name} Purchase Details Over a Week`;
  groceryDataEl.innerHTML = groceryEntries
    .map((entry) => {
      return `<tr><td>${entry.date}</td><td>${entry.total_purchase}</td><td>${entry.per_price}</td></tr>`;
    })
    .join("");

  const totalPurchase = groceryEntries.reduce(
    (sum, entry) => sum + entry.total_purchase,
    0
  );
  const totalPrice = groceryEntries.reduce(
    (sum, entry) => sum + entry.per_price*entry.total_purchase,
    0
  );
  totalpurchase.textContent = `Total Purchased: ${totalPurchase} items | Total Price: ${totalPrice}`;

  GrocerylistEl.style.display = "none";
  detailSection.style.display = "block";
}

document.getElementById("back-button").addEventListener("click", () => {
  document.getElementById("Grocery-detail").style.display = "none";
  GrocerylistEl.style.display = "block";
});
