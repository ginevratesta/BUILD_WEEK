const buttonPage = document.querySelector("#changePage");

function setSecondPage() {
  window.location.href = "index.html";
}

buttonPage.addEventListener("click", setSecondPage);
