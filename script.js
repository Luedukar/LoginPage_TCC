const container = document.querySelector(".container");
const teste5 = document.querySelector(".teste5");
const teste4 = document.querySelector(".teste4");
const teste3 = document.querySelector(".teste3");
const teste2 = document.querySelector(".teste2");
const teste = document.querySelector(".teste");
const RegisterBtn = document.querySelector(".register-btn");
const LoginBtn = document.querySelector(".login-btn");

RegisterBtn.addEventListener("click", () => {
  container.classList.add("active");
  teste.classList.add("before:left-[50%]");
  teste2.classList.remove("left-[0]");
  teste2.classList.add("left-[-50%]", "duration-[1000ms]", "hidden");
  teste3.classList.add("right-[0]", "duration-[1200ms]");
  teste4.classList.add("right-[50%]", "duration-[1200ms]", "hidden");
  teste5.classList.add("right-[50%]", "duration-[1200ms]");
  teste5.classList.remove("hidden");
});

LoginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  teste.classList.remove("before:left-[50%]");
  teste2.classList.remove("left-[-50%]", "hidden");
  teste2.classList.add("left-[0]");
  teste3.classList.remove("right-[0]", "duration-[1200ms]");
  teste4.classList.remove("right-[50%]", "duration-[1200ms]", "hidden");
  teste5.classList.add("hidden");
  teste5.classList.remove("right-[50%]", "duration-[1200ms]");
});
