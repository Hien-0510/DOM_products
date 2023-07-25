
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function wait(second) {
  let waitPromise = new Promise((resolver, rejector) => {
    setTimeout(() => {
      resolver();
    }, second * 1000);
  });
  return waitPromise;
}

let name, age, size, money, tiendu;
let L = 169000;
let M = 233000;
let S = 510000;

async function addName(){
    return new Promise(async (resolve, reject) => {
        console.log("Nhập tên chủ nhân chiếc bánh");
        await new Promise((resolve, reject) => {
            rl.on("line", (input) => {
                name = input;
                resolve();
            });
        });
        console.log("Nhập tuổi của bạn");
        await new Promise((resolve, reject) => {
          rl.on("line", (input) => {
              age = parseInt(input);
              resolve();
          });
        });
        console.log("Nhập size bánh");
        await new Promise((resolve, reject) => {
          rl.on("line", (input) => {
              size = input;
              resolve();
          });
        });
        console.log("Xin tiền mẹ");
        await new Promise((resolve, reject) => {
          rl.on("line", (input) => {
              money = parseInt(input);
              resolve();
              rl.close(); 
          });
        });
        if (name != null && age > 0 && size != null && (money >= L || money >= M || money >= S) ) {
            resolve("Mẹ cho đủ tiền rồi");
        }else {
            reject("Mẹ không cho đủ tiền rồi nên thôi vậy.");
        }
    });
}

async function buyIngrediants(){
  console.log("Đi mua nguyên liệu");
  await wait (3);
  console.log("Mua xong rồi về thôi");
  await wait (3);
  console.log("Mẹ ơi con đã trở về bình an đây Lò vé");
  console.log("===================");
}

async function makeCake(){
  async function soChe(){
    return new Promise(async (resolve, reject) => {
      console.log("Sơ chế nguyên liệu");
      console.log("===================");
      console.log("1.Tách trứng");
      console.log("2.Ray bột");
      console.log("3.Chuẩn bị gia vị");
      await wait(5);
      console.log("Sơ chế hoàn thành");
      resolve();
    });
  }
  async function chuanbiBanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Làm bột bánh");
      await wait(5);
      console.log("Đánh kem");
      await wait(5);
      console.log("===================");
      resolve();
    });
  }
  async function lamBanh() {
    return new Promise(async (resolve, reject) => {
      console.log("Ủ bánh");
      await wait(5);
      console.log("Đổ khuôn");
      await wait(5);
      console.log("Nướng bánh");
      await wait(5);
      console.log("===================");
      resolve();
    });
  }
  await soChe();
  await chuanbiBanh();
  await lamBanh();
}

async function decorateCake() {
  console.log("Quết kem");
  await wait(3);
  console.log("Trang trí");
  await wait(3);
  console.log("Viết tên lên bánh");
  await wait(3);
  console.log("Xong trang trí");
  console.log("===================");
}

async function giveBack(){
  console.log("Xực phàn!!!!!");
  await wait(1);
  console.log("===================");
  if(size = "L"){
    tiendu = money - 510000;
  }else if (size = "M"){
    tiendu = money - 230000;
  }else {
    tiendu = money - 169000;
  }
  console.log(money);
  console.log(`Tiền còn thừa: ${tiendu}`);
  console.log("Cảm ơn vì bữa ăn | ごちそうさまでした");
}

let main = async function(){
    await addName().then(async(value) => {
      console.log(value);
      await buyIngrediants();
      await makeCake();
      await decorateCake();
      await giveBack();
    })
    .catch((value) => {
      console.log(value);
      console.log("Không có gì phải khóc ");
      rl.close();
    });
}

main();
