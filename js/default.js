window.onload = function () {
  const currentLocation = location.pathname;
  const navLink = document.getElementsByClassName("nav-link");

  Array.from(navLink).forEach((e) => {
    if (e.getAttribute("href") === currentLocation) {
      e.classList.add("text-primary");
    } else {
      e.classList.add("text-secondary");
    }
  });

  const form = document.getElementById("contact");
  const urlParams = new URLSearchParams(window.location.search);
  var myParam = urlParams.get("package");

  if (form !== null) {
    document.forms["contact"].reset();
    const setPackage = document.getElementById("packages");
    if (myParam == null) {
      myParam = "Basic";
      setPackage.value = myParam;
    } else {
      setPackage.value = myParam;
    }
  }
};

function redirectTo() {
  window.location.href = "/thank-you.html";
}

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-LEB297G67F");
