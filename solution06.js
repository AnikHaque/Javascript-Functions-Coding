function showAlertOnHover(elementId, message) {
  const element = document.getElementById(elementId);
  element.addEventListener('mouseover', () => {
    window.alert(message);
  });
}

showAlertOnHover('hoverElement', 'You are hovering over me!');
