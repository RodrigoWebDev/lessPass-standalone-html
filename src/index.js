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
      formValues["password"]
    );
    copyPass(pass);

    showSnackBar();
  } else {
    alert("Select at least one checkbox");
  }
});

