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
  if (form !== null) {
    document.forms["contact"].reset();
  }
};

function popmsg() {
  const form = document.getElementById("contact");
  console.log(form);
  form.classList.add("d-none");

  const popmsg = document.getElementById("popmsg");
  console.log(popmsg);
  popmsg.classList.remove("d-none");
}
