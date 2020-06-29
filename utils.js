// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
    return 'Hello';
};

// should return the area
const area = (w, h) => w * h;

// should return the perimeter
const perimeter = (w, h) => 2 * w + 2 * h;

// should return the area of the circle
const circleArea = (r) => Math.pow(r, 2) * Math.PI;

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

let shoppingCart = [];

const clearCart = () => {
    shoppingCart.length = 0;
};

const createItem = (name, price) => {
    return { name, price, quantity: 1 };
};

// should return the current state of shopping cart
const getShoppingCart = () => shoppingCart;

// should add item to shopping cart
const addItemToCart = (item) => shoppingCart.push(item);

// should return the total quantity of items in cart
const getNumItemsInCart = () => shoppingCart.length;

// should remove item from shopping cart
const removeItemFromCart = (item) => {
    shoppingCart = shoppingCart.filter((cartItem) => cartItem.name !== item.name);
};

module.exports = {
    sayHello,
    area,
    perimeter,
    circleArea,
    clearCart,
    createItem,
    getShoppingCart,
    addItemToCart,
    getNumItemsInCart,
    removeItemFromCart,
};
