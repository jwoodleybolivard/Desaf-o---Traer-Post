// Obtener el botón por su ID
const getPostsButton = document.getElementById('getPostsButton');

// Agregar un event listener al botón
getPostsButton.addEventListener('click', getPosts);

// Crear una función asincrónica para obtener los posts
async function getPosts() {
    console.log('La función getPosts se está ejecutando');
    try {
        // Realizar un request (consulta) a la API usando async-await
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await respuesta.json();

        // Mostrar el resultado del request en HTML
        let lista = document.createElement('ul');
        posts.forEach(post => {
            let elemento = document.createElement('li');
            elemento.textContent = `Post ID: ${post.id}, Título: ${post.title}, Contenido: ${post.body}`;
            lista.appendChild(elemento);
        });
        document.getElementById('post-data').appendChild(lista);
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }
}
