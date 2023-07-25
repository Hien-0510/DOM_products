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
        lineGrey.style.display = "flex";
        let textGrey = document.createElement("text");
            textGrey.style.textAlign = "left";
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
        itemList.style.flexDirection = "column";
        
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
        let brands = ["CONNECTED", "UNICO"];

        for(let i = 0; i < brands.length; i++){
            let brand = brands[i];
            let divBrand = document.createElement("div");
                divBrand.style.width = "100%";
            let brandName = document.createElement("h2");
                brandName.textContent = brand;
                brandName.style.fontSize = "30px";
            let divWatch = document.createElement("div");
                divWatch.style.display = "grid";
                divWatch.style.gap = "20px";
                divWatch.style.gridTemplateColumns = "repeat(4, 1fr)";
                for (let j = 0; j < listOfWatches.length; j++) {
                    if (listOfWatches[j].brand == brand) {
                    let newItemCard = buildItemCard(listOfWatches[j]);
                    divWatch.appendChild(newItemCard);
                    }
                }
            divBrand.appendChild(brandName);
            divBrand.appendChild(divWatch);
            itemList.appendChild(divBrand);  
        }
    return itemList;
}
let newItem = makeItem();
container.appendChild(newItem);

function buildItemCard(item){
    let { id, name, nameBrand, price, imageURL } = item;

    let itemCard = document.createElement("div");
    Object.assign(itemCard.style, {
      background: "rgb( 245 245 245)",
      "max-width": "500px",
      width: "100%",
      height: "100%",
      margin: "auto",
      "text-align": "left",
      "font-family": "arial",
      "font-size": "1rem",
      display: "flex",
      "align-items": "center",
    });
  
    let itemDetails = document.createElement("div");
    itemDetails.style.padding = "5%";
  
    let itemNameBrand = document.createElement("h2");
    itemNameBrand.style.margin = 0;
    itemNameBrand.innerHTML = nameBrand;
  
    let itemName = document.createElement("p");
    itemName.innerHTML = name;
  
    let itemPrice = document.createElement("p");
    itemPrice.style.fontWeight = "550";
    itemPrice.innerHTML = price;
  
    let button = document.createElement("button");
    button.innerText = "Thêm vào giỏ";
    Object.assign(button.style, {
      "align-items": "center",
      "background-color": "#fff",
      border: "2px solid #000",
      "box-sizing": "border-box",
      color: "#000",
      cursor: "pointer",
      display: "inline-flex",
      fill: "#000",
      "font-family": "Inter,sans-serif",
      "font-size": "16px",
      "font-weight": "600",
      height: "48px",
      "justify-content": "center",
      "letter-spacing": "-.8px",
      "line-height": "24px",
      "min-width": "140px",
      outline: "0",
      padding: "0 17px",
      "text-align": "center",
      "text-decoration": "none",
      transition: "all .3s",
      "user-select": "none",
      "-webkit-user-select": "none",
      "touch-action": "manipulation",
      "min-width": "170px",
    });
    button.addEventListener("mouseover", function () {
      button.style.borderColor = "#40CF32";
      button.style.color = "#40CF32";
      button.style.fill = "#40CF32";
    });
    button.addEventListener("mouseout", function () {
      button.style.borderColor = "#000";
      button.style.color = "#000";
      button.style.fill = "#000";
    });
    button.addEventListener("click", () => {
      addItemtoCart(item);
    });
  
    itemDetails.appendChild(itemNameBrand);
    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(button);
  
    itemCard.appendChild(itemDetails);
  
    let itemPic = document.createElement("img");
    itemPic.src = imageURL;
    itemPic.alt = "Watch";
    itemPic.style.width = "48%";
    itemCard.appendChild(itemPic);
  
    return itemCard;
  }

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

//Làm cái giỏ
function makeCart() {
    let shoppingCart = document.createElement("div");
    shoppingCart.style.display = "block";
    shoppingCart.style.margin = "5%";
    shoppingCart.style.padding = "0 5% 0 5%";
    shoppingCart.style.textAlign = "center";
  
    let itemListInCart = document.createElement("div");
    itemListInCart.style.display = "grid";
    itemListInCart.style.gap = "1rem";
    itemListInCart.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(400px, 1fr))";
  
    let overlay = document.createElement("div");
    let allButtonInCart = document.createElement("span");
    let closeButton = document.createElement("button");
    let billButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let totalBox = document.createElement("h3");
    let total = 0;
    let newItemCart;
  
    Object.assign(overlay.style, {
      position: "fixed",
      display: "none",
      width: "100%",
      height: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      "background-color": "rgba(0,0,0,0.5)",
      "z-index": "2",
    });
    overlay.onclick = off();
  
    Object.assign(closeButton.style, {
      "align-items": "center",
      "background-color": "#fff",
      border: "2px solid #000",
      "box-sizing": "border-box",
      color: "#000",
      cursor: "pointer",
      display: "inline-flex",
      fill: "#000",
      "font-family": "Inter,sans-serif",
      "font-size": "16px",
      "font-weight": "600",
      height: "48px",
      "justify-content": "center",
      "letter-spacing": "-.8px",
      "line-height": "24px",
      "min-width": "140px",
      outline: "0",
      padding: "0 17px",
      "text-align": "center",
      "text-decoration": "none",
      transition: "all .3s",
      "user-select": "none",
      "-webkit-user-select": "none",
      "touch-action": "manipulation",
      "min-width": "170px",
      margin: "3%",
    });
  
    Object.assign(billButton.style, {
      "align-items": "center",
      "background-color": "rgb(0 233 39)",
      border: "2px solid #000",
      "box-sizing": "border-box",
      color: "#000",
      cursor: "pointer",
      display: "inline-flex",
      fill: "rgb(0 233 39)",
      "font-family": "Inter,sans-serif",
      "font-size": "16px",
      "font-weight": "600",
      height: "48px",
      "justify-content": "center",
      "letter-spacing": "-.8px",
      "line-height": "24px",
      "min-width": "140px",
      outline: "0",
      padding: "0 17px",
      "text-align": "center",
      "text-decoration": "none",
      transition: "all .3s",
      "user-select": "none",
      "-webkit-user-select": "none",
      "touch-action": "manipulation",
      "min-width": "170px",
      margin: "3%",
    });
  
    Object.assign(deleteButton.style, {
      "align-items": "center",
      "background-color": "rgb(255 63 63)",
      border: "2px solid #000",
      "box-sizing": "border-box",
      color: "#000",
      cursor: "pointer",
      display: "inline-flex",
      fill: "rgb(255 63 63)",
      "font-family": "Inter,sans-serif",
      "font-size": "16px",
      "font-weight": "600",
      height: "48px",
      "justify-content": "center",
      "letter-spacing": "-.8px",
      "line-height": "24px",
      "min-width": "140px",
      outline: "0",
      padding: "0 17px",
      "text-align": "center",
      "text-decoration": "none",
      transition: "all .3s",
      "user-select": "none",
      "-webkit-user-select": "none",
      "touch-action": "manipulation",
      "min-width": "170px",
      margin: "3%",
    });
  
    Object.assign(totalBox.style, {
      "align-items": "center",
      "background-color": "#fff",
      border: "2px solid #000",
      "box-sizing": "border-box",
      color: "#000",
      display: "inline-flex",
      fill: "#000",
      "font-family": "Inter,sans-serif",
      "font-size": "16px",
      "font-weight": "600",
      height: "48px",
      "justify-content": "center",
      "letter-spacing": "-.8px",
      "line-height": "24px",
      "min-width": "140px",
      outline: "0",
      padding: "0 17px",
      "text-align": "center",
      "text-decoration": "none",
      transition: "all .3s",
      "user-select": "none",
      "-webkit-user-select": "none",
      "touch-action": "manipulation",
      "min-width": "170px",
      margin: "3%",
    });
  
    function on() {
      overlay.style.display = "block";
      closeButton.innerText = "Đóng Giỏ Hàng";
      billButton.innerText = "Thanh Toán";
      deleteButton.innerHTML = "Xóa Hết Đơn Hàng";
  
      deleteButton.addEventListener("mouseover", function () {
        deleteButton.style.borderColor = "white";
        deleteButton.style.color = "white";
        deleteButton.style.fill = "white";
      });
      deleteButton.addEventListener("mouseout", function () {
        deleteButton.style.borderColor = "#000";
        deleteButton.style.color = "#000";
        deleteButton.style.fill = "#000";
      });
      deleteButton.addEventListener("click", () => {
        itemListInCart.innerHTML = "";
        cart = [];
        total = 0;
        totalBox.innerText = `Tổng số tiền: ${total}`;
      });
  
      billButton.addEventListener("mouseover", function () {
        billButton.style.borderColor = "white";
        billButton.style.color = "white";
        billButton.style.fill = "white";
      });
      billButton.addEventListener("mouseout", function () {
        billButton.style.borderColor = "#000";
        billButton.style.color = "#000";
        billButton.style.fill = "#000";
      });
      billButton.addEventListener("click", () => {
        if (cart.length <= 0) {
          alert(`Không có hàng để thanh toán`);
        } else {
          alert(`Đã thanh toán thành công`);
        }
      });
  
      closeButton.addEventListener("mouseover", function () {
        closeButton.style.borderColor = "#40CF32";
        closeButton.style.color = "#40CF32";
        closeButton.style.fill = "#40CF32";
      });
      closeButton.addEventListener("mouseout", function () {
        closeButton.style.borderColor = "#000";
        closeButton.style.color = "#000";
        closeButton.style.fill = "#000";
      });
      closeButton.addEventListener("click", () => {
        overlay.style.display = "none";
        itemListInCart.innerHTML = "";
        total = 0;
      });
  
      for (let i = 0; i < cart.length; i++) {
        newItemCart = buildItemInCart(cart[i]);
        total += cart[i].price * cart[i].quantity;
        itemListInCart.appendChild(newItemCart);
      }
  
      totalBox.innerText = `Tổng số tiền: ${total}tr VNĐ`;
  
      allButtonInCart.appendChild(deleteButton);
      allButtonInCart.appendChild(billButton);
      allButtonInCart.appendChild(totalBox);
      allButtonInCart.appendChild(closeButton);
  
      overlay.appendChild(allButtonInCart);
  
      overlay.appendChild(itemListInCart);
    }
  
    function off() {
      overlay.style.display = "none";
    }
  
    let iconCart = document.createElement("img");
    iconCart.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/2501px-Shopping_cart_icon.svg.png";
    iconCart.style.height = "50px";
    iconCart.style.margin = "auto";
    iconCart.id = "overlay";
    Object.assign(iconCart.style, {
      "align-items": "center",
      "background-color": "#fff",
      border: "5px solid #000",
      "box-sizing": "border-box",
      color: "#000",
      cursor: "pointer",
      display: "inline-flex",
      fill: "#000",
      outline: "0",
      padding: "0 50px",
      transition: "all .3s",
      "user-select": "none",
      "-webkit-user-select": "none",
      "touch-action": "manipulation",
    });
    iconCart.addEventListener("mouseover", function () {
      iconCart.style.borderColor = "#40CF32";
      iconCart.style.color = "#40CF32";
      iconCart.style.fill = "#40CF32";
    });
    iconCart.addEventListener("mouseout", function () {
      iconCart.style.borderColor = "#000";
      iconCart.style.color = "#000";
      iconCart.style.fill = "#000";
    });
    iconCart.addEventListener("click", () => {
      if (cart.length == 0) {
        alert("Không có hàng trong giỏ");
      } else {
        overlay.onclick = on();
      }
    });
  
    shoppingCart.appendChild(iconCart);
    shoppingCart.appendChild(overlay);
    return shoppingCart;
  }
  let newCart = makeCart();
  container.appendChild(newCart);
  
  //Xây dựng item card trong giỏ hàng
  function buildItemInCart(item) {
    let { id, name, nameBrand, price, imageURL, quantity } = item;
  
    let itemCard = document.createElement("div");
    Object.assign(itemCard.style, {
      background: "rgb( 245 245 245)",
      "max-width": "400px",
      width: "100%",
      height: "100%",
      margin: "auto",
      "text-align": "left",
      "font-family": "arial",
      "font-size": "1rem",
      display: "flex",
      "align-items": "center",
      "justify-content": "space-evenly",
      "box-sizing": "border-box",
    });
  
    let itemDetails = document.createElement("div");
    itemDetails.style.padding = "5%";
    itemDetails.style.maxWidth = "200px";
  
    let itemName = document.createElement("h2");
    itemName.style.margin = 0;
    itemName.innerHTML = name;
  
    let itemPrice = document.createElement("p");
    itemPrice.style.fontWeight = "550";
    itemPrice.innerHTML = price ;
  
    let itemQuantity = document.createElement("p");
    itemQuantity.style.fontSize = "15px";
    itemQuantity.innerHTML = `Số lượng: ${quantity}`;
  
    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(itemQuantity);
  
    itemCard.appendChild(itemDetails);
  
    let itemPic = document.createElement("img");
    itemPic.src = imageURL;
    itemPic.alt = "Watch";
    itemPic.style.width = "30%";
    itemCard.appendChild(itemPic);
  
    return itemCard;
  }
  