//Función random para generar imagenes
const max = 122;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min)) + min;

const crearNodoImagen = () => {
	const contenedor = document.createElement('div');
	contenedor.className = 'p-4';
	const imagen = document.createElement('img');
	imagen.className = 'mx-auto';
	imagen.width = '320';
	imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

	contenedor.appendChild(imagen);

	return contenedor;
};

const imagenesGeneradas = crearNodoImagen();
const montarANodo = document.getElementById('images');

const bottonAgregar = document.querySelector('button');
const agregarImagen = () => {
	const agregarImagen = crearNodoImagen();
	montarANodo.appendChild(agregarImagen);
};
bottonAgregar.addEventListener('click', agregarImagen);
