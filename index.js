import data from "./db.json" assert { type: "json" };
let container = document.getElementById("container");
let body = document.body;

function buildNavbar() {
  let navbar = document.createElement("div");
  navbar.style.display = "flex";
  navbar.style.backgroundColor = "#fff";
  navbar.style.width = "100%";
  navbar.style.height = "50px";
  navbar.style.padding = "3px";
  let logo = document.createElement("img");
  logo.src =
    "https://www.hublot.com/themes/custom/hublot/images/hublot-logo-upd.svg";
  logo.style.height = "20px";
  logo.style.paddingTop = "20px";
  navbar.appendChild(logo);

  let options = ["WATCHES", "OUR WORLD", "BOUTIQUES"];
  let optionBox = document.createElement("div");
  optionBox.style.display = "flex";
  optionBox.style.alignItems = "center";
  optionBox.style.flexGrow = "1";
  optionBox.style.justifyContent = "center";
  optionBox.style.paddingTop = "20px";
  for (let i = 0; i < options.length; i++) {
    let optionButton = document.createElement("button");
    optionButton.innerHTML = options[i];
    optionButton.style.backgroundColor = "#fff";
    optionButton.style.color = "black";
    optionButton.style.border = "none";
    optionButton.style.fontSize = "1rem";
    optionButton.style.fontFamily = "'Maven Pro', sans-serif";
    optionButton.style.fontWeight = "bold";
    optionButton.style.marginRight = "40px";
    
    optionBox.appendChild(optionButton);
  }
  navbar.appendChild(optionBox);

  let favorites = document.createElement("div");
  let buttons = document.createElement("button");
  let overPlay = document.createElement("overlay");
  
  let favoritesHeart = document.createElement("img");
  buttons.addEventListener("click", function on() {
    overPlay.style.display = "block";
  })
  overPlay.style.position = "fixed";
  overPlay.style.display = "none";
  overPlay.style.width = "100%";
  overPlay.style.height = "100%";
  overPlay.style.top = 0;
  overPlay.style.left = 0;
  overPlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  overPlay.style.cursor= "pointer";
  favoritesHeart.src = "img/heart-regular.svg";
  favoritesHeart.style.height = "40px";
  favoritesHeart.style.padding = "10px";

  let search = document.createElement("img");
  search.src = "img/find.svg";
  search.style.height = "40px";
  search.style.padding = "10px";

  let userHB = document.createElement("img");
  userHB.src = "img/user-regular.svg";
  userHB.style.height = "40px";
  userHB.style.padding = "10px";
  favorites.appendChild(buttons);
  buttons.appendChild(overPlay);
  overPlay.appendChild(favoritesHeart);
  favorites.appendChild(search);
  favorites.appendChild(userHB);
  navbar.appendChild(favorites);

  return navbar;
}
let newNavbar = buildNavbar();
container.appendChild(newNavbar);

function buildBody() {
  let getBody = document.createElement("div");
  getBody.style.display = "flex";
  getBody.style.backgroundColor = "#fff";

  let heading = document.createElement("h1");
  heading.textContent = "BIG BANG";
  heading.style.fontSize = "60px";
  heading.style.paddingTop = "40px";
  heading.style.paddingBottom = "40px";
  heading.style.flexGrow = "1";
  heading.style.textAlign = "center";
  heading.style.border = "1px ridge #dbdbdb";
  getBody.appendChild(heading);

  return getBody;
}
let newGetBody = buildBody();
container.appendChild(newGetBody);

function buildBodyProduct1() {
  let bodyProduct = document.createElement("div");
  bodyProduct.display = "flex";
  bodyProduct.style.backgroundColor = "#fff";

  let listOfBrand = Object.entries(data)

  for(let [key, value] of listOfBrand) {

    let nameProduct = document.createElement("div");
    let connectedProduct = document.createElement("h1");
    connectedProduct.textContent = key.toLocaleUpperCase();
    connectedProduct.style.fontWeight = "normal";
    connectedProduct.style.paddingLeft = "35px";
    nameProduct.appendChild(connectedProduct);
    bodyProduct.appendChild(nameProduct);
  
    for (let i = 0; i < value.length; i++) {
      let diProduct = document.createElement("div");
      diProduct.className = "products";
      diProduct.style.width = "300px";
      diProduct.style.height = "470px";
      diProduct.style.display = "inline-block";
      diProduct.innerHTML = `
        <div class="card">
          <h5>NEW</h5>
          <div class="thumbnail"><img src="${value[i].imageURL}" alt="Avatar" width=150px height=225px></div>
          <div class="container">
            <h4><b>${value[i].brand}</b></h4> 
            <h4 class="item-name">${value[i].name}</h4>
              <hr>
            <h3>CHF ${value[i].price} <sup><sup>.</sup></sup></h3>
          </div>
          <div class="heart-icon">
          <button class="add-to-cart-btn" onclick="addToCart(${i})">
          <span style="margin-right: 5px;">&#10084;</span>
          </button>
          </div>
        </div>
        `;
        var styles = `
        .products{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
        .card {
          border: 1px solid;
          display: flex;
          flex-direction: column;
          margin: 0px 25px;
          height: 100%;
        }

        .thumbnail {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .container {
          box-sizing: border-box;
          width: 100%;
          text-align: center;
          height: 190px;
          padding: 2px 16px;
        }
  
        h5{
          padding: 5px;
          margin: 0px 20px;
          width: fit-content;
          background-color: red;
          margin-top: 5px;
          color: white;
        }
        
        .item-name: {
          text-size: 20px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        // button {
        //   border: none;
        //   background-color:#fff;    
        // }

  
        hr{
          color: red;
          margin: 15px 100px;
          background-color: red;
          height: 5px;
          width: 15px;
          border: none;
        }
        .heart-icon {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        `;
        var styleSheet = document.createElement("style");
        styleSheet.innerHTML = styles;
        document.head.appendChild(styleSheet);
        bodyProduct.appendChild(diProduct);
    }
  }


  return bodyProduct;
}
let newBodyProduct = buildBodyProduct1();
container.appendChild(newBodyProduct);




