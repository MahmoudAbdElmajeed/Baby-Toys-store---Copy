// modifying the filter:
let filterButtons = document.querySelectorAll(".filter-btn");
let filterCards = document.querySelectorAll(".product-item");

filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        // 1- handle filter buttons menu active or not:
        filterButtons.forEach(btn => {
            btn.classList.remove("active-filter-btn");
        });
        e.target.classList.add("active-filter-btn");
        // 2- get data attributes for buttons:
        let btnAttrValue = e.target.getAttribute("data-filter-btn");
        // 3- connecting between the buttons and the imgs:
        filterCards.forEach(card => {
            // - hide all card images:
            card.classList.remove('is-animated');
            card.style.opacity = 0;   
            card.style.display = "none";   
            // -  get data attributes for cards:
            let cardAttrValue = card.getAttribute("data-filter-card");
            // show the card that is connected to its button:
            if (cardAttrValue === btnAttrValue) {
                    card.classList.add('is-animated');
                    card.style.opacity = 1;
                    card.style.display = "block";
            } else {
                card.classList.remove('is-animated');
                card.style.opacity = 0;  
                card.style.display = "none"; 
            };
        })      
    })
})


// slider
// let cardList = document.querySelector(".feedback-cards-wrapper");
// let slideBtns = document.querySelectorAll(".btns-slider");
// let maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

// // 1- slider cards list according buttons click:
// slideBtns.forEach(button => {
//     button.addEventListener("click", () => {
//         // let directions = button.id === "back-btn" ? -1.5 : 1.5; //the original value for pc view port
//         let directions = button.id === "back-btn" ? -1 : 1;
//         let scrollAmount = cardList.clientWidth * directions;
//         cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     })
// })

// // 2- handle slide buttons show, and hide
// let handleSlideButtons = () => {
//     slideBtns[0].style.display = cardList.scrollLeft <= 0 ? "none" : "block";
//     slideBtns[1].style.display = cardList.scrollLeft >= maxScrollLeft ? "none" : "block";
// }

// cardList.addEventListener("scroll", () => {
//     handleSlideButtons();
// })

// ############## method 2 ##############
let cardList = document.querySelector(".feedback-cards-wrapper");
let slideBtns = document.querySelectorAll(".btns-slider");
let maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

// Function to calculate scroll amount based on viewport width
function calculateScrollAmount() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
        return 1.07; // For mobile devices
    } else if (viewportWidth < 1311) { //original value: 1024
        return 1.04; // For tablets
    } else {
        return 2; // For desktops
    }
}

// 1- slider cards list according to button clicks:
slideBtns.forEach(button => {
    button.addEventListener("click", () => {
        let direction = button.id === "back-btn" ? -1 : 1;
        let scrollAmount = cardList.clientWidth * direction * calculateScrollAmount();
        cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

// 2- handle slide buttons show and hide
function handleSlideButtons() {
    slideBtns[0].style.display = cardList.scrollLeft <= 0 ? "none" : "block";
    slideBtns[1].style.display = cardList.scrollLeft >= maxScrollLeft ? "none" : "block";
}

cardList.addEventListener("scroll", handleSlideButtons);

// 3- Update maxScrollLeft on window resize
window.addEventListener("resize", () => {
    maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;
    handleSlideButtons();
});

// Initial call to set button visibility
handleSlideButtons();

// ############## method 2 end ##############



//moving the label when input is focused

let emailInput = document.querySelector('#email');
let emailLabel = document.querySelector('#enter-email');

//init moveLabel function:
function moveLabel (){
    if (document.activeElement === emailInput || emailInput.value.trim() !== "") {
        emailLabel.style.transform = "translateY(-240%)";        
    } else {
        emailLabel.style.transform = "translateY(-50%)";        
    }
}
//calling the function when the input is focused or lost focus
emailInput.addEventListener('focus', moveLabel);
emailInput.addEventListener('blur', moveLabel); //blur event work when the element loses focus


numberPlus = 22 + 1;
console.log(numberPlus);



    let closeBtn = document.querySelector(".cart-tab-container .btn .close");
    let basketIcons = document.querySelectorAll(".basket");
    let cartTab = document.querySelector('.cart-tab-container'); 

for (let basketIcon of basketIcons) {
    basketIcon.addEventListener('click', (e) => { 
        e.preventDefault();
        cartTab.classList.toggle("active");           
        });        
    }

closeBtn.addEventListener('click', (e) => {
        cartTab.classList.toggle("active");               
});

// open side menu and close:
let humburgerBtn = document.querySelector(".hamburger-btn-container");
let xBtn = document.querySelector(".close-btn");
let humburgerMenu = document.querySelector(".hamburger-menu-container");
let htmlEl = document.querySelector("html");

let isClosed = true; // Flag to track translation state

// Set initial state of the menu
humburgerMenu.style.transform = "translateX(139%)"; // Menu is initially closed

//1- open side menu
humburgerBtn.addEventListener("click", () => {
    isClosed = isClosed; // Toggle translate state.
    if (isClosed) {
        humburgerMenu.style.transform = "translateX(0%)"; // Now the menu opened
        xBtn.style.display = "flex";
        humburgerBtn.style.display = "none";
        document.body.style.overflowY = 'hidden'; /* Prevent body scroll on touch devices */
    } else {
        humburgerMenu.style.transform = "translateX(139%)"; // Now the menu closed
        humburgerBtn.style.display = "flex";
        xBtn.style.display = "none";
        document.body.style.overflowY = 'auto'; /* Allow body scroll on touch devices */
    }
})

//2- close side menu
xBtn.addEventListener('click', () => {
            humburgerMenu.style.transform = "translateX(139%)";
            humburgerBtn.style.display = "flex";
            xBtn.style.display = "none";
            document.body.style.overflowY = 'auto'; /* allow body scroll on touch devices */
        })



//========== chainging header opacity when the page scroll ===========

window.addEventListener('scroll', function () {
    let headerContainer = document.querySelector('.header-container');
    let topHeader = document.querySelector('.top-container');
    let header = document.querySelector('.bottom-container');
    let scrollPosition = window.scrollY || this.window.scrollYOffset;

    if (scrollPosition >= 164) {
        header.style.backgroundColor = 'rgb(255 255 255 / 97%)';
        headerContainer.style.boxShadow = '0px 5px 8px rgba(3, 5, 4, 0.1)';
        topHeader.style.backgroundColor = '#000000';

    } if (scrollPosition < 164) {
        header.style.backgroundColor = '#ffffff';
        topHeader.style.backgroundColor = '#f44336';
        headerContainer.style.boxShadow = 'none';
        
    }
})




// ========= shoping cart functionality =========
// data structures:
let products = [
        {
            'id': '1',
            'name': 'ABC cubes',
            'price': 120.00,
            'image': '/imgs/image 11_product1.png'
        },
        {
            'id': '2',
            'name': 'Unicorn horse',
            'price': 150.00,
            'image': '/imgs/image 11_product2.png'
        },
        {
            'id': '3',
            'name': 'Jounior ring',
            'price': 100.00,
            'image': '/imgs/image 11_product3.png'
        },
        {
            'id': '4',
            'name': 'Donkey toy',
            'price': 130.00,
            'image': '/imgs/image 11_product4.png'
        },
        {
            'id': '5',
            'name': 'Mario car',
            'price': 200.00,
            'image': '/imgs/image 11_product5.png'
        },
        {
            'id': '6',
            'name': 'Wooden dog',
            'price': 140.00,
            'image': '/imgs/image 11_product6.png'
        },
        {
            'id': '7',
            'name': 'Wooden bicycle',
            'price': 140.00,
            'image': '/imgs/image 11_product7.png'
        },
        {
            'id': '8',
            'name': 'Baby car',
            'price': 120.00,
            'image': '/imgs/image 11_product8.png'
        },
    ];



let productsContainer = document.querySelector('.cart-items');
let basketBtn = document.querySelectorAll('.bsket-icon');
let cart = {}; // Object to store product quantities


function displayProducts(event) {
    let clickedButtonId = event.currentTarget.id;

    // Add active class to the path element of the clicked button
    let clickedPath = event.currentTarget.querySelector('path');
    if (clickedPath) {
        clickedPath.classList.add('active-path');
    }

    products.forEach((product) => {
        if (clickedButtonId === product.id) {
            if (!cart[product.id]) {
                cart[product.id] = 1; // Initialize quantity if not already in cart
            } else {
                cart[product.id] += 1; // Increment quantity if already in cart
            }
            updateCart();
        }
    });
}




let shoppingIndicator = document.querySelectorAll('.total-price-shopping-icon');
let titleIndicator = document.querySelector('.item-num');
let totalIndicator = document.querySelector('.total-items span');
let totalPrice = document.querySelector('.total-amount');

console.log(shoppingIndicator);

function updateCart() {
    console.log('Updating cart...'); // Debugging log
    productsContainer.innerHTML = ''; // Clear the container before updating

  let totalItems = 0;
  let cartTotalPrice = 0; // New variable for total price

  for (let productId in cart) {
    let product = products.find(p => p.id === productId);
    let itemQuantity = cart[productId];

    totalItems += itemQuantity;
    let productTotalPrice = product.price * itemQuantity; // Calculate total price per product
    cartTotalPrice += productTotalPrice; // Add product total price to cart total price

    let productItem = `
        <div class="cart-item" id="${product.id}">
            <div class="item-info">
                <img src="${product.image}" alt="${product.name}">
                <div class= "title-and-price">
                    <h4>${product.name}</h4>
                    <div class="unit-price">
                    <small>$</small>${product.price.toFixed(2)}
                    <div class="units">
                        <div class="btn minus" data-id="${product.id}">-</div>
                        <div class="number">${itemQuantity}</div>
                        <div class="btn plus" data-id="${product.id}">+</div>

                        <button class= "remove-item-btn" data-id="${product.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" data-id="${product.id}" class="icon icon-remove" >
                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="total-price">Total: $<span>${productTotalPrice.toFixed(2)}</span></div> 
        </div>`;

        productsContainer.innerHTML += productItem;
        toRremove();
    }
    
  // Update the indicators
    shoppingIndicator.forEach((indicator) => {
    indicator.textContent = totalItems;
    });
    titleIndicator.textContent = totalItems;
    totalIndicator.textContent = totalItems;
    totalPrice.textContent = cartTotalPrice.toFixed(2); // Update total price

  // Add event listeners to the new plus and minus buttons
    document.querySelectorAll('.btn.plus').forEach(btn => {
    btn.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.btn.minus').forEach(btn => {
    btn.addEventListener('click', decreaseQuantity);
    });
}

function toRremove() {
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', removeItem);
    });

    function removeItem(event) {
    console.log(`this is removeItem function`); // Debugging log
    let productId = event.currentTarget.getAttribute('data-id');
    console.log(`Removing item with ID: ${productId}`); // Debugging log
        delete cart[productId]; // Remove item from cart
        removeActiveClass(productId);
    updateCart();
}
}


function increaseQuantity(event) {
    let productId = event.currentTarget.getAttribute('data-id');
    cart[productId] += 1;
    updateCart();
}


function decreaseQuantity(event) {
    let productId = event.currentTarget.getAttribute('data-id');
    cart[productId] -= 1;
    if (cart[productId] === 0) {
    delete cart[productId]; // Remove item from cart
    removeActiveClass(productId);
}
    updateCart();
}

function removeActiveClass(productId) {
    basketBtn.forEach(btn => {
        if (btn.id === productId) {
            let path = btn.querySelector('path');
            if (path) {
                path.classList.remove('active-path');
            }
        }
    });
}


basketBtn.forEach((btn) => {
    btn.addEventListener('click', displayProducts);
});

//============

function toggleLike(event) {
    // Check if the clicked element is an SVG or a child of the SVG
    let target = event.target.closest('.like-icon');
    if (target) {
        let path = target.querySelector('path');
        if (path) {
            path.classList.toggle('like-icon-active');
        }
    }
}

// Add event listeners to all like icons
document.querySelectorAll('.like-and-basket-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', toggleLike);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburgerBtn = document.querySelector('.hamburger-btn-container');
//     const hamburgerMenu = document.querySelector('.hamburger-menu-container');
//     const closeBtn = document.querySelector('.close-btn');

//     hamburgerBtn.addEventListener('click', () => {
//         hamburgerMenu.classList.add('active');
//     });

//     closeBtn.addEventListener('click', () => {
//         hamburgerMenu.classList.remove('active');
//     });
// });






















