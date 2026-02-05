import lesspass from "lesspass";

const getById = (el) => document.getElementById(el);

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
      passwordDisplay.style.display = "block";
      passwordLock.style.display = "none";
    });

    showSnackBar();
  } else {
    alert("Select at least one checkbox");
  }
});
