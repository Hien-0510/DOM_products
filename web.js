import data from "./db.json" assert { type: "json" };

let body = document.body;
    body.style.margin = 0;
    body.style.fontFamily = "'Maven Pro', sans-serif";

let container = document.getElementById("container");
function buildNavbar() {
    let navBar = document.createElement("div");
        navBar.style.display = "flex";
        navBar.style.alignItems = "center";
        navBar.style.backgroundColor = "#fff";
        navBar.style.width = "100%";
        navBar.style.height = "80px";

    let options = [
        "WATCHES",
        "OUR WORLD",
        "BOUTIQUES",
    ];

    let optionBox = document.createElement("div");
        optionBox.style.display = "flex";
        optionBox.style.alignItems = "center";
        optionBox.style.justifyContent = "center";
  
        let logo = document.createElement("img");
            logo.src = "https://www.hublot.com/themes/custom/hublot/images/hublot-logo-upd.svg";
            logo.style.height = "30px";
            logo.style.display = "block";
            logo.style.paddingLeft = "10px";
            optionBox.appendChild(logo);

        let groupButton = document.createElement("div");
            groupButton.style.display = "flex";
            groupButton.style.alignItems = "center";
            groupButton.style.justifyContent = "center";
            groupButton.style.paddingLeft = "500px";
            let watchButton = document.createElement("button");
                watchButton.innerHTML = options[0];
                watchButton.style.backgroundColor = "#fff";
                watchButton.style.border = "none";
                watchButton.style.padding = "0px 30px";
                groupButton.appendChild(watchButton);
            optionBox.appendChild(groupButton);

            let ourWorldButton = document.createElement("button");
                ourWorldButton.innerHTML = options[1];
                ourWorldButton.style.backgroundColor = "#fff";
                ourWorldButton.style.border = "none";
                ourWorldButton.style.padding = "0px 50px";
                groupButton.appendChild(ourWorldButton);
            optionBox.appendChild(groupButton);

            let boutiquesButton = document.createElement("button");
                boutiquesButton.innerHTML = options[2];
                boutiquesButton.style.backgroundColor = "#fff";
                boutiquesButton.style.border = "none";
                boutiquesButton.style.padding = "0px 30px";
                groupButton.appendChild(boutiquesButton);
            optionBox.appendChild(groupButton);

        let buttonRight = document.createElement("div");
            buttonRight.style.display = "flex";
            buttonRight.style.marginLeft = "230px";
            let buttonFavorites = document.createElement("button");
                buttonFavorites.style.backgroundColor = "#fff";
                buttonFavorites.style.borderLeft = "0.1px solid #000";
                buttonFavorites.style.borderRight = "none";
                buttonFavorites.style.borderTop = "none";
                buttonFavorites.style.borderBottom = "none";
                let favoritesHeart = document.createElement("img");
                    favoritesHeart.src = "img/heart-regular.svg";
                    favoritesHeart.style.height = "30px";
                    favoritesHeart.style.paddingLeft = "40px";
                    favoritesHeart.style.paddingRight = "40px"; //
                    buttonFavorites.appendChild(favoritesHeart);
                buttonRight.appendChild(buttonFavorites);
            optionBox.appendChild(buttonRight);

            let buttonSearch = document.createElement("button");
                buttonSearch.style.backgroundColor = "#fff";
                buttonSearch.style.borderLeft = "0.1px solid #000";
                buttonSearch.style.borderRight = "none";
                buttonSearch.style.borderTop = "none";
                buttonSearch.style.borderBottom = "none";
                let searchIcon = document.createElement("img");
                    searchIcon.src = "img/find.svg";
                    searchIcon.style.height = "30px";
                    searchIcon.style.paddingLeft = "40px";
                    searchIcon.style.paddingRight = "40px"; //
                    buttonSearch.appendChild(searchIcon);
                buttonRight.appendChild(buttonSearch);
            optionBox.appendChild(buttonRight);

            let buttonUser = document.createElement("button");
                buttonUser.style.backgroundColor = "#fff";
                buttonUser.style.display = "flex";
                buttonUser.textContent = "HUBLOTISTA";
                buttonUser.style.textAlign = "center";
                buttonUser.style.fontWeight = "bold";
                buttonUser.style.borderLeft = "0.1px solid #000";
                buttonUser.style.borderRight = "0.1px solid #000";
                buttonUser.style.borderTop = "none";
                buttonUser.style.borderBottom = "none";
                let userIcon = document.createElement("img");
                    userIcon.src = "img/user-regular.svg";
                    userIcon.style.marginLeft = "30px";
                    userIcon.style.height = "30px";
                    userIcon.style.paddingLeft = "40px";
                    userIcon.style.paddingRight = "40px"; //
                    buttonUser.appendChild(userIcon);
                buttonRight.appendChild(buttonUser);
            optionBox.appendChild(buttonRight);

        navBar.appendChild(optionBox);
    return navBar;
}
let newNavbar = buildNavbar();
container.appendChild(newNavbar);

function buildLineGrey() {
    let lineGrey = document.createElement("div");
        lineGrey.style.width = "100%";
        lineGrey.style.height = "50px";
        lineGrey.style.backgroundColor = "#f0f0f0";
        let textGrey = document.createElement("text");
            textGrey.textContent = "WATCHES > BIG BANG > ALL";
            textGrey.style.paddingLeft = "20px";
            lineGrey.appendChild(textGrey);
    return lineGrey;
}
let newLineGrey = buildLineGrey();
container.appendChild(newLineGrey);

function buildTopBody(){
    let bodyTop = document.createElement("div");
        let rightTop = document.createElement("div");
            rightTop.style.display = "flex";
            rightTop.style.justifyContent = "flex-end";
            rightTop.style.paddingRight = "20px";
            let textTop = document.createElement("text");
                textTop.textContent = "181 MODELS";
                textTop.style.paddingRight = "70px";
                textTop.style.paddingTop = "25px";
                textTop.style.fontWeight = "lighter";
        rightTop.appendChild(textTop);
            let Bottom = document.createElement("button");
                Bottom.style.backgroundColor = "#171717";
                Bottom.style.border = "none";
                Bottom.style.padding = "25px 40px";
                let textButton = document.createElement("text");
                    textButton.textContent = "FILTERS";
                    textButton.style.fontWeight = "normal";
                    textButton.style.color = "#fff";
                Bottom.appendChild(textButton); 
        rightTop.appendChild(Bottom);
    bodyTop.appendChild(rightTop);
    return bodyTop;
}
let newTopBody = buildTopBody();
container.appendChild(newTopBody);

function buildNameBody() {
    let nameBD = document.createElement("div");
        nameBD.style.display = "flex";
        nameBD.style.justifyContent = "center";
        nameBD.style.paddingTop = "20px";
        nameBD.style.borderBottom = "0.1px solid black";
        let textName = document.createElement("text");
            textName.textContent = "BIG BANG";
            textName.style.fontSize = "50px";
            textName.style.fontWeight = "bold";
            textName.style.paddingBottom = "20px";
        nameBD.appendChild(textName);
    return nameBD;
}
let newNameBody = buildNameBody();
container.appendChild(newNameBody);

function makeItem(){
    let itemList = document.createElement("div");
        itemList.style.display = "flex";
        
        class Watch {
            /**
             * @param {string} id
             * @param {string} brand
             * @param {string} nameBrand
             * @param {string} name
             * @param {number} price
             * @param {string} imageURL
             */
            constructor(id, brand, nameBrand, name, price, imageURL) {
                this.id = id;
                this.brand = brand;
                this.nameBrand = nameBrand;
                this.name = name;
                this.price = price;
                this.imageURL = imageURL;
            }
        }

        /**
         * @param {Array} Watch
         */

        let listOfWatches = [...data];

            for (let i = 0; i < listOfWatches.length; i++) {
                let newItemCard = buildItemCard(listOfWatches[i]);
                itemList.appendChild(newItemCard);
            }

    return itemList;
}
let newItem = makeItem();
container.appendChild(newItem);

function buildItemCard(item){
    let product = document.createElement("div");

    return product; 
}
let newItemCard = makeItemCard();
container.appendChild(newItemCard);

let cart = [];
function addItemtoCart(item) {
  alert("Đã thêm vào giỏ hàng");
  let itemPosition = cart.findIndex((itemInCart) => {
    return itemInCart.id == item.id;
  });

  if (itemPosition === -1) {
    item.quantity = 1;
    cart.push(item);
  } else {
    cart[itemPosition].quantity += 1;
  }
  console.log(cart);
}

