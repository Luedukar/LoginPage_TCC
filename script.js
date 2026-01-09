const form_cadastro = document.querySelector(".form_cadastro");
const form_login = document.querySelector(".form_login");
const painel_right = document.querySelector(".painel_right");
const painel_left = document.querySelector(".painel_left");
const alter_box = document.querySelector(".alter_box");
const RegisterBtn = document.querySelector(".register-btn");
const LoginBtn = document.querySelector(".login-btn");

RegisterBtn.addEventListener("click", () => {
  alter_box.classList.add(
    "sm:before:left-[50%]",
    "before:left-[0]",
    "before:top-[76%]"
  );

  painel_left.classList.add(
    "sm:left-[-50%]",
    "duration-[1000ms]",
    "top-[-30%]"
  );
  painel_left.classList.remove("sm:left-[0]", "top-[0]");

  painel_right.classList.add(
    "sm:right-[0]",
    "sm:duration-[1200ms]",
    "bottom-[-5%]",
    "absolute"
  );
  painel_right.classList.remove("bottom-[-30%]");

  form_login.classList.remove("delay-300");
  form_login.classList.add("right-[100%]");

  form_cadastro.classList.add(
    "sm:right-[50%]",
    "w-full",
    "bottom-[12%]",
    "right-[0]"
  );
  form_cadastro.classList.remove("right-[-100%]");
});

LoginBtn.addEventListener("click", () => {
  alter_box.classList.remove(
    "sm:before:left-[50%]",
    "before:left-[0]",
    "before:top-[76%]"
  );

  painel_left.classList.remove(
    "sm:left-[-50%]",
    "duration-[1000ms]",
    "top-[-30%]"
  );
  painel_left.classList.add("sm:left-[0]", "top-[0]");

  painel_right.classList.remove("sm:right-[0]", "absolute", "bottom-[0]");
  painel_right.classList.add("bottom-[-30%]");

  form_login.classList.remove("right-[100%]");
  form_login.classList.add("delay-300");

  form_cadastro.classList.remove("sm:right-[50%]", "sm:w-full", "right-[0]");
  form_cadastro.classList.add("right-[-100%]");
});
