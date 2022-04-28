const btn = document.querySelector("button");
const ipt = document.querySelector("input");

btn.addEventListener("click", function () {
  if (btn.innerText === "Show Password") {
    btn.innerText = "Hide Password";
    ipt.type = "text";
  } else {
    btn.innerText = "Show Password";
    ipt.type = "password";
  }
});
