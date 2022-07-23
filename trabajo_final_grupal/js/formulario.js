const boton = document.getElementById('boton');
const modal_container = document.getElementById('modal_container');
const cerrar = document.getElementById('cerrar');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

Swal.fire(
  'The Internet?',
  'That thing is still around?',
  'question'
)