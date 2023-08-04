1. 
function getCurrentURL() {
  return window.location.href;
}

const currentURL = getCurrentURL();
console.log(currentURL);

2.
function openNewTab(url) {
  window.open(url, "_blank");
}
openNewTab("https://www.example.com");

3.
function closeCurrentTab() {
  window.close();
}

4.
function showAlert(message) {
  window.alert(message);
}
showAlert("Hello, this is an alert!");

5.
function confirmAction(question) {
  return window.confirm(question);
}
const result = confirmAction("Do you want to proceed?");
if (result) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}

6.
function showAlertOnHover(elementId, message) {
  const element = document.getElementById(elementId);
  element.addEventListener('mouseover', () => {
    window.alert(message);
  });
}

showAlertOnHover('hoverElement', 'You are hovering over me!');

7.
function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);

  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}
