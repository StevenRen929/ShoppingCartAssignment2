const addMilk = document.getElementById("addMilk");
const addBread = document.getElementById("addBread");
const addCoffee = document.getElementById("addCoffee");
const addEgg = document.getElementById("addEgg");
const removeMilk = document.getElementById("removeMilk");
const removeEgg = document.getElementById("removeEgg");
const removeBread = document.getElementById("removeBread");
const removeCoffee = document.getElementById("removeCoffee");

const album = document.querySelectorAll(".picture"); //return a node list have more than one
const cart = document.getElementById("cart");
const cartDetail = document.querySelectorAll(".list-detail-Layout");
const cartRemoveLast = document.getElementById("removeLast");
const cartRemoveFirst = document.getElementById("removeFirst");
const totalNumber = document.getElementById("number-of-item");

var ShoppingCart = new Array();
let totalBalance = 0;

album.forEach((picture) => {
  picture.addEventListener("click", () => {
    picture.classList.toggle("zoomIn");
  });
});

function Item(name, price, quantity) {
  (this.name = name), (this.price = price), (this.quantity = quantity);
}

function LogShoppingCart() {
  console.log(`Your Cart Currenttly has ${ShoppingCart.length} item(s)`);
  ShoppingCart.forEach((item) => {
    console.log(item["name"]);
  });
}
function updateTotalBalance() {
  let balance = 0;
  ShoppingCart.forEach((item) => {
    balance += item["price"] * item["quantity"];
  });
  console.log("Total Balance:", balance);
}
function updateShoppingCart(item) {
  // Check if the similar item exists in the shopping list
  let itemExist = false;

  for (let i = 0; i < ShoppingCart.length; i++) {
    if (ShoppingCart[i].name === item.name) {
      itemExist = true;
      // Update the DOM for existing items
      const existingCartItem = document.querySelector(`.Exist-${item.name}`);
      if (itemExist && ShoppingCart[i].quantity > 0) {
        console.log("Updating existing item:", item.name);
        console.log("Before update:", ShoppingCart);
        console.log("Existing quantity:", ShoppingCart[i].quantity);

        existingCartItem.innerHTML = `<span>${item.name}</span> <span>${
          ShoppingCart[i].quantity
        }</span> <span>${(item.price * ShoppingCart[i].quantity).toFixed(
          2
        )}</span>`;

        console.log("After update:", ShoppingCart);
        console.log("Updated quantity:", ShoppingCart[i].quantity);
        //console.log("Total Balance:",totalBalance);
      } else if (ShoppingCart[i].quantity === 0) {
        const showBtn = document.getElementById(`remove${item.name}`);
        showBtn.classList.add("hidden");
        const existingCartItem = document.querySelector(
          `.Exist-${ShoppingCart[i].name}`
        );
        existingCartItem.remove();
        ShoppingCart.splice(i, 1);

        console.log(ShoppingCart);

      }
      break; // Break out of the loop once the item is found and updated
    }
  }

  if (!itemExist) {
    const showBtn = document.getElementById(`remove${item.name}`);
    showBtn.classList.remove("hidden");
    console.log("Adding new item:", item.name);
    console.log("Before update:", ShoppingCart);

    let newList = document.createElement("li");
    newList.innerHTML = `<span>${item.name}</span> <span>${item.quantity}</span> <span>${item.price}</span>`;
    newList.classList.add("list-detail-Layout");
    newList.classList.add(`Exist-${item.name}`);
    cart.appendChild(newList);

    ShoppingCart.push(item);

    console.log("After update:", ShoppingCart);
    console.log("Updated quantity:", item.quantity);
    //console.log("Total Balance:",totalBalance);
  }
  updateTotalBalance();
}

if (addMilk) {
  addMilk.addEventListener("click", () => {
    let exsitItem = false;
    ShoppingCart.forEach((itemList) => {
      if (itemList["name"] === "Milk") exsitItem = true;
    });
    let item = new Item("Milk", "6.99", 1);
    if (!exsitItem) {
      if (ShoppingCart.length < 5) {
        updateShoppingCart(item);
        //ShoppingCart.push(item);

        //  LogShoppingCart();
      } else if (ShoppingCart.length === 5) {
        alert("Your cart is reach limit (5 items), please checkout items");
      }
    } else if (exsitItem) {
      for (let i = 0; i < ShoppingCart.length; i++) {
        if (ShoppingCart[i].name === "Milk") {
          ShoppingCart[i].quantity++;
          updateShoppingCart(item);
        }
      }
    }
  });
}


if (addBread) {
  addBread.addEventListener("click", () => {
    let exsitItem = false;
    ShoppingCart.forEach((itemList) => {
      if (itemList["name"] === "Bread") exsitItem = true;
    });
    let item = new Item("Bread", "15.99", 1);
    if (!exsitItem) {
      if (ShoppingCart.length < 5) {
        updateShoppingCart(item);
      } else if (ShoppingCart.length === 5) {
        alert("Your cart is reach limit (5 items), please checkout items");
      }
    } else if (exsitItem) {
      for (let i = 0; i < ShoppingCart.length; i++) {
        if (ShoppingCart[i].name === "Bread") {
          ShoppingCart[i].quantity++;
          updateShoppingCart(item);
        }
      }
    }
  });
}

if (addEgg) {
  addEgg.addEventListener("click", () => {
    let exsitItem = false;
    ShoppingCart.forEach((itemList) => {
      if (itemList["name"] === "Egg") exsitItem = true;
    });
    let item = new Item("Egg", "15.99", 1);
    if (!exsitItem) {
      if (ShoppingCart.length < 5) {
        updateShoppingCart(item);
      } else if (ShoppingCart.length === 5) {
        alert("Your cart is reach limit (5 items), please checkout items");
      }
    } else if (exsitItem) {
      for (let i = 0; i < ShoppingCart.length; i++) {
        if (ShoppingCart[i].name === "Egg") {
          ShoppingCart[i].quantity++;
          updateShoppingCart(item);
        }
      }
    }
  });
}

if (addCoffee) {
  addCoffee.addEventListener("click", () => {
    let exsitItem = false;
    ShoppingCart.forEach((itemList) => {
      if (itemList["name"] === "Coffee") exsitItem = true;
    });
    let item = new Item("Coffee", "30.99", 1);
    if (!exsitItem) {
      if (ShoppingCart.length < 5) {
        updateShoppingCart(item);
      } else if (ShoppingCart.length === 5) {
        alert("Your cart is reach limit (5 items), please checkout items");
      }
    } else if (exsitItem) {
      for (let i = 0; i < ShoppingCart.length; i++) {
        if (ShoppingCart[i].name === "Coffee") {
          ShoppingCart[i].quantity++;
          updateShoppingCart(item);
        }
      }
    }
  });
}
if (cartRemoveLast) {
  cartRemoveLast.addEventListener("click", () => {
    let cartLenght = ShoppingCart.length;

    if (cartLenght > 0) {
      // Ensure there's at least one item in the shopping cart

      let itemExist = false;
      ShoppingCart[cartLenght - 1].quantity--;

      const existingCartItem = document.querySelector(
        `.Exist-${ShoppingCart[cartLenght - 1].name}`
      );

      if (ShoppingCart[cartLenght - 1].quantity > 0) {
        existingCartItem.innerHTML = `<span>${
          ShoppingCart[cartLenght - 1]["name"]
        }</span> <span>${ShoppingCart[cartLenght - 1].quantity}</span> <span>${(
          ShoppingCart[cartLenght - 1]["price"] *
          ShoppingCart[cartLenght - 1].quantity
        ).toFixed(2)}</span>`;
      } else {
        // If quantity reaches 0, remove the item from the cart and update the DOM 
        const showBtn = document.getElementById(`remove${ShoppingCart[cartLenght - 1].name}`);
        showBtn.classList.add("hidden");
        existingCartItem.remove();
        ShoppingCart.pop();
      }
    }
  });
}


if (removeMilk) {
  removeMilk.addEventListener("click", () => {
    ShoppingCart.forEach((item) => {
      if (item.name === "Milk") {
        item.quantity--;
      }
    });
    let milk = new Item("Milk", "6.99", 1);
    updateShoppingCart(milk);
  });
}

if (removeCoffee) {
  removeCoffee.addEventListener("click", () => {
    ShoppingCart.forEach((item) => {
      if (item.name === "Coffee") {
        item.quantity--;
      }
    });
    let coffee = new Item("Coffee", "30.99", 1);
    updateShoppingCart(coffee);
  });
}
if (removeEgg) {
  removeEgg.addEventListener("click", () => {
    ShoppingCart.forEach((item) => {
      if (item.name === "Egg") {
        item.quantity--;
      }
    });
    let egg = new Item("Egg", "15.99", 1);
    updateShoppingCart(egg);
  });
}

if (removeBread) {
  removeBread.addEventListener("click", () => {
    ShoppingCart.forEach((item) => {
      if (item.name === "Bread") {
        item.quantity--;
      }
    });
    let Bread = new Item("Bread", "15.99", 1);
    updateShoppingCart(Bread);
  });
}

//