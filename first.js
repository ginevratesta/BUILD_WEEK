const buttonPage = document.querySelector("#changePage");
const checkbox = document.querySelector("#checkBox");

function setSecondPage() {
  if (checkbox.checked) {
    window.location.href = "index.html";
  } else {
    alert("Prometti di fare il quiz da solo prima di procedere.");
  }
}

buttonPage.addEventListener("click", setSecondPage);
