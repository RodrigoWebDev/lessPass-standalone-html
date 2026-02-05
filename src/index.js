import lesspass from "lesspass";

const getById = (el) => document.getElementById(el);
let isPasswordVisible = false;

const myForm = getById("form");
const downloadLink = getById("download");

const copyPass = (pass) => {
  const copyText = getById("hiddenPass");
  copyText.value = pass;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  copyText.value = "";
};

const showSnackBar = () => {
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = "";
  }, 3000);
};

const downloadHTMLPage = () => {
  const htmlContent = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
  const blob = new Blob([htmlContent], { type: "text/html" });
  const a = document.createElement("a");

  a.href = URL.createObjectURL(blob);
  a.download = "pass_manager.html";
  a.click();
  URL.revokeObjectURL(a.href);
};

document.querySelectorAll("[data-id='download-html']").forEach((el) => {
  el.addEventListener("click", () => {
    downloadHTMLPage();
  });
});

getById("clearPasswordButton").addEventListener("click", () => {
  getById("passwordContainer").style.display = "none";
  getById("passwordDisplay").textContent = "";
  getById("showPasswordButton").textContent = "👀 Show password";
  isPasswordVisible = false;
});

myForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formValues = Object.fromEntries(formData);

  if (
    formValues.lowercase ||
    formValues.uppercase ||
    formValues.digits ||
    formValues.symbols
  ) {
    const passwordProfile = {
      ...formValues,
    };

    const pass = await lesspass.generatePassword(
      passwordProfile,
      formValues["password"],
    );

    copyPass(pass);

    getById("passwordContainer").style.display = "block";

    getById("passwordDisplay").textContent = pass;

    getById("showPasswordButton").addEventListener("click", () => {
      const passwordDisplay = getById("passwordDisplay");
      const passwordLock = getById("passwordLock");

      if (isPasswordVisible) {
        getById("showPasswordButton").textContent = "👀 Show password";
        passwordDisplay.style.display = "none";
        passwordLock.style.display = "block";
        isPasswordVisible = false;
      } else {
        getById("showPasswordButton").textContent = "🙈 Hide password";
        passwordDisplay.style.display = "block";
        passwordLock.style.display = "none";
        isPasswordVisible = true;
      }
    });

    showSnackBar();

    setTimeout(() => {
      getById("passwordLock").style.display = "block";
      getById("passwordDisplay").style.display = "none";
      getById("showPasswordButton").textContent = "👀 Show password";
      getById("passwordDisplay").textContent = "";
      getById("passwordContainer").style.display = "none";
      getById("form").reset();

      isPasswordVisible = false;
    }, 30000);
  } else {
    alert("Select at least one checkbox");
  }
});
