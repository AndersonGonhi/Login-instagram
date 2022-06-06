const button = document.querySelector('button');


function verify() {
  if (email.value != '' && password.value != '') {
    button.style.backgroundColor = '#0095f6';
    button.style.cursor = 'pointer';
  } else {
    button.style.backgroundColor = '#0094f656';
    button.style.cursor = 'initial';
  }
}