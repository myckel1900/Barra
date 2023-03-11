const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click',function(){ //vamos a agregar un evento de escucha a este boton cuando pase un click
    document.getElementById('sidebar').classList.toggle('active'); //sidebar:cada vez que le de click traera el id llamado sidebar  classList.toggle('active') hace que se añada un clase si no la tiene y quitarla si es que ya la tiene
})