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

downloadLink.addEventListener("click", () => {
  save()
});

function save() {
  const data = "<!DOCTYPE html>\n"+document.documentElement.outerHTML; // See sources below for why this gets the entire page content.
  const link = document.createElement('a');
  link.setAttribute('download', 'default_download_name.html');
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
  link.click(); // In my tests, there was no need to add the element to the document for this to work.
}

