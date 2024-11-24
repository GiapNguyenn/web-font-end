const btnShowConnect = document.querySelector(".btn-show-connect");
const connectList = document.querySelector(".connect-list");
btnShowConnect.addEventListener("click", () => {
  connectList.classList.toggle("hidden");
  btnShowConnect.classList.toggle("active");
});
