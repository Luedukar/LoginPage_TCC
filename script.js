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

  teste.classList.add(
    "sm:before:left-[50%]",
    "before:left-[0]",
    "before:top-[70%]"
  );

  teste2.classList.remove("left-[0]", "absolute");
  teste2.classList.add(
    "left-[-50%]",
    "duration-[1000ms]",
    "hidden",
    "left-[0]",
    "top-[-30%]"
  );

  teste3.classList.remove("bottom-[30%]");
  teste3.classList.add(
    "sm:right-[0]",
    "sm:duration-[1200ms]",
    "bottom-[0]",
    "absolute"
  );

  teste4.classList.add("right-[50%]", "duration-[1200ms]", "hidden");
  teste5.classList.add("right-[50%]", "duration-[1200ms]");
  teste5.classList.remove("hidden");
});

LoginBtn.addEventListener("click", () => {
  container.classList.remove("active");

  teste.classList.remove(
    "sm:before:left-[50%]",
    "before:left-[0]",
    "before:top-[70%]"
  );

  teste2.classList.remove("left-[-50%]", "hidden", "left-[0]", "top-[-30%]");
  teste2.classList.add("left-[0]", "absolute");

  teste3.classList.remove("sm:right-[0]", "sm:duration-[1200ms]", "absolute");
  teste3.classList.add("bottom-[30%]");

  teste4.classList.remove("right-[50%]", "duration-[1200ms]", "hidden");
  teste5.classList.add("hidden");
  teste5.classList.remove("right-[50%]", "duration-[1200ms]");
});
