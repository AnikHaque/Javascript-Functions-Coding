function confirmAction(question) {
  return window.confirm(question);
}
const result = confirmAction("Do you want to proceed?");
if (result) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}
