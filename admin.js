function login() {
  if (document.getElementById("pass").value === "ckerror123") {
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Wrong password");
  }
}
