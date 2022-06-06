const button = document.querySelector('button');


function verify() {
  if (password.value.length >= 6) {
    button.style.backgroundColor = '#0095f6';
    button.style.cursor = 'pointer';
  } else {
    button.style.backgroundColor = '#0094f656';
    button.style.cursor = 'initial';
  }
}