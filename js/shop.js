// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id)
            cartList.push(products[i]);
        }
        console.log("cartList", cartList);
        generateCart();

    }


// Exercise 2
function cleanCart() {

    cartList.splice(0, cartList.length);
    console.log("El carrito está vacío.");
}


// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    
    let totalPrice = 0

    for (item of cartList) {
        totalPrice += item.price;
      }
      console.log(totalPrice);
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
   
    cart.splice(0, cart.length);
    for (let i = 0; i < cartList.length; i++) {
		const product = cartList[i];
		console.log("product", product);
		const existingProduct = cart.find((item) => item.id === product.id);
		console.log("existing", existingProduct);
		if (existingProduct) {
			existingProduct.quantity++;
		} else {
			product.quantity = 1;
			cart.push(product);
		}
	}
	console.log("cart no promotions", cart);
	applyPromotionsCart();
	console.log("cart promotions", cart);
	calculateTotal();
	document.getElementById('count_product').innerHTML= cartList.length
}


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for(let i = 0; i < cart.length; i++) {

        cart[i].subtotalWithDiscount = (cart[i].price * cart[i].quantity)
    }
    
    const indexOil = cart.findIndex(element => element.name == "cooking oil")
    const indexCake = cart.findIndex(element => element.name == "Instant cupcake mixture")

    if (indexOil !== -1) {

        if(cart[indexOil].quantity >= 3) {

            cart[indexOil].subtotalWithDiscount = (10 * cart[indexOil].quantity)
        }
    }

    if (indexCake !== -1) {

        if(cart[indexCake].quantity >= 10) {

            cart[indexCake].subtotalWithDiscount = ((cart[indexCake].price * cart[indexCake].quantity) - ((cart[indexCake].price * cart[indexCake].quantity) / 3))
        }
    }
    console.log(cart)


}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    
	let cartContainer = document.getElementById("cartContainer");
    let productTemplate = document.getElementById("productTemplate");

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        let total = product.subtotalWithDiscount.toFixed(2);

        let productElement = productTemplate.content.importNode(true);
  
        productElement.querySelector(".product-name").textContent = product.name;
        productElement.querySelector(".product-price").textContent = product.price;
        productElement.querySelector(".product-quantity").textContent = product.quantity;
        productElement.querySelector(".product-subtotal").textContent = total;

        cartContainer.appendChild(productElement);
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    const indexCart = cart.findIndex(element => element.id == id)

    if (indexCart == (-1)) {

        const indexProducts = products.findIndex(element => element.id == id)

        cart.push(products[indexProducts])

        const foundIndexCart2 = cart.findIndex(element => element.id == id)

        cart[foundIndexCart2].quantity = 1;

    }

    if(foundIndexCart !== (-1)) {

        cart[foundIndexCart].quantity = cart[foundIndexCart].quantity + 1;
    }

    applyPromotionsCart()
    refreshNumber()
    
    console.log(cart)
   
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const listaCompra = cartList.findIndex(product => product.id === id);
    if (listaCompra !== -1) {
        cartList.splice(listaCompra, 1);
    }
    
    console.log(listaCompra)

}

function open_modal(){
	console.log("Open Modal");
	printCart();
}