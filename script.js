const footerStart = document.querySelector('.footer-start');
const footerReady = document.querySelector('.footer-ready');
const btnMulai = document.querySelector('.btn-mulai');
const btnAcak = document.querySelector('.btn-acak');

// Function Untuk mengganti tampilan footer
btnMulai.addEventListener('click', () => {
  footerReady.classList.add('footer-on');
  footerStart.classList.add('footer-off');
  document.body.style.backgroundColor = `rgb(180, 218, 219)`;
  footerStart.style.transition = 'all 1s';
  footerReady.style.transition = 'all 1s';
});

const cColor = document.querySelector('.circle');

const red = null;
const green = null;
const blue = null;

// Mengacak Warna dari lingkaran
btnAcak.addEventListener('click', (red, green, blue) => {
  // Mengaktifkan random angka bilangan bulat
  red = Math.round(Math.random() * 255 + 0);
  green = Math.round(Math.random() * 255 + 0);
  blue = Math.round(Math.random() * 255 + 0);

  cColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

const rangeRed = document.querySelector('.rangeRed');
const rangeGreen = document.querySelector('.rangeGreen');
const rangeBlue = document.querySelector('.rangeBlue');

rangeRed.addEventListener('input', (red, green, blue) => {
  // console.log(range.value);
  red = rangeRed.value;
  green = rangeGreen.value;
  blue = rangeBlue.value;
  cColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

rangeGreen.addEventListener('input', (red, green, blue) => {
  // console.log(range.value);
  red = rangeRed.value;
  green = rangeGreen.value;
  blue = rangeBlue.value;
  cColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

rangeBlue.addEventListener('input', (red, green, blue) => {
  // console.log(range.value);
  red = rangeRed.value;
  green = rangeGreen.value;
  blue = rangeBlue.value;
  cColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
