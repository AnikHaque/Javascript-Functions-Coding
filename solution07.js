function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);

  if (element.classList.contains('hidden')) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}
