const galleryContainer = document.getElementById('galleryContainer');

// Puedes reemplazar estas URL con las de tus propias imágenes
const imageUrls = [
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/1.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/2.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/3.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/4.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/5.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/6.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/7.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/8.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/9.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/10.jpg',
    'https://raw.githubusercontent.com/yahziem/Para-el-wey-de-Montse/main/Recursos/mensajes/11.jpg',
    
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
    // img.style.width = '500px';
    // img.style.height = '500px';
    // img.style.objectFit = 'cover';

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
