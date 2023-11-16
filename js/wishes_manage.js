let wishes = [
    {
      wish1: "Camiseta karla kani",
      wish2: "Chandal nike"
    },
    {
      wish1: "Gorra de los bulls",
      wish2: "Riñonera"
    },
  ];
  
  function showWishes() {
    const WISH_LIST = document.getElementById("wish-list");
  
    WISH_LIST.innerHTML = "";
  
    for (let i = 0; i < wishes.length; i++) {
      WISH_LIST.innerHTML += `<li>${wishes[i].wish1}<button onclick="deleteBicycle(${i})">DELETE</button></li>`;
    }
  
  }
  
  function deleteWish(wishId) {
    wishes.splice(wishId, 1);
  
    showWishes();
  }
  
  function inicialize() {
    const WISHES_FORM = document.getElementById("wishes-form");
    WISHES_FORM.addEventListener("submit", addWish);
  
    showWishes();
  }
  
  function addWishes(event) {
    event.preventDefault();
  
    const WISH1 = event.target.wish1.value;
    const WISH2 = event.target.wish2.value;
  
    wishes.push({
      wish1: WISH1,
      wish2: WISH2
    })

    showWishes();
}



inicialize();