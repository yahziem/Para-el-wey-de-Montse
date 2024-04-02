const galleryContainer = document.getElementById('galleryContainer');

// Puedes reemplazar estas URL con las de tus propias imágenes
const imageUrls = [
    'https://yahzi.000webhostapp.com/mensajes/carta/1.jpg',
    'https://yahzi.000webhostapp.com/mensajes/carta/2.jpg',
    'https://yahzi.000webhostapp.com/mensajes/carta/3.jpg',
    'https://yahzi.000webhostapp.com/mensajes/carta/4.jpg',
    'https://yahzi.000webhostapp.com/mensajes/carta/5.jpg',
    'https://yahzi.000webhostapp.com/mensajes/carta/6.jpg',
    
    
    // Agrega más URL de imágenes según sea necesario
];

function createGalleryItem(url) {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.src = url;
    img.alt = url; // Cambiado para mostrar la URL de la imagen en caso de que el enlace esté roto

    // Comentar las siguientes líneas para usar el tamaño original de las imágenes
     //img.style.width = '500px';
     //img.style.height = '500px';
     //img.style.objectFit = 'cover';

    // Agregar evento de clic para agrandar la imagen
    imgContainer.addEventListener('click', () => {
        imgContainer.classList.toggle('enlarged');
    });

    imgContainer.appendChild(img);
    item.appendChild(imgContainer);
    galleryContainer.appendChild(item);
}

// Crear elementos de la galería para cada URL de imagen
imageUrls.forEach(url => createGalleryItem(url));
